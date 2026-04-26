const router      = require('express').Router();
const Doctor      = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const User        = require('../models/User');
const auth        = require('../middleware/auth');
const emailSvc    = require('../services/emailService');

// GET all doctors
router.get('/', async (req, res) => {
  try {
    const { specialty, search } = req.query;
    const query = {};

    if (specialty && specialty !== 'All') query.specialty_key = specialty;
    if (search) {
      query.$or = [
        { name:         { $regex: search, $options: 'i' } },
        { specialty_en: { $regex: search, $options: 'i' } },
        { specialty_ar: { $regex: search, $options: 'i' } },
      ];
    }

    const doctors = await Doctor.find(query)
      .select('-password')
      .sort({ rating: -1 });

    res.json({ doctors });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET available slots for a doctor
router.get('/:id/slots', async (req, res) => {
  try {
    const { date } = req.query;
    const doctor = await Doctor.findById(req.params.id).select('slots name fee');
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

    const targetDate = date || new Date().toISOString().split('T')[0];
    const booked = await Appointment.find({
      doctorId: req.params.id,
      date:     targetDate,
      status:   { $nin: ['cancelled'] },
    }).select('time');

    const bookedTimes = booked.map(a => a.time);
    const slots = doctor.slots.map(time => ({
      time,
      available: !bookedTimes.includes(time),
    }));

    res.json({ slots, doctorName: doctor.name, fee: doctor.fee });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST book appointment
router.post('/:id/book', auth, async (req, res) => {
  try {
    const { date, time, notes } = req.body;
    if (!date || !time) return res.status(400).json({ error: 'Date and time required' });

    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

    // Check slot availability
    const conflict = await Appointment.findOne({
      doctorId: req.params.id,
      date, time,
      status: { $nin: ['cancelled'] },
    });
    if (conflict) return res.status(409).json({ error: 'This slot is already booked' });

    const appointment = await Appointment.create({
      patientId:  req.user.id,
      doctorId:   req.params.id,
      doctorName: doctor.name,
      specialty:  doctor.specialty_en,
      date, time,
      notes: notes || '',
      fee:   doctor.fee,
      status: 'confirmed',
    });

    await Doctor.findByIdAndUpdate(req.params.id, { $inc: { patients: 1 } });

    // Send confirmation email (non-blocking)
    User.findById(req.user.id).select('name email').then(patient => {
      if (patient?.email) {
        emailSvc.sendAppointmentConfirmation({
          to:          patient.email,
          patientName: patient.name,
          doctorName:  doctor.name,
          specialty:   doctor.specialty_en,
          date, time,
          fee:         doctor.fee,
        }).catch(() => {});
      }
    }).catch(() => {});

    res.status(201).json({ appointment, message: 'Appointment booked successfully!' });
  } catch (err) {
    console.error('Booking error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET my appointments
router.get('/my/appointments', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.user.id })
      .populate('doctorId', 'name specialty_en emoji color fee')
      .sort({ createdAt: -1 });
    res.json({ appointments });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
