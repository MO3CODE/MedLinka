const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const doctorSchema = new mongoose.Schema({
  name:          { type: String, required: true, trim: true },
  email:         { type: String, required: true, unique: true, lowercase: true },
  password:      { type: String, required: true },
  specialty_en:  { type: String, required: true },
  specialty_ar:  { type: String, default: '' },
  specialty_tr:  { type: String, default: '' },
  specialty_key: { type: String, default: 'General' },
  bio_en:        { type: String, default: '' },
  bio_ar:        { type: String, default: '' },
  bio_tr:        { type: String, default: '' },
  rating:        { type: Number, default: 4.5, min: 0, max: 5 },
  reviewCount:   { type: Number, default: 0 },
  patients:      { type: Number, default: 0 },
  exp_years:     { type: Number, default: 1 },
  fee:           { type: Number, default: 50 },
  emoji:         { type: String, default: '👨‍⚕️' },
  color:         { type: String, default: '#d4f5e9' },
  avatar:        { type: String, default: '' },
  available:     { type: Boolean, default: true },
  slots:         { type: [String], default: ['09:00','10:00','11:00','14:00','15:00','16:00'] },
  role:          { type: String, default: 'doctor' },
  verified:      { type: Boolean, default: false },
}, { timestamps: true });

doctorSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
});

doctorSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('Doctor', doctorSchema);
