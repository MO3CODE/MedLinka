const router   = require('express').Router();
const Reminder = require('../models/Reminder');
const auth     = require('../middleware/auth');

// GET my reminders
router.get('/', auth, async (req, res) => {
  try {
    const reminders = await Reminder.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json({ reminders });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST add reminder
router.post('/', auth, async (req, res) => {
  try {
    const { medicineName, emoji, color, detail_en, detail_ar, detail_tr, times } = req.body;
    if (!medicineName) return res.status(400).json({ error: 'Medicine name required' });

    const reminder = await Reminder.create({
      userId: req.user.id,
      medicineName,
      emoji:     emoji     || '💊',
      color:     color     || '#e8f4ff',
      detail_en: detail_en || 'Once daily',
      detail_ar: detail_ar || 'مرة يومياً',
      detail_tr: detail_tr || 'Günde bir kez',
      times:     times     || ['08:00 AM'],
      active: true,
    });

    res.status(201).json({ reminder });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PATCH toggle active or update
router.patch('/:id', auth, async (req, res) => {
  try {
    const reminder = await Reminder.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!reminder) return res.status(404).json({ error: 'Reminder not found' });
    res.json({ reminder });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE reminder
router.delete('/:id', auth, async (req, res) => {
  try {
    await Reminder.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: 'Reminder deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
