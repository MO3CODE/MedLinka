const router      = require('express').Router();
const authMw      = require('../middleware/auth');
const Appointment = require('../models/Appointment');
const Doctor      = require('../models/Doctor');

router.use(authMw);

// ── GET all appointments (patient sees own, doctor sees assigned) ──
router.get('/', async (req, res) => {
  try {
    const { role, id } = req.user;
    const filter = role === 'patient' ? { patientId: id } : { doctorId: id };

    const appointments = await Appointment.find(filter)
      .sort({ date: -1, time: -1 })
      .lean();
    res.json({ appointments });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── POST — book appointment ──
router.post('/', authMw, async (req, res) => {
  try {
    if (req.user.role !== 'patient') return res.status(403).json({ error: 'Patients only' });

    const { doctorId, date, time, type = 'video', notes = '',
            doctorName: submittedName = '', specialty: submittedSpec = '' } = req.body;
    if (!date || !time) return res.status(400).json({ error: 'date and time required' });

    // Try to find doctor in DB — fall back to submitted name/specialty if not found
    let doctor = null;
    const mongoose = require('mongoose');
    if (doctorId && mongoose.Types.ObjectId.isValid(doctorId)) {
      doctor = await Doctor.findById(doctorId).lean();
    }
    if (!doctor && submittedName) {
      doctor = await Doctor.findOne({ name: { $regex: new RegExp(`^${submittedName}$`, 'i') } }).lean();
    }

    const resolvedDoctorId = doctor ? doctor._id : (mongoose.Types.ObjectId.isValid(doctorId) ? doctorId : new mongoose.Types.ObjectId());
    const resolvedName     = doctor ? doctor.name        : submittedName;
    const resolvedSpec     = doctor ? doctor.specialty_en : submittedSpec;
    const resolvedFee      = doctor ? doctor.fee          : 0;

    const appt = await Appointment.create({
      patientId:   req.user.id,
      patientName: req.body.patientName || '',
      doctorId:    resolvedDoctorId,
      doctorName:  resolvedName,
      specialty:   resolvedSpec,
      date, time, type, notes,
      fee:         resolvedFee,
    });

    res.status(201).json({ appointment: appt });
  } catch (err) {
    console.error('Appointment create error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// ── GET appointment by ID ──
router.get('/:id', async (req, res) => {
  try {
    const { role, id } = req.user;
    const appt = await Appointment.findById(req.params.id).lean();
    if (!appt) return res.status(404).json({ error: 'Not found' });

    const owns = (role === 'patient' && String(appt.patientId) === String(id)) ||
                 (role === 'doctor'  && String(appt.doctorId)  === String(id));
    if (!owns) return res.status(403).json({ error: 'Forbidden' });

    res.json({ appointment: appt });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── GET consultation report ──
router.get('/:id/report', async (req, res) => {
  try {
    const { role, id } = req.user;
    const appt = await Appointment.findById(req.params.id).lean();
    if (!appt) return res.status(404).json({ error: 'Not found' });

    const owns = (role === 'patient' && String(appt.patientId) === String(id)) ||
                 (role === 'doctor'  && String(appt.doctorId)  === String(id));
    if (!owns) return res.status(403).json({ error: 'Forbidden' });

    res.json({ appointment: appt, report: appt.report || {} });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── PATCH — save/update consultation report (doctor only) ──
router.patch('/:id/report', async (req, res) => {
  try {
    if (req.user.role !== 'doctor') return res.status(403).json({ error: 'Doctors only' });

    const { diagnosis, doctorNotes, recommendations, medications } = req.body;
    const appt = await Appointment.findOneAndUpdate(
      { _id: req.params.id, doctorId: req.user.id },
      {
        $set: {
          'report.diagnosis':       diagnosis       || '',
          'report.doctorNotes':     doctorNotes     || '',
          'report.recommendations': recommendations || [],
          'report.medications':     medications     || [],
          status: 'completed',
        },
      },
      { new: true }
    );
    if (!appt) return res.status(404).json({ error: 'Not found' });
    res.json({ appointment: appt });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── PATCH — patient submits rating ──
router.patch('/:id/rate', async (req, res) => {
  try {
    if (req.user.role !== 'patient') return res.status(403).json({ error: 'Patients only' });
    const { rating } = req.body;
    if (!rating || rating < 1 || rating > 5) return res.status(400).json({ error: 'Rating 1–5 required' });

    const appt = await Appointment.findOneAndUpdate(
      { _id: req.params.id, patientId: req.user.id },
      { $set: { 'report.rating': rating } },
      { new: true }
    );
    if (!appt) return res.status(404).json({ error: 'Not found' });
    res.json({ appointment: appt });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── PATCH — reschedule appointment ──
router.patch('/:id/reschedule', async (req, res) => {
  try {
    if (req.user.role !== 'patient') return res.status(403).json({ error: 'Patients only' });
    const { date, time } = req.body;
    if (!date || !time) return res.status(400).json({ error: 'date and time required' });

    const appt = await Appointment.findOneAndUpdate(
      { _id: req.params.id, patientId: req.user.id },
      { date, time, status: 'confirmed' },
      { new: true }
    );
    if (!appt) return res.status(404).json({ error: 'Not found' });
    res.json({ appointment: appt });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── PATCH — cancel appointment ──
router.patch('/:id/cancel', async (req, res) => {
  try {
    const { role, id } = req.user;
    const filter = role === 'patient'
      ? { _id: req.params.id, patientId: id }
      : { _id: req.params.id, doctorId: id };

    const appt = await Appointment.findOneAndUpdate(
      filter,
      { status: 'cancelled' },
      { new: true }
    );
    if (!appt) return res.status(404).json({ error: 'Not found' });
    res.json({ appointment: appt });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
