const router      = require('express').Router();
const User        = require('../models/User');
const Doctor      = require('../models/Doctor');
const Pharmacy    = require('../models/Pharmacy');
const Appointment = require('../models/Appointment');
const Order       = require('../models/Order');
const auth        = require('../middleware/auth');

// GET dashboard stats
router.get('/stats', auth, async (req, res) => {
  try {
    const [users, doctors, pharmacies, appointments, orders, revenue] = await Promise.all([
      User.countDocuments(),
      Doctor.countDocuments(),
      Pharmacy.countDocuments(),
      Appointment.countDocuments(),
      Order.countDocuments(),
      Order.aggregate([
        { $match: { status: { $nin: ['cancelled'] } } },
        { $group: { _id: null, total: { $sum: '$total' } } },
      ]),
    ]);

    res.json({
      users, doctors, pharmacies, appointments, orders,
      revenue: revenue[0]?.total || 0,
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET all users
router.get('/users', auth, async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 }).limit(100);
    res.json({ users });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET all doctors
router.get('/doctors', auth, async (req, res) => {
  try {
    const doctors = await Doctor.find().select('-password').sort({ createdAt: -1 });
    res.json({ doctors });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET all appointments
router.get('/appointments', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('patientId', 'name email')
      .populate('doctorId',  'name specialty_en')
      .sort({ createdAt: -1 })
      .limit(100);
    res.json({ appointments });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET all orders
router.get('/orders', auth, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId', 'name email')
      .sort({ createdAt: -1 })
      .limit(100);
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PATCH verify doctor/pharmacy
router.patch('/verify/:type/:id', auth, async (req, res) => {
  try {
    const { type, id } = req.params;
    let entity;
    if      (type === 'doctor')   entity = await Doctor.findByIdAndUpdate(id,   { verified: true }, { new: true }).select('-password');
    else if (type === 'pharmacy') entity = await Pharmacy.findByIdAndUpdate(id, { verified: true }, { new: true }).select('-password');
    if (!entity) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Verified successfully', entity });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
