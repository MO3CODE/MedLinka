const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const emergencyContactSchema = new mongoose.Schema({
  name:     { type: String, default: '' },
  relation: { type: String, default: '' },
  phone:    { type: String, default: '' },
}, { _id: true });

const userSchema = new mongoose.Schema({
  name:          { type: String, required: true, trim: true },
  email:         { type: String, required: true, unique: true, lowercase: true, trim: true },
  password:      { type: String, required: true, minlength: 6 },
  role:          { type: String, enum: ['patient', 'admin'], default: 'patient' },
  lang:          { type: String, enum: ['en', 'ar', 'tr'], default: 'en' },
  avatar:        { type: String, default: '' },
  phone:         { type: String, default: '' },
  city:          { type: String, default: '' },
  address:       { type: String, default: '' },
  gender:        { type: String, enum: ['male', 'female', 'other', ''], default: '' },
  dateOfBirth:   { type: Date, default: null },
  emergencyContacts: { type: [emergencyContactSchema], default: [] },
  emailVerified:  { type: Boolean, default: false },
  refreshTokens:  { type: [String], default: [] },
  resetToken:     { type: String, default: null },
  resetExpires:   { type: Date,   default: null },
}, { timestamps: true });

// Hash password before save
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

module.exports = mongoose.model('User', userSchema);
