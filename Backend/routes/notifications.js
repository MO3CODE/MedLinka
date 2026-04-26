const router       = require('express').Router();
const authMw       = require('../middleware/auth');
const Notification = require('../models/Notification');

router.use(authMw);

// ── GET all notifications ──
router.get('/', async (req, res) => {
  try {
    const { type, limit = 50 } = req.query;
    const filter = { userId: req.user.id };
    if (type && type !== 'all') filter.type = type;

    const notifications = await Notification.find(filter)
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .lean();

    const unreadCount = await Notification.countDocuments({ userId: req.user.id, read: false });
    res.json({ notifications, unreadCount });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── PATCH — mark one as read ──
router.patch('/:id/read', async (req, res) => {
  try {
    const notif = await Notification.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { read: true },
      { new: true }
    );
    if (!notif) return res.status(404).json({ error: 'Not found' });
    res.json({ notification: notif });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── PATCH — mark all as read ──
router.patch('/read-all', async (req, res) => {
  try {
    await Notification.updateMany({ userId: req.user.id, read: false }, { read: true });
    res.json({ message: 'All marked as read' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ── DELETE one notification ──
router.delete('/:id', async (req, res) => {
  try {
    await Notification.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
