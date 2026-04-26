const router  = require('express').Router();
const auth    = require('../middleware/auth');
const User    = require('../models/User');
const Doctor  = require('../models/Doctor');
const Medicine = require('../models/Medicine');

let upload;
const getUpload = () => {
  if (!upload) upload = require('../middleware/upload');
  return upload;
};

const cloudinaryEnabled = () =>
  process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY;

// POST /api/upload/avatar — patient or doctor profile photo
router.post('/avatar', auth, (req, res, next) => {
  if (!cloudinaryEnabled()) return res.status(503).json({ error: 'File upload not configured. Add CLOUDINARY credentials to .env' });

  getUpload().uploadAvatar.single('image')(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    const url = req.file.path;
    const { id, role } = req.user;

    try {
      if (role === 'patient') {
        await User.findByIdAndUpdate(id, { avatar: url });
      } else if (role === 'doctor') {
        await Doctor.findByIdAndUpdate(id, { avatar: url });
      }
      res.json({ url, message: 'Avatar updated' });
    } catch (e) {
      res.status(500).json({ error: 'Failed to update avatar' });
    }
  });
});

// POST /api/upload/medicine-image — pharmacy only
router.post('/medicine-image', auth, (req, res, next) => {
  if (req.user.role !== 'pharmacy') return res.status(403).json({ error: 'Pharmacy accounts only' });
  if (!cloudinaryEnabled()) return res.status(503).json({ error: 'File upload not configured' });

  getUpload().uploadMedicine.single('image')(req, res, async (err) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    const { medicineId } = req.body;
    if (medicineId) {
      await Medicine.findByIdAndUpdate(medicineId, { image: req.file.path });
    }
    res.json({ url: req.file.path });
  });
});

// POST /api/upload/certificate — doctor license upload
router.post('/certificate', auth, (req, res, next) => {
  if (req.user.role !== 'doctor') return res.status(403).json({ error: 'Doctor accounts only' });
  if (!cloudinaryEnabled()) return res.status(503).json({ error: 'File upload not configured' });

  getUpload().uploadCert.single('image')(req, res, (err) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    res.json({ url: req.file.path, message: 'Certificate uploaded' });
  });
});

module.exports = router;
