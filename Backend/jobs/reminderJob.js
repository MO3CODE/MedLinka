const cron = require('node-cron');
const Reminder = require('../models/Reminder');
const User     = require('../models/User');
const { sendReminderEmail } = require('../services/emailService');

// Convert "08:00 AM" or "14:00" to { hour, minute } in 24h
const parseTime = (timeStr) => {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i);
  if (!match) return null;
  let hour   = parseInt(match[1], 10);
  const min  = parseInt(match[2], 10);
  const ampm = match[3]?.toUpperCase();
  if (ampm === 'PM' && hour !== 12) hour += 12;
  if (ampm === 'AM' && hour === 12) hour  = 0;
  return { hour, minute: min };
};

const checkReminders = async () => {
  const now    = new Date();
  const hour   = now.getHours();
  const minute = now.getMinutes();

  try {
    const reminders = await Reminder.find({ active: true });

    for (const reminder of reminders) {
      const shouldFire = reminder.times.some(t => {
        const parsed = parseTime(t);
        return parsed && parsed.hour === hour && parsed.minute === minute;
      });

      if (!shouldFire) continue;

      const user = await User.findById(reminder.userId).select('name email');
      if (!user?.email) continue;

      await sendReminderEmail({
        to:           user.email,
        patientName:  user.name,
        medicineName: reminder.medicineName,
        times:        reminder.times,
      });

      console.log(`📧 Reminder sent: ${user.email} → ${reminder.medicineName}`);
    }
  } catch (err) {
    console.error('Reminder job error:', err.message);
  }
};

const startReminderJob = () => {
  // Run every minute
  cron.schedule('* * * * *', checkReminders);
  console.log('⏰ Reminder job started (runs every minute)');
};

module.exports = { startReminderJob };
