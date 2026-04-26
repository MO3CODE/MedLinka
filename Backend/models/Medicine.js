const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  emoji:                { type: String, default: '💊' },
  name_en:              { type: String, required: true },
  name_ar:              { type: String, default: '' },
  name_tr:              { type: String, default: '' },
  desc_en:              { type: String, default: '' },
  desc_ar:              { type: String, default: '' },
  desc_tr:              { type: String, default: '' },
  price:                { type: Number, required: true, min: 0 },
  type:                 { type: String, enum: ['Painkillers','Antibiotics','Vitamins','Herbal','Other'], default: 'Other' },
  stock:                { type: Number, default: 100, min: 0 },
  requiresPrescription: { type: Boolean, default: false },
  image:                { type: String, default: '' },
  pharmacyId:           { type: mongoose.Schema.Types.ObjectId, ref: 'Pharmacy' },
}, { timestamps: true });

module.exports = mongoose.model('Medicine', medicineSchema);
