const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  patientId:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctorId:     { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  doctorName:   { type: String, default: '' },
  doctorSpecialty: { type: String, default: '' },
  plan:         { type: String, enum: ['monthly', 'quarterly', 'yearly'], default: 'monthly' },
  status:       { type: String, enum: ['active', 'expired', 'cancelled'], default: 'active' },
  startDate:    { type: Date, required: true },
  endDate:      { type: Date, required: true },
  totalSessions:{ type: Number, default: 4 },
  usedSessions: { type: Number, default: 0 },
  price:        { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Subscription', subscriptionSchema);
