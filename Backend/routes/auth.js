const router   = require('express').Router();
const jwt      = require('jsonwebtoken');
const crypto   = require('crypto');
const User     = require('../models/User');
const Doctor   = require('../models/Doctor');
const Pharmacy = require('../models/Pharmacy');
const authMw   = require('../middleware/auth');
const email    = require('../services/emailService');

const ACCESS_TTL  = '15m';
const REFRESH_TTL = '30d';

const signAccess  = (payload) => jwt.sign(payload, process.env.JWT_SECRET,         { expiresIn: ACCESS_TTL });
const signRefresh = (payload) => jwt.sign(payload, process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET + '_refresh', { expiresIn: REFRESH_TTL });

const setRefreshCookie = (res, token) => {
  res.cookie('refreshToken', token, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge:   30 * 24 * 60 * 60 * 1000,
  });
};

// ── PATIENT REGISTER ──
router.post('/register', async (req, res) => {
  try {
    const { name, email: mail, password, lang } = req.body;
    if (!name || !mail || !password) return res.status(400).json({ error: 'All fields required' });
    if (password.length < 6) return res.status(400).json({ error: 'Password minimum 6 characters' });

    if (await User.findOne({ email: mail })) return res.status(409).json({ error: 'Email already registered' });

    const user         = await User.create({ name, email: mail, password, lang: lang || 'en' });
    const accessToken  = signAccess({ id: user._id, role: 'patient' });
    const refreshToken = signRefresh({ id: user._id, role: 'patient' });

    user.refreshTokens.push(refreshToken);
    await user.save();

    setRefreshCookie(res, refreshToken);

    email.sendWelcomeEmail({ to: mail, name }).catch(() => {});

    const { password: _, refreshTokens: __, ...safe } = user.toObject();
    res.status(201).json({ token: accessToken, user: safe });
  } catch (err) {
    console.error('Register error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── DOCTOR REGISTER ──
router.post('/register/doctor', async (req, res) => {
  try {
    const { name, email: mail, password, specialty_en, specialty_ar, specialty_tr, specialty_key, exp_years, fee, bio_en, bio_ar, bio_tr } = req.body;
    if (!name || !mail || !password || !specialty_en) return res.status(400).json({ error: 'Required fields missing' });

    if (await Doctor.findOne({ email: mail })) return res.status(409).json({ error: 'Email already registered' });

    const count  = await Doctor.countDocuments();
    const emojis = ['👨‍⚕️', '👩‍⚕️'];
    const colors  = ['#d4f5e9','#fce4ec','#e3f2fd','#f3e5f5','#fff9c4','#e8f5e9'];

    const doc = await Doctor.create({
      name, email: mail, password,
      specialty_en,
      specialty_ar:  specialty_ar  || specialty_en,
      specialty_tr:  specialty_tr  || specialty_en,
      specialty_key: specialty_key || 'General',
      exp_years: Number(exp_years) || 1,
      fee:       Number(fee)       || 50,
      bio_en: bio_en || '', bio_ar: bio_ar || '', bio_tr: bio_tr || '',
      emoji:  emojis[count % 2],
      color:  colors[count % colors.length],
      verified: false,
    });

    const accessToken = signAccess({ id: doc._id, role: 'doctor' });
    const { password: _, ...safe } = doc.toObject();
    res.status(201).json({ token: accessToken, user: safe });
  } catch (err) {
    console.error('Doctor register error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── PHARMACY REGISTER ──
router.post('/register/pharmacy', async (req, res) => {
  try {
    const { name, email: mail, password, address, phone, openHours } = req.body;
    if (!name || !mail || !password || !address) return res.status(400).json({ error: 'Required fields missing' });

    if (await Pharmacy.findOne({ email: mail })) return res.status(409).json({ error: 'Email already registered' });

    const ph = await Pharmacy.create({
      name, email: mail, password, address,
      phone:     phone     || '',
      openHours: openHours || '9AM-9PM',
      verified:  false,
    });

    const accessToken = signAccess({ id: ph._id, role: 'pharmacy' });
    const { password: _, ...safe } = ph.toObject();
    res.status(201).json({ token: accessToken, user: safe });
  } catch (err) {
    console.error('Pharmacy register error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── LOGIN (all roles) ──
router.post('/login', async (req, res) => {
  try {
    const { email: mail, password } = req.body;
    if (!mail || !password) return res.status(400).json({ error: 'All fields required' });

    // Patient
    const user = await User.findOne({ email: mail });
    if (user) {
      if (!await user.comparePassword(password)) return res.status(401).json({ error: 'Invalid credentials' });

      const accessToken  = signAccess({ id: user._id, role: 'patient' });
      const refreshToken = signRefresh({ id: user._id, role: 'patient' });

      user.refreshTokens = [...(user.refreshTokens || []).slice(-4), refreshToken]; // keep last 5
      await user.save();

      setRefreshCookie(res, refreshToken);

      const { password: _, refreshTokens: __, resetToken: ___, resetExpires: ____, ...safe } = user.toObject();
      return res.json({ token: accessToken, user: safe });
    }

    // Doctor
    const doc = await Doctor.findOne({ email: mail });
    if (doc) {
      if (!await doc.comparePassword(password)) return res.status(401).json({ error: 'Invalid credentials' });
      const { password: _, ...safe } = doc.toObject();
      return res.json({ token: signAccess({ id: doc._id, role: 'doctor' }), user: safe });
    }

    // Pharmacy
    const ph = await Pharmacy.findOne({ email: mail });
    if (ph) {
      if (!await ph.comparePassword(password)) return res.status(401).json({ error: 'Invalid credentials' });
      const { password: _, ...safe } = ph.toObject();
      return res.json({ token: signAccess({ id: ph._id, role: 'pharmacy' }), user: safe });
    }

    res.status(401).json({ error: 'Invalid credentials' });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── REFRESH ACCESS TOKEN ──
router.post('/refresh', async (req, res) => {
  const token = req.cookies?.refreshToken;
  if (!token) return res.status(401).json({ error: 'No refresh token' });

  try {
    const secret  = process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET + '_refresh';
    const decoded = jwt.verify(token, secret);

    const user = await User.findById(decoded.id);
    if (!user || !user.refreshTokens.includes(token)) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }

    const newAccess  = signAccess({ id: user._id, role: 'patient' });
    const newRefresh = signRefresh({ id: user._id, role: 'patient' });

    user.refreshTokens = user.refreshTokens.filter(t => t !== token);
    user.refreshTokens.push(newRefresh);
    await user.save();

    setRefreshCookie(res, newRefresh);
    res.json({ token: newAccess });
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired refresh token' });
  }
});

// ── LOGOUT ──
router.post('/logout', async (req, res) => {
  const token = req.cookies?.refreshToken;
  if (token) {
    try {
      const secret  = process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET + '_refresh';
      const decoded = jwt.verify(token, secret);
      await User.findByIdAndUpdate(decoded.id, { $pull: { refreshTokens: token } });
    } catch (_) {}
  }
  res.clearCookie('refreshToken');
  res.json({ message: 'Logged out' });
});

// ── FORGOT PASSWORD ──
router.post('/forgot-password', async (req, res) => {
  try {
    const { email: mail } = req.body;
    if (!mail) return res.status(400).json({ error: 'Email required' });

    const user = await User.findOne({ email: mail });
    if (!user) return res.json({ message: 'If this email exists, a reset link was sent.' });

    const token   = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    user.resetToken   = token;
    user.resetExpires = expires;
    await user.save();

    email.sendPasswordReset({ to: mail, name: user.name, resetToken: token }).catch(() => {});
    res.json({ message: 'If this email exists, a reset link was sent.' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── RESET PASSWORD ──
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password: newPass } = req.body;
    if (!token || !newPass) return res.status(400).json({ error: 'Token and password required' });
    if (newPass.length < 6) return res.status(400).json({ error: 'Password minimum 6 characters' });

    const user = await User.findOne({
      resetToken:   token,
      resetExpires: { $gt: new Date() },
    });
    if (!user) return res.status(400).json({ error: 'Invalid or expired reset token' });

    user.password     = newPass;
    user.resetToken   = null;
    user.resetExpires = null;
    user.refreshTokens = []; // invalidate all sessions
    await user.save();

    res.json({ message: 'Password reset successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── VERIFY TOKEN ──
router.get('/me', authMw, async (req, res) => {
  try {
    const { id, role } = req.user;
    let entity;
    if      (role === 'patient')  entity = await User.findById(id).select('-password -refreshTokens -resetToken -resetExpires');
    else if (role === 'doctor')   entity = await Doctor.findById(id).select('-password');
    else if (role === 'pharmacy') entity = await Pharmacy.findById(id).select('-password');

    if (!entity) return res.status(404).json({ error: 'User not found' });
    res.json({ user: entity });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
