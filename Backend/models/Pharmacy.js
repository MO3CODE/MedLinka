const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const pharmacySchema = new mongoose.Schema({
  name:         { type: String, required: true, trim: true },
  email:        { type: String, required: true, unique: true, lowercase: true },
  password:     { type: String, required: true },
  address:      { type: String, required: true },
  phone:        { type: String, default: '' },
  rating:       { type: Number, default: 4.0 },
  openHours:    { type: String, default: '9AM-9PM' },
  delivery:     { type: Boolean, default: true },
  deliveryTime: { type: String, default: '3-5 hours' },
  role:         { type: String, default: 'pharmacy' },
  verified:     { type: Boolean, default: false },
}, { timestamps: true });

pharmacySchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
});

pharmacySchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('Pharmacy', pharmacySchema);
