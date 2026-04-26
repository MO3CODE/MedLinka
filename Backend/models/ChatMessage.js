const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role:   { type: String, enum: ['user', 'model'], required: true },
  text:   { type: String, required: true },
  lang:   { type: String, enum: ['en', 'ar', 'tr'], default: 'en' },
}, { timestamps: true });

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
