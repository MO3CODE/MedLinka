const nodemailer = require('nodemailer');

const createTransporter = () => {
  if (process.env.EMAIL_PROVIDER === 'resend') {
    return nodemailer.createTransport({
      host: 'smtp.resend.com',
      port: 465,
      secure: true,
      auth: {
        user: 'resend',
        pass: process.env.RESEND_API_KEY,
      },
    });
  }

  // Default: Gmail SMTP
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const FROM = process.env.EMAIL_FROM || 'MedLinka <noreply@medlinka.com>';

const sendEmail = async ({ to, subject, html }) => {
  if (!process.env.EMAIL_USER && !process.env.RESEND_API_KEY) {
    console.log(`[Email skipped — no credentials] To: ${to} | Subject: ${subject}`);
    return;
  }
  const transporter = createTransporter();
  await transporter.sendMail({ from: FROM, to, subject, html });
};

// ── Templates ──

exports.sendAppointmentConfirmation = async ({ to, patientName, doctorName, specialty, date, time, fee }) => {
  await sendEmail({
    to,
    subject: '✅ Appointment Confirmed — MedLinka',
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:24px;border:1px solid #e0e0e0;border-radius:12px">
        <h2 style="color:#0a7c6e">🏥 MedLinka — Appointment Confirmed</h2>
        <p>Hello <strong>${patientName}</strong>,</p>
        <p>Your appointment has been confirmed:</p>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px;color:#666">Doctor</td><td style="padding:8px;font-weight:bold">${doctorName}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;color:#666">Specialty</td><td style="padding:8px">${specialty}</td></tr>
          <tr><td style="padding:8px;color:#666">Date</td><td style="padding:8px;font-weight:bold">${date}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;color:#666">Time</td><td style="padding:8px;font-weight:bold">${time}</td></tr>
          <tr><td style="padding:8px;color:#666">Fee</td><td style="padding:8px">$${fee}</td></tr>
        </table>
        <p style="margin-top:24px;color:#888;font-size:12px">MedLinka — Your All-in-One Healthcare Platform</p>
      </div>
    `,
  });
};

exports.sendReminderEmail = async ({ to, patientName, medicineName, times }) => {
  await sendEmail({
    to,
    subject: `⏰ Medicine Reminder: ${medicineName} — MedLinka`,
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:24px;border:1px solid #e0e0e0;border-radius:12px">
        <h2 style="color:#0a7c6e">💊 MedLinka — Medicine Reminder</h2>
        <p>Hello <strong>${patientName}</strong>,</p>
        <p>Time to take your medicine:</p>
        <div style="background:#e8f5e9;padding:16px;border-radius:8px;margin:16px 0">
          <strong style="font-size:18px">${medicineName}</strong><br>
          <span style="color:#666">Scheduled: ${times.join(', ')}</span>
        </div>
        <p style="color:#888;font-size:12px">To manage your reminders, open the MedLinka app.</p>
      </div>
    `,
  });
};

exports.sendPasswordReset = async ({ to, name, resetToken }) => {
  const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;
  await sendEmail({
    to,
    subject: '🔑 Password Reset — MedLinka',
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:24px;border:1px solid #e0e0e0;border-radius:12px">
        <h2 style="color:#0a7c6e">🔑 Reset Your Password</h2>
        <p>Hello <strong>${name}</strong>,</p>
        <p>Click below to reset your password. This link expires in 1 hour.</p>
        <a href="${resetUrl}" style="display:inline-block;background:#0a7c6e;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;margin:16px 0">Reset Password</a>
        <p style="color:#888;font-size:12px">If you didn't request this, please ignore this email.</p>
      </div>
    `,
  });
};

exports.sendWelcomeEmail = async ({ to, name }) => {
  await sendEmail({
    to,
    subject: '🎉 Welcome to MedLinka!',
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:24px;border:1px solid #e0e0e0;border-radius:12px">
        <h2 style="color:#0a7c6e">🏥 Welcome to MedLinka!</h2>
        <p>Hello <strong>${name}</strong>,</p>
        <p>Your account has been created successfully. You can now:</p>
        <ul style="color:#444;line-height:2">
          <li>🤖 Chat with our AI Medical Assistant</li>
          <li>👨‍⚕️ Book appointments with top doctors</li>
          <li>💊 Order medicines from our pharmacy</li>
          <li>⏰ Set medication reminders</li>
        </ul>
        <p style="color:#888;font-size:12px">MedLinka — Your All-in-One Healthcare Platform</p>
      </div>
    `,
  });
};
