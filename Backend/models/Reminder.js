const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  userId:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicineName: { type: String, required: true },
  emoji:        { type: String, default: '💊' },
  color:        { type: String, default: '#e8f4ff' },
  detail_en:    { type: String, default: 'Once daily' },
  detail_ar:    { type: String, default: 'مرة يومياً' },
  detail_tr:    { type: String, default: 'Günde bir kez' },
  times:        { type: [String], default: ['08:00 AM'] },
  active:       { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Reminder', reminderSchema);
