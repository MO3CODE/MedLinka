const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId:          { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    medicineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Medicine' },
    name:       { type: String },
    price:      { type: Number },
    quantity:   { type: Number, default: 1 },
  }],
  total:           { type: Number, required: true, min: 0 },
  status:          { type: String, enum: ['pending','confirmed','shipped','delivered','cancelled'], default: 'confirmed' },
  deliveryAddress: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
