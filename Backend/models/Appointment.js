const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  patientName: { type: String, default: '' },
  doctorId:    { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  doctorName:  { type: String, default: '' },
  specialty:   { type: String, default: '' },
  date:        { type: String, required: true }, // YYYY-MM-DD
  time:        { type: String, required: true }, // HH:MM
  status:      { type: String, enum: ['pending','confirmed','cancelled','completed'], default: 'confirmed' },
  type:        { type: String, enum: ['video','voice','in_person'], default: 'video' },
  notes:       { type: String, default: '' },
  fee:         { type: Number, default: 0 },
  // Consultation report (filled after appointment)
  report: {
    diagnosis:       { type: String, default: '' },
    doctorNotes:     { type: String, default: '' },
    recommendations: { type: [String], default: [] },
    medications: [{
      name:     { type: String },
      dose:     { type: String },
      duration: { type: String },
    }],
    rating:    { type: Number, default: null, min: 1, max: 5 },
  },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
