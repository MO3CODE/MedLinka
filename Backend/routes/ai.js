const router      = require('express').Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const ChatMessage = require('../models/ChatMessage');
const auth        = require('../middleware/auth');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPTS = {
  en: `You are MedLinka's Medical AI Assistant. Help users understand their symptoms and provide general health guidance.
RULES:
1. Always recommend consulting a real doctor for serious symptoms
2. Never diagnose definitively — only suggest possibilities
3. Keep responses clear, structured with bullet points
4. Always end with a disclaimer
5. Be empathetic and supportive
6. Max 200 words per response
FORMAT: Brief symptom analysis → Possible causes (bullets) → Home care tips → When to see a doctor → ⚠️ Disclaimer`,

  ar: `أنت المساعد الطبي الذكي لـ MedLinka. ساعد المستخدمين في فهم أعراضهم.
القواعد:
1. أوصِ دائماً بمراجعة طبيب حقيقي للأعراض الخطيرة
2. لا تشخّص بشكل قاطع — اقترح الاحتمالات فقط
3. ردود واضحة ومنظمة بنقاط
4. أضف إخلاء مسؤولية في النهاية دائماً
5. كن متعاطفاً وداعماً
6. 200 كلمة كحد أقصى`,

  tr: `MedLinka'nın Tıbbi Yapay Zeka Asistanısınız.
KURALLAR:
1. Ciddi semptomlar için gerçek doktora danışmayı önerin
2. Kesin teşhis koymayın — sadece olasılıkları önerin
3. Net ve madde işaretli yanıtlar verin
4. Her zaman sorumluluk reddi ekleyin
5. Empatik ve destekleyici olun
6. Maksimum 200 kelime`,
};

// Fallback messages when all models fail
const FALLBACK = {
  en: "I'm having trouble connecting right now. ⚠️ For urgent medical issues, please see a doctor immediately.",
  ar: "أواجه صعوبة في الاتصال. ⚠️ للحالات العاجلة، راجع طبيباً فوراً.",
  tr: "Şu anda bağlantı sorunu yaşıyorum. ⚠️ Acil durumlar için hemen bir doktora gidin.",
};

// POST /api/ai/chat
router.post('/chat', auth, async (req, res) => {
  const { message, lang } = req.body;
  if (!message) return res.status(400).json({ error: 'Message required' });

  const userId = req.user.id;
  const userLang = lang || 'en';

  // Save user message
  await ChatMessage.create({ userId, role: 'user', text: message, lang: userLang });

  // Get recent history (last 10 messages)
  const history = await ChatMessage.find({ userId })
    .sort({ createdAt: -1 })
    .limit(10)
    .then(msgs => msgs.reverse());

  // Try models in order — fallback chain for rate limits & API key access
  const MODEL_CHAIN = [
    'gemini-2.0-flash',
    'gemini-1.5-flash',
    'gemini-1.5-flash-8b',
  ];

  for (const modelName of MODEL_CHAIN) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
      });

      const systemPrompt = SYSTEM_PROMPTS[userLang] || SYSTEM_PROMPTS.en;
      const chatHistory  = history.slice(0, -1).map(m => ({
        role:  m.role,
        parts: [{ text: m.text }],
      }));

      const chat   = model.startChat({ history: chatHistory });
      const result = await chat.sendMessage(`[SYSTEM: ${systemPrompt}]\n\nUser: ${message}`);
      const aiText = result.response.text();

      // Save AI response
      await ChatMessage.create({ userId, role: 'model', text: aiText, lang: userLang });

      return res.json({ response: aiText, model: modelName });

    } catch (err) {
      const isRateLimit = err.message?.includes('429') || err.message?.includes('quota') || err.status === 429;
      if (isRateLimit) {
        console.warn(`⚠️  ${modelName} rate limited — trying next model...`);
        continue;
      }
      // Non-rate-limit error — log and break
      console.error(`Gemini ${modelName} error:`, err.message, err.status, err.statusText);
      break;
    }
  }

  // All models failed
  res.json({ response: FALLBACK[userLang] || FALLBACK.en, fallback: true });
});

// GET /api/ai/history
router.get('/history', auth, async (req, res) => {
  try {
    const history = await ChatMessage.find({ userId: req.user.id })
      .sort({ createdAt: 1 })
      .limit(50);
    res.json({ history });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/ai/history
router.delete('/history', auth, async (req, res) => {
  try {
    const result = await ChatMessage.deleteMany({ userId: req.user.id });
    res.json({ message: `Cleared ${result.deletedCount} messages` });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
