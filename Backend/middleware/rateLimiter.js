const rateLimit = require('express-rate-limit');

// للتسجيل والدخول — 10 محاولات كل 15 دقيقة
exports.authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many attempts, please try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// للـ API العام — 200 طلب كل دقيقة
exports.generalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 200,
  message: { error: 'Too many requests, please slow down.' },
  standardHeaders: true,
  legacyHeaders: false,
});
