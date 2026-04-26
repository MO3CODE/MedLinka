const router      = require('express').Router();
const authMw      = require('../middleware/auth');
const User        = require('../models/User');
const HealthProfile = require('../models/HealthProfile');
const Appointment = require('../models/Appointment');
const Order       = require('../models/Order');

// All routes require patient auth
router.use(authMw);
router.use((req, res, next) => {
  if (req.user.role !== 'patient') return res.status(403).json({ error: 'Patients only' });
  next();
});

// ── GET personal profile ──
router.get('/me', async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .select('-password -refreshTokens -resetToken -resetExpires');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── PATCH personal profile ──
router.patch('/me', async (req, res) => {
  try {
    const allowed = ['name', 'phone', 'city', 'address', 'gender', 'dateOfBirth', 'lang', 'avatar', 'emergencyContacts'];
    const updates = {};
    allowed.forEach(k => { if (req.body[k] !== undefined) updates[k] = req.body[k]; });

    // email update (check uniqueness)
    if (req.body.email && req.body.email !== req.user.email) {
      const exists = await User.findOne({ email: req.body.email.toLowerCase() });
      if (exists) return res.status(409).json({ error: 'Email already in use' });
      updates.email = req.body.email.toLowerCase();
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-password -refreshTokens -resetToken -resetExpires');

    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── PUT (alias for PATCH) ──
router.put('/me', async (req, res, next) => { req.method = 'PATCH'; next(); }, async (req, res) => {
  res.redirect(307, '/api/users/me');
});

// ── GET health profile ──
router.get('/me/health', async (req, res) => {
  try {
    let hp = await HealthProfile.findOne({ userId: req.user.id });
    if (!hp) hp = await HealthProfile.create({ userId: req.user.id });
    res.json({ health: hp });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── PATCH health profile ──
router.patch('/me/health', async (req, res) => {
  try {
    const allowed = ['bloodType', 'height', 'weight', 'heartRate', 'bloodPressure', 'glucose', 'temperature', 'allergies', 'conditions', 'medications'];
    const updates = {};
    allowed.forEach(k => { if (req.body[k] !== undefined) updates[k] = req.body[k]; });

    const hp = await HealthProfile.findOneAndUpdate(
      { userId: req.user.id },
      { $set: updates },
      { new: true, upsert: true, runValidators: true }
    );
    res.json({ health: hp });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── GET history (appointments + orders) ──
router.get('/me/history', async (req, res) => {
  try {
    const [appointments, orders] = await Promise.all([
      Appointment.find({ patientId: req.user.id })
        .sort({ createdAt: -1 })
        .limit(50)
        .lean(),
      Order.find({ userId: req.user.id })
        .sort({ createdAt: -1 })
        .limit(50)
        .lean(),
    ]);
    res.json({ appointments, orders });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
