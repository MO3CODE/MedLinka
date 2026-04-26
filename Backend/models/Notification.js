const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type:    { type: String, enum: ['reminder', 'appointment', 'order', 'system'], default: 'system' },
  title:   { type: String, required: true },
  body:    { type: String, default: '' },
  read:    { type: Boolean, default: false },
  meta:    { type: mongoose.Schema.Types.Mixed, default: {} }, // extra data (appointmentId, orderId, etc.)
}, { timestamps: true });

notificationSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model('Notification', notificationSchema);
