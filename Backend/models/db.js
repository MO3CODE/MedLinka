// ══════════════════════════════════════
// MedLinka — In-Memory Database
// Replace with MongoDB/PostgreSQL in production
// ══════════════════════════════════════

let users = [];
let doctors = [
  { id: 1, userId: null, name: 'Dr. Ahmed Mohamed', email: 'ahmed@medlinka.com', password: '$2a$10$N.zmdr9zkqZFEY9Qabf/GeRbxhHMtVY9MzKfbBnQWfQW4TbS8Wnna', // password: doctor123
    specialty_en: 'General Medicine', specialty_ar: 'طب عام', specialty_tr: 'Genel Tıp',
    specialty_key: 'General', rating: 4.9, patients: 1200, exp_years: 12,
    emoji: '👨‍⚕️', color: '#d4f5e9', bio_en: 'Experienced general practitioner with 12 years of practice.',
    bio_ar: 'طبيب عام ذو خبرة واسعة بأكثر من 12 عاماً في الممارسة الطبية.',
    bio_tr: '12 yıllık deneyimli genel pratisyen.', fee: 50, available: true,
    slots: ['09:00','10:00','12:00','14:00','16:00','17:00'],
    role: 'doctor', verified: true, createdAt: new Date('2024-01-01')
  },
  { id: 2, userId: null, name: 'Dr. Sara Ali', email: 'sara@medlinka.com', password: '$2a$10$N.zmdr9zkqZFEY9Qabf/GeRbxhHMtVY9MzKfbBnQWfQW4TbS8Wnna',
    specialty_en: 'Cardiology', specialty_ar: 'أمراض القلب', specialty_tr: 'Kardiyoloji',
    specialty_key: 'Cardiology', rating: 4.8, patients: 980, exp_years: 15,
    emoji: '👩‍⚕️', color: '#fce4ec', bio_en: 'Cardiologist specializing in heart disease prevention and treatment.',
    bio_ar: 'طبيبة قلب متخصصة في الوقاية من أمراض القلب وعلاجها.',
    bio_tr: 'Kalp hastalıklarının önlenmesi ve tedavisinde uzman kardiyolog.', fee: 80, available: true,
    slots: ['09:00','11:00','14:00','15:00','17:00'],
    role: 'doctor', verified: true, createdAt: new Date('2024-01-02')
  },
  { id: 3, userId: null, name: 'Dr. Khalid Ibrahim', email: 'khalid@medlinka.com', password: '$2a$10$N.zmdr9zkqZFEY9Qabf/GeRbxhHMtVY9MzKfbBnQWfQW4TbS8Wnna',
    specialty_en: 'Pediatrics', specialty_ar: 'طب الأطفال', specialty_tr: 'Pediatri',
    specialty_key: 'Pediatrics', rating: 4.9, patients: 2100, exp_years: 10,
    emoji: '👨‍⚕️', color: '#e3f2fd', bio_en: 'Dedicated pediatrician caring for children from newborn to adolescence.',
    bio_ar: 'طبيب أطفال متفانٍ يرعى الأطفال من حديثي الولادة حتى المراهقة.',
    bio_tr: 'Yeni doğandan ergenliğe kadar çocuklara bakan çocuk doktoru.', fee: 60, available: true,
    slots: ['08:00','09:00','10:00','11:00','14:00','16:00'],
    role: 'doctor', verified: true, createdAt: new Date('2024-01-03')
  },
  { id: 4, userId: null, name: 'Dr. Mona Hassan', email: 'mona@medlinka.com', password: '$2a$10$N.zmdr9zkqZFEY9Qabf/GeRbxhHMtVY9MzKfbBnQWfQW4TbS8Wnna',
    specialty_en: 'Dermatology', specialty_ar: 'الجلدية', specialty_tr: 'Dermatoloji',
    specialty_key: 'Dermatology', rating: 4.7, patients: 760, exp_years: 8,
    emoji: '👩‍⚕️', color: '#f3e5f5', bio_en: 'Dermatologist specializing in skin conditions and cosmetic treatments.',
    bio_ar: 'طبيبة جلدية متخصصة في أمراض الجلد والعلاجات التجميلية.',
    bio_tr: 'Cilt hastalıkları ve kozmetik tedavilerde uzman dermatolog.', fee: 70, available: true,
    slots: ['10:00','11:00','13:00','15:00','17:00'],
    role: 'doctor', verified: true, createdAt: new Date('2024-01-04')
  },
  { id: 5, userId: null, name: 'Dr. Omar Yousuf', email: 'omar@medlinka.com', password: '$2a$10$N.zmdr9zkqZFEY9Qabf/GeRbxhHMtVY9MzKfbBnQWfQW4TbS8Wnna',
    specialty_en: 'Eye Care', specialty_ar: 'العيون', specialty_tr: 'Göz',
    specialty_key: 'Eye Care', rating: 4.8, patients: 890, exp_years: 11,
    emoji: '👨‍⚕️', color: '#fff9c4', bio_en: 'Ophthalmologist with expertise in refractive surgery and cataract treatment.',
    bio_ar: 'طبيب عيون متخصص في جراحة الانكسار وعلاج الساد.',
    bio_tr: 'Refraktif cerrahi ve katarakt tedavisinde uzman göz doktoru.', fee: 75, available: true,
    slots: ['09:00','10:00','12:00','14:00','16:00'],
    role: 'doctor', verified: true, createdAt: new Date('2024-01-05')
  },
  { id: 6, userId: null, name: 'Dr. Fatima Omar', email: 'fatima@medlinka.com', password: '$2a$10$N.zmdr9zkqZFEY9Qabf/GeRbxhHMtVY9MzKfbBnQWfQW4TbS8Wnna',
    specialty_en: 'General Medicine', specialty_ar: 'طب عام', specialty_tr: 'Genel Tıp',
    specialty_key: 'General', rating: 4.6, patients: 1400, exp_years: 9,
    emoji: '👩‍⚕️', color: '#e8f5e9', bio_en: 'General practitioner focused on preventive care and chronic disease management.',
    bio_ar: 'طبيبة عامة تركز على الرعاية الوقائية وإدارة الأمراض المزمنة.',
    bio_tr: 'Koruyucu bakım ve kronik hastalık yönetimine odaklanan pratisyen.', fee: 45, available: true,
    slots: ['08:00','09:00','11:00','13:00','15:00','17:00'],
    role: 'doctor', verified: true, createdAt: new Date('2024-01-06')
  }
];

let pharmacies = [
  { id: 1, name: 'MedLinka Central Pharmacy', email: 'central@pharmacy.com', password: '$2a$10$N.zmdr9zkqZFEY9Qabf/GeRbxhHMtVY9MzKfbBnQWfQW4TbS8Wnna',
    address: '123 Health Street', phone: '+1-555-0101', rating: 4.8,
    open_hours: '24/7', delivery: true, delivery_time: '2-4 hours',
    role: 'pharmacy', verified: true, createdAt: new Date('2024-01-01')
  },
  { id: 2, name: 'HealthPlus Pharmacy', email: 'healthplus@pharmacy.com', password: '$2a$10$N.zmdr9zkqZFEY9Qabf/GeRbxhHMtVY9MzKfbBnQWfQW4TbS8Wnna',
    address: '456 Wellness Ave', phone: '+1-555-0102', rating: 4.6,
    open_hours: '8AM-10PM', delivery: true, delivery_time: '3-5 hours',
    role: 'pharmacy', verified: true, createdAt: new Date('2024-01-02')
  }
];

let medicines = [
  { id: 1, emoji: '💊', name_en: 'Paracetamol 500mg', name_ar: 'باراسيتامول 500 ملغ', name_tr: 'Parasetamol 500mg',
    desc_en: 'Pain reliever & fever reducer', desc_ar: 'مسكن ألم وخافض حرارة', desc_tr: 'Ağrı kesici ve ateş düşürücü',
    price: 4.00, price_display: '$4', type: 'Painkillers', stock: 150, pharmacy_id: 1, requires_prescription: false
  },
  { id: 2, emoji: '🩺', name_en: 'Amoxicillin 250mg', name_ar: 'أموكسيسيلين 250 ملغ', name_tr: 'Amoksisilin 250mg',
    desc_en: 'Broad-spectrum antibiotic', desc_ar: 'مضاد حيوي واسع الطيف', desc_tr: 'Geniş spektrumlu antibiyotik',
    price: 12.00, price_display: '$12', type: 'Antibiotics', stock: 80, pharmacy_id: 1, requires_prescription: true
  },
  { id: 3, emoji: '🍊', name_en: 'Vitamin C 1000mg', name_ar: 'فيتامين ج 1000 ملغ', name_tr: 'C Vitamini 1000mg',
    desc_en: 'Immune system booster', desc_ar: 'لتقوية المناعة', desc_tr: 'Bağışıklık sistemi güçlendirici',
    price: 9.00, price_display: '$9', type: 'Vitamins', stock: 200, pharmacy_id: 1, requires_prescription: false
  },
  { id: 4, emoji: '☀️', name_en: 'Vitamin D3 5000IU', name_ar: 'فيتامين د٣ 5000 وحدة', name_tr: 'D3 Vitamini 5000IU',
    desc_en: 'Bone health & immunity', desc_ar: 'لصحة العظام والمناعة', desc_tr: 'Kemik sağlığı & bağışıklık',
    price: 14.00, price_display: '$14', type: 'Vitamins', stock: 120, pharmacy_id: 1, requires_prescription: false
  },
  { id: 5, emoji: '💉', name_en: 'Ibuprofen 400mg', name_ar: 'إيبوبروفين 400 ملغ', name_tr: 'İbuprofen 400mg',
    desc_en: 'Anti-inflammatory & pain relief', desc_ar: 'مضاد للالتهاب ومسكن', desc_tr: 'Anti-enflamatuvar & ağrı kesici',
    price: 5.00, price_display: '$5', type: 'Painkillers', stock: 180, pharmacy_id: 1, requires_prescription: false
  },
  { id: 6, emoji: '🍯', name_en: 'Honey Syrup Natural', name_ar: 'شراب العسل الطبيعي', name_tr: 'Doğal Bal Şurubu',
    desc_en: 'Natural throat soother', desc_ar: 'لتهدئة الحلق طبيعياً', desc_tr: 'Doğal boğaz yatıştırıcı',
    price: 11.00, price_display: '$11', type: 'Herbal', stock: 60, pharmacy_id: 2, requires_prescription: false
  },
  { id: 7, emoji: '⚡', name_en: 'Zinc + Selenium', name_ar: 'زنك + سيلينيوم', name_tr: 'Çinko + Selenyum',
    desc_en: 'Immunity & body support', desc_ar: 'لدعم المناعة والجسم', desc_tr: 'Bağışıklık & vücut desteği',
    price: 16.00, price_display: '$16', type: 'Vitamins', stock: 90, pharmacy_id: 2, requires_prescription: false
  },
  { id: 8, emoji: '🌿', name_en: 'Echinacea Extract', name_ar: 'مستخلص إيخيناسيا', name_tr: 'Ekinezya Ekstresi',
    desc_en: 'Herbal immune support', desc_ar: 'دعم المناعة بالأعشاب', desc_tr: 'Bitkisel bağışıklık desteği',
    price: 13.00, price_display: '$13', type: 'Herbal', stock: 45, pharmacy_id: 2, requires_prescription: false
  }
];

let appointments = [];
let orders = [];
let reminders = [];
let chatHistory = [];

// ID counters
let nextUserId = 1;
let nextAppointmentId = 1;
let nextOrderId = 1;
let nextReminderId = 1;
let nextChatId = 1;

module.exports = {
  users, doctors, pharmacies, medicines, appointments, orders, reminders, chatHistory,
  getNextUserId: () => nextUserId++,
  getNextAppointmentId: () => nextAppointmentId++,
  getNextOrderId: () => nextOrderId++,
  getNextReminderId: () => nextReminderId++,
  getNextChatId: () => nextChatId++
};
