const router       = require('express').Router();
const authMw       = require('../middleware/auth');
const Subscription = require('../models/Subscription');
const Doctor       = require('../models/Doctor');

router.use(authMw);
router.use((req, res, next) => {
  if (req.user.role !== 'patient') return res.status(403).json({ error: 'Patients only' });
  next();
});

// ── GET all subscriptions ──
router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const filter = { patientId: req.user.id };
    if (status) filter.status = status;

    const subscriptions = await Subscription.find(filter)
      .sort({ createdAt: -1 })
      .lean();
    res.json({ subscriptions });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── POST — create subscription ──
router.post('/', async (req, res) => {
  try {
    const { doctorId, plan = 'monthly' } = req.body;
    if (!doctorId) return res.status(400).json({ error: 'doctorId required' });

    const doctor = await Doctor.findById(doctorId).lean();
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

    const planConfig = {
      monthly:   { days: 30,  sessions: 4,  price: doctor.fee * 4  * 0.9  },
      quarterly: { days: 90,  sessions: 12, price: doctor.fee * 12 * 0.85 },
      yearly:    { days: 365, sessions: 48, price: doctor.fee * 48 * 0.75 },
    };
    const cfg = planConfig[plan] || planConfig.monthly;

    const startDate = new Date();
    const endDate   = new Date(Date.now() + cfg.days * 24 * 60 * 60 * 1000);

    const sub = await Subscription.create({
      patientId:       req.user.id,
      doctorId,
      doctorName:      doctor.name,
      doctorSpecialty: doctor.specialty_en,
      plan,
      startDate,
      endDate,
      totalSessions:   cfg.sessions,
      price:           Math.round(cfg.price),
    });

    res.status(201).json({ subscription: sub });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── DELETE — cancel subscription ──
router.delete('/:id', async (req, res) => {
  try {
    const sub = await Subscription.findOne({ _id: req.params.id, patientId: req.user.id });
    if (!sub) return res.status(404).json({ error: 'Not found' });
    sub.status = 'cancelled';
    await sub.save();
    res.json({ message: 'Cancelled' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
