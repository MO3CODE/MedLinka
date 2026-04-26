const router   = require('express').Router();
const Medicine = require('../models/Medicine');
const Order    = require('../models/Order');
const auth     = require('../middleware/auth');

// GET medicines
router.get('/medicines', async (req, res) => {
  try {
    const { type, search } = req.query;
    const query = {};

    if (type && type !== 'All') query.type = type;
    if (search) {
      query.$or = [
        { name_en: { $regex: search, $options: 'i' } },
        { name_ar: { $regex: search, $options: 'i' } },
        { name_tr: { $regex: search, $options: 'i' } },
      ];
    }

    const medicines = await Medicine.find(query).sort({ name_en: 1 });
    res.json({ medicines });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST add medicine (pharmacy only)
router.post('/medicines', auth, async (req, res) => {
  try {
    if (req.user.role !== 'pharmacy') return res.status(403).json({ error: 'Pharmacy accounts only' });
    const med = await Medicine.create({ ...req.body, pharmacyId: req.user.id });
    res.status(201).json({ medicine: med });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST place order
router.post('/order', auth, async (req, res) => {
  try {
    const { items, deliveryAddress } = req.body;
    if (!items || !items.length) return res.status(400).json({ error: 'No items in order' });

    let total = 0;
    const orderItems = [];

    for (const item of items) {
      const med = await Medicine.findById(item.medicineId);
      if (!med) continue;

      const qty = item.quantity || 1;
      if (med.stock < qty) return res.status(400).json({ error: `${med.name_en} is out of stock` });

      orderItems.push({ medicineId: med._id, name: med.name_en, price: med.price, quantity: qty });
      total += med.price * qty;

      await Medicine.findByIdAndUpdate(med._id, { $inc: { stock: -qty } });
    }

    const order = await Order.create({
      userId: req.user.id,
      items:  orderItems,
      total,
      deliveryAddress: deliveryAddress || '',
      status: 'confirmed',
    });

    res.status(201).json({ order, message: 'Order placed successfully!' });
  } catch (err) {
    console.error('Order error:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET my orders
router.get('/my/orders', auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
