const mongoose = require('mongoose');

const healthProfileSchema = new mongoose.Schema({
  userId:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  bloodType:   { type: String, enum: ['A+','A-','B+','B-','AB+','AB-','O+','O-',''], default: '' },
  height:      { type: Number, default: null }, // cm
  weight:      { type: Number, default: null }, // kg
  heartRate:   { type: Number, default: null }, // bpm
  bloodPressure: { type: String, default: '' }, // e.g. "120/80"
  glucose:     { type: Number, default: null }, // mg/dL
  temperature: { type: Number, default: null }, // °C
  allergies:   { type: [String], default: [] },
  conditions:  { type: [String], default: [] },
  medications: { type: [String], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('HealthProfile', healthProfileSchema);
