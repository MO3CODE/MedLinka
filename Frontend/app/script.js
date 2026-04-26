/* ═══════════════════════════════════════════════════════════
   MEDLINKA — FRONTEND SCRIPT
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────────
   i18n DICTIONARY
───────────────────────────────────────────── */
const i18n = {
  en: {
    appName: 'MedLinka', appTag: 'Your all-in-one healthcare platform.',
    heroTitle: 'Your All-in-One Healthcare Platform',
    heroSub: 'AI diagnosis · Doctors · Pharmacy · Reminders',
    feat1: '🤖 AI Assistant', feat2: '👨‍⚕️ Doctors', feat3: '💊 Pharmacy', feat4: '⏰ Reminders',
    featDesc1: 'Describe your symptoms and get instant AI-powered medical guidance 24/7.',
    featDesc2: 'Browse top-rated specialists and book appointments in seconds.',
    featDesc3: 'Order medicines, vitamins, and supplements delivered to your door.',
    featDesc4: 'Never miss a dose with smart medication reminder management.',
    createAccount: 'Create Free Account', signIn: 'Sign In', logout: 'Logout',
    greeting: 'Good morning 👋',
    qaAI: 'AI Chat', qaDoc: 'Doctors', qaPharm: 'Pharmacy', qaRem: 'Reminders',
    todayRem: "Today's Reminders", topDocs: 'Top Doctors', featMed: 'Featured Medicines', seeAll: 'See all →',
    done: 'Done', soon: 'Soon', later: 'Later',
    navHome: 'Home', navAI: 'AI Chat', navDocs: 'Doctors', navPharm: 'Pharmacy', navRem: 'Reminders',
    viewDir: 'View Directory', shopPharm: 'Shop Pharmacy',
    qaSub1: 'Consult with MedLinka AI', qaSub2: 'Book specialized care', qaSub3: 'Order prescriptions', qaSub4: 'Track your dosage',
    aiTitle: 'Medical AI Assistant', aiSub: 'Available 24/7 · Powered by AI',
    chatPh: 'Describe your symptoms…',
    aiWelcome: "Hello! I'm your Medical AI Assistant. How can I help you today? 😊",
    chips: ['🤒 Fever & Headache', '😷 Flu symptoms', '🤢 Nausea', '😴 Insomnia'],
    doctorsTitle: 'Medical Consultation', doctorsSub: 'Book with top specialists',
    searchDoc: 'Search doctor or specialty…',
    docFilters: ['All', 'General', 'Cardiology', 'Pediatrics', 'Dermatology', 'Eye Care'],
    bookBtn: 'Book', pickTime: 'Choose your preferred time', date: 'Date',
    availableSlots: 'Available Slots', confirmBook: 'Confirm Booking 📅', cancel: 'Cancel',
    pharmacyTitle: 'Pharmacy & Treatments', pharmacySub: 'Explore our curated catalog of medical-grade treatments and supplements, strictly regulated and verified for clinical excellence.',
    searchMed: 'Search medicines & treatments…',
    medFilters: ['All', 'Fast Relief', 'Antibiotics', 'Supplements', 'Herbal Botanics'],
    uploadPresc: 'Upload Prescription',
    pharmCtaTitle: "Can't find what you're looking for?",
    pharmCtaDesc: 'Our clinical team can source specific medications or suggest certified alternatives through a brief video consultation.',
    pharmCtaBtn1: 'Book a Consultation', pharmCtaBtn2: 'Chat with Pharmacist',
    addCart: 'Add to Cart', addedCart: '✓ Added', cartBar: 'My Cart', cartTitle: 'My Cart 🛒', checkout: 'Place Order 🎉',
    remTitle: 'Medicine Reminders', remSub: 'Manage your medications and stay on track with your health journey through curated schedules and AI-powered insights.', addRem: 'Add New Reminder',
    navCalls: 'My Calls', navProfile: 'Profile', navVitals: 'Vitals',
    callsTitle: 'My Consultations', callsSub: 'Track your booked video calls and access consultation reports.',
    profileTitle: 'My Profile', vitalsTitle: 'Health Vitals', vitalsSub: 'Monitor your key health metrics and trends.',
    register: 'Register', login: 'Login',
    authSubReg: 'Join MedLinka for free', authSubLog: 'Welcome back!',
    fullName: 'Full Name', email: 'Email', password: 'Password', confirmPass: 'Confirm Password',
    namePh: 'Enter your full name', aiPlaceholder: 'Describe your symptoms…',
    aiPendingMsg: "We'll answer your question right after you sign up!",
    toastReg: 'Welcome to MedLinka! 🎉', toastBook: 'Appointment booked successfully! 📅',
    toastCart: 'Added to cart! 🛒', toastOrder: 'Order placed successfully! 🎉',
    toastRem: 'Reminder added! ⏰', toastToggle: 'Reminder updated!',
    errFill: 'Please fill in all fields.', errPass: 'Passwords do not match.', errSlot: 'Please select a time slot.',
    totalLabel: 'Total:',
    // ── Home page ──
    homeGreeting: 'Marhaba,', homeGreetingSub: 'Your wellness journey is flourishing today.',
    todaysDate: "TODAY'S DATE", dailySteps: 'DAILY STEPS', heartRate: 'HEART RATE',
    sleepQuality: 'SLEEP QUALITY', hydration: 'HYDRATION', bpm: 'BPM', hrs: 'Hrs', liters: 'Liters',
    wellnessLib: 'Health & Wellness', exploreAll: 'Explore All →', comingUp: 'Coming Up',
    weeklyActivity: 'Weekly Activity', browsePharm: 'Browse →', manageRem: 'Manage →',
    days: ['SUN','MON','TUE','WED','THU','FRI','SAT'],
    artTitle1: 'Understanding Your Health Metrics: A Complete Guide',
    artDesc1: 'Discover how daily tracking of steps, heart rate, and sleep transforms your long-term wellness outcomes.',
    artTitle2: 'Smart Medication Management', artDesc2: 'How reminders and tracking reduce missed doses by 60%...',
    artTitle3: 'AI-Powered Diagnosis', artDesc3: 'How AI models are transforming early disease detection...',
    // ── Calls ──
    filterAll: 'All', filterUpcoming: 'Upcoming', filterCompleted: 'Completed', filterCancelled: 'Cancelled',
    joinCall: 'Join Call', reschedule: 'Reschedule', viewReport: 'View Report', rebook: 'Rebook',
    noConsults: 'No consultations found',
    rsPanel: '📅 Reschedule Appointment', rsNewDate: 'New Date', rsNewTime: 'New Time',
    rsConfirm: 'Confirm Reschedule',
    // ── Doctor Profile ──
    backToDoctors: '← Back to Doctors', patientRating: 'PATIENT RATING',
    successfulProc: 'Successful Procedures', yearsExp: 'Years Exp.', reviews: 'Reviews',
    biography: 'BIOGRAPHY', credentials: 'Academic Credentials', medDegree: 'Medical Degree (MD)',
    certMedical: 'Certified Medical Professional', patientRefl: 'Patient Reflections',
    reserveSession: 'Reserve Session', availDates: 'AVAILABLE DATES', selectSlot: 'SELECT SLOT',
    bookVideo: 'Book Video Consultation', bookNote: "You won't be charged until the consultation is confirmed.",
    needHelp: 'Need help booking?', healthConcierge: 'Speak with a health concierge',
    // ── Vitals ──
    lastSynced: '🔄 Last synced: Today', addReading: 'Add Reading',
    aiInsights: 'AI Health Insights', scheduleCheck: '📅 Schedule Full Health Check',
    // ── Profile ──
    medRecords: 'Medical Records Summary', bloodGroup: 'BLOOD GROUP', weight: 'WEIGHT', height: 'HEIGHT',
    allergiesSec: 'Allergies & Sensitivities', addAllergy: '+ Add',
    emergencyContacts: 'Emergency Contacts', contactInfo: 'Contact Information',
    emailAddr: 'EMAIL ADDRESS', mobileNum: 'MOBILE NUMBER', city: 'CITY',
    editProfile: 'Edit Profile', editYourInfo: 'Edit Your Information', saveChanges: 'Save Changes', cancelEdit: 'Cancel',
    recentConsults: 'Recent Consultations', viewAll: 'View All',
    premiumMember: 'PREMIUM MEMBER', upgradePlan: 'Upgrade Plan',
    // ── Upgrade Plans ──
    plansTitle: 'Choose Your Plan', plansSub: 'Unlock the full power of MedLinka',
    planFree: 'Free', planPremium: 'Premium', planPro: 'Pro',
    planFreePriceLabel: 'Always free', planPremiumPrice: '$9.99', planProPrice: '$24.99',
    perMonth: '/ month',
    planFreeFeatures: ['AI Chat (5 queries/day)', 'Browse Doctors', 'Basic Pharmacy', '1 Reminder'],
    planPremiumFeatures: ['Unlimited AI Chat', 'Book Appointments', 'Full Pharmacy', 'Unlimited Reminders', 'Video Consultations', 'Health Vitals Tracking'],
    planProFeatures: ['Everything in Premium', 'Priority Support 24/7', 'Family Profiles (5)', 'Lab Results Integration', 'Personal Health Coach', 'Advanced AI Insights'],
    currentPlan: 'Current Plan', selectPlan: 'Get Started', mostPopular: 'MOST POPULAR',
    // ── Reminders ──
    morningRituals: 'Morning Rituals', afternoonRituals: 'Afternoon Rituals', eveningRituals: 'Evening Rituals',
    activePlans: 'ACTIVE PLANS', remindersSet: 'REMINDERS SET', daysTracked: 'DAYS TRACKED', healthLevel: 'HEALTH LEVEL',
    adherenceScore: 'ADHERENCE SCORE', lowStock: 'Low Stock Alerts', refill: 'Refill',
    // ── Landing Hero ──
    heroEyebrow: 'YOUR ALL-IN-ONE HEALTHCARE PLATFORM',
    heroMainTitle: 'Your All-in-One Healthcare Platform',
    heroDesc: 'Experience medical-grade AI diagnosis, instant doctor consultations, and seamless prescription management. Trusted by professionals, preferred by patients.',
    heroAnalyze: 'Analyze It',
    statProfessionals: 'Professionals', statSpecialties: 'Specialties', statAvailability: 'Availability', statSuccess: 'Success Rate',
    // ── Bento ──
    bentoDiagLabel: 'AI DIAGNOSIS', bentoDiagTitle: 'Symptom analysis complete', bentoDiagSub: '3 possible conditions identified',
    bentoApptLabel: 'NEXT APPOINTMENT', bentoApptSub: 'Today · 10:00 AM', bentoConfirmed: 'Confirmed ✓',
    bentoDoctors: 'Doctors', bentoSpecialties: 'Specialties',
    bentoCommunityLabel: 'COMMUNITY', bentoCommunityTitle: '1.2M+ Patients Helped', bentoCommunitySub: 'Join them today',
    bentoRatingLbl: 'Average Rating',
    // ── Care Section ──
    whatWeOffer: 'WHAT WE OFFER',
    careHeading: 'Comprehensive Care, Simplified',
    careAITitle: 'AI Diagnosis Assistant',
    careAIDesc: 'Our AI powered diagnostic tool analyses your symptoms against millions of medical cases and treatment plans to provide accurate health insights.',
    careAIBtn: 'Get Free Diagnosis',
    carePharmTitle: 'Health Pharmacy',
    carePharmDesc: 'Managing your medication schedule has never been easier. Order prescriptions, set smart reminders, and get doorstep delivery in minutes.',
    carePharmBtn: 'Know More →',
    careHipaa: 'HIPAA Compliant',
    // ── Journey ──
    howItWorks: 'HOW IT WORKS',
    journeyTitle: 'Patient Journey',
    journeySub: 'A seamless path from symptom to solution in four simple steps',
    step1Title: 'Discover Solutions', step1Desc: 'Describe your symptoms or browse our specialist directory to find the care you need.',
    step2Title: 'Get AI Support', step2Desc: 'Our AI analyses your input and suggests the most relevant medical solutions instantly.',
    step3Title: 'Connect with Doctor', step3Desc: 'Book a verified specialist instantly. Video consult or in-person — your choice, your schedule.',
    step4Title: 'Take Recovery', step4Desc: 'Follow your personalised treatment plan with smart reminders and pharmacy delivery.',
    // ── Specialists ──
    verifiedExperts: 'VERIFIED EXPERTS',
    topSpecialists: 'Our Top Specialists',
    advancedSearch: 'Advanced Search →',
    bookNow: 'Book Now',
    // ── Community ──
    testimonials: 'TESTIMONIALS',
    communityHeading: 'Stories from our Healthy Community',
    quote1: '"The AI diagnosis system is incredibly accurate. It identified my condition correctly and recommended the right specialist. Booking was seamless and the doctor was excellent."',
    quote2: '"Managing my chronic condition has become so much easier. I get reminded to take my medication, order refills with one click, and consult my doctor when needed."',
    quote3: '"I was hesitant at first, but MedLinka exceeded every expectation. The platform is intuitive, doctors are responsive, and the AI assistant is like having a doctor on call 24/7."',
    // ── FAQ ──
    supportLabel: 'SUPPORT',
    faqTitle: 'Frequently Asked Questions',
    faqContact: "Can't find what you're looking for?",
    faqContactLink: 'Contact us →',
    faq1Q: 'How accurate is the AI consultation experience?',
    faq1A: 'Our AI diagnostic engine is trained on millions of medical records and continuously updated with the latest clinical guidelines. It provides highly accurate symptom analysis, though it always recommends consulting a certified physician for definitive diagnosis.',
    faq2Q: 'Is my personal health information protected?',
    faq2A: 'Absolutely. MedLinka is fully HIPAA-compliant and uses AES-256 encryption for all data at rest and in transit. Your health information is never sold or shared with third parties without your explicit consent.',
    faq3Q: 'How do I get started with my first consultation?',
    faq3A: 'Create a free account in under 60 seconds, describe your symptoms in the AI chat or browse our doctor directory, choose a specialist, and book your preferred slot. First consultations are often available within hours.',
    faq4Q: 'Can I use MedLinka through this app only?',
    faq4A: 'MedLinka is available as a web application accessible from any browser on desktop, tablet, or mobile. Native iOS and Android apps are coming soon with additional features including wearable device integration.',
    faq5Q: 'Does MedLinka work for emergency situations?',
    faq5A: 'MedLinka is designed for non-emergency consultations. For life-threatening situations, please call your local emergency number immediately. The AI assistant will always direct you to emergency services if it detects serious symptoms.',
    // ── CTA ──
    ctaTitle: 'Take Control of Your Health Today',
    ctaDesc: 'Join 10,000+ patients who trust MedLinka for their daily medical needs. Start your health journey free — no credit card required.',
    ctaBtn1: 'Add Consultation', ctaBtn2: 'Talk to a Specialist',
    ctaStat1: 'Active Patients', ctaStat2: 'Specialists', ctaStat3: 'Satisfaction',
    // ── Footer ──
    footerTagline: 'Your all-in-one healthcare platform. AI-powered, doctor-approved, patient-first.',
    footerCol1: 'MedLinka', footerCol2: 'Company', footerCol3: 'Legal',
    footerAIDiag: 'AI Diagnosis', footerFindDoc: 'Find Doctors', footerPharm: 'Pharmacy', footerRem: 'Reminders',
    footerAbout: 'About Us', footerCareers: 'Careers', footerPress: 'Press', footerBlog: 'Blog',
    footerPrivacy: 'Privacy Policy', footerTerms: 'Terms of Service', footerCookie: 'Cookie Policy', footerDisclaimer: 'Disclaimer',
    footerCopy: '© 2026 MedLinka. All rights reserved.',
    footerMade: 'Made with ❤️ for better healthcare',
    // ── Auth page ──
    authLeftTitle: 'A Legacy of Wellness Reimagined.',
    authLeftAccent: 'Wellness',
    authLeftDesc: 'Join a platform where AI-powered diagnostics meet world-class specialists. Your journey to holistic health starts here.',
    authStatPatients: 'Active Patients', authStatRating: 'Wellness Rating', authStatSpecs: 'Specialties', authStatSupport: 'AI Support',
  },
  ar: {
    appName: 'ميدلينكا', appTag: 'منصتك الصحية الشاملة.',
    heroTitle: 'منصتك الصحية الشاملة',
    heroSub: 'تشخيص AI · أطباء · صيدلية · تذكيرات',
    feat1: '🤖 مساعد الذكاء الاصطناعي', feat2: '👨‍⚕️ الأطباء', feat3: '💊 الصيدلية', feat4: '⏰ التذكيرات',
    featDesc1: 'صف أعراضك واحصل على إرشادات طبية فورية بالذكاء الاصطناعي.',
    featDesc2: 'تصفح أفضل المتخصصين واحجز مواعيد في ثوانٍ.',
    featDesc3: 'اطلب الأدوية والمكملات الغذائية وتوصيلها إلى بابك.',
    featDesc4: 'لا تفوت جرعة واحدة مع إدارة التذكيرات الذكية.',
    createAccount: 'إنشاء حساب مجاني', signIn: 'تسجيل الدخول', logout: 'تسجيل الخروج',
    greeting: 'صباح الخير 👋',
    qaAI: 'محادثة AI', qaDoc: 'الأطباء', qaPharm: 'الصيدلية', qaRem: 'التذكيرات',
    todayRem: 'تذكيرات اليوم', topDocs: 'أفضل الأطباء', featMed: 'أدوية مميزة', seeAll: 'عرض الكل →',
    done: 'تم', soon: 'قريباً', later: 'لاحقاً',
    navHome: 'الرئيسية', navAI: 'محادثة AI', navDocs: 'الأطباء', navPharm: 'الصيدلية', navRem: 'التذكيرات',
    viewDir: 'دليل الأطباء', shopPharm: 'الصيدلية',
    qaSub1: 'استشر الذكاء الاصطناعي', qaSub2: 'احجز رعاية متخصصة', qaSub3: 'اطلب الوصفات', qaSub4: 'تتبع جرعاتك',
    aiTitle: 'مساعد طبي بالذكاء الاصطناعي', aiSub: 'متاح 24/7 · مدعوم بالذكاء الاصطناعي',
    chatPh: 'صف أعراضك…',
    aiWelcome: 'مرحباً! أنا مساعدك الطبي الذكي. كيف يمكنني مساعدتك اليوم؟ 😊',
    chips: ['🤒 حمى وصداع', '😷 أعراض الإنفلونزا', '🤢 غثيان', '😴 أرق'],
    doctorsTitle: 'الاستشارة الطبية', doctorsSub: 'احجز مع أفضل المتخصصين',
    searchDoc: 'ابحث عن طبيب أو تخصص…',
    docFilters: ['الكل', 'عام', 'القلب', 'الأطفال', 'الجلدية', 'العيون'],
    bookBtn: 'حجز', pickTime: 'اختر وقتك المفضل', date: 'التاريخ',
    availableSlots: 'المواعيد المتاحة', confirmBook: 'تأكيد الحجز 📅', cancel: 'إلغاء',
    pharmacyTitle: 'الصيدلية والعلاجات', pharmacySub: 'استكشف كتالوجنا المنتقى من العلاجات والمكملات الغذائية، المنظمة والموثقة بدقة.',
    uploadPresc: 'رفع وصفة طبية',
    pharmCtaTitle: 'لم تجد ما تبحث عنه؟',
    pharmCtaDesc: 'يمكن لفريقنا الطبي توفير أدوية محددة أو اقتراح بدائل معتمدة.',
    pharmCtaBtn1: 'احجز استشارة', pharmCtaBtn2: 'تحدث مع الصيدلاني',
    searchMed: 'ابحث عن الأدوية…',
    medFilters: ['الكل', 'سريع المفعول', 'مضادات حيوية', 'مكملات', 'أعشاب طبية'],
    addCart: '+ إضافة', addedCart: '✓ تمت الإضافة', cartBar: 'سلة التسوق', cartTitle: 'سلة التسوق 🛒', checkout: 'تأكيد الطلب 🎉',
    remTitle: 'تذكيرات الأدوية', remSub: 'لا تفوت جرعة واحدة', addRem: '➕ إضافة تذكير جديد',
    navCalls: 'مكالماتي', navProfile: 'الملف الشخصي', navVitals: 'المؤشرات الصحية',
    callsTitle: 'استشاراتي', callsSub: 'تتبع مكالمات الفيديو المحجوزة والوصول إلى تقارير الاستشارة.',
    profileTitle: 'ملفي الشخصي', vitalsTitle: 'المؤشرات الصحية', vitalsSub: 'راقب مؤشراتك الصحية الرئيسية والاتجاهات.',
    register: 'تسجيل', login: 'دخول',
    authSubReg: 'انضم إلى ميدلينكا مجاناً', authSubLog: 'مرحباً بعودتك!',
    fullName: 'الاسم الكامل', email: 'البريد الإلكتروني', password: 'كلمة المرور', confirmPass: 'تأكيد كلمة المرور',
    namePh: 'أدخل اسمك الكامل', aiPlaceholder: 'صف أعراضك…',
    aiPendingMsg: 'سنجيب على سؤالك فور التسجيل!',
    toastReg: 'مرحباً بك في ميدلينكا! 🎉', toastBook: 'تم حجز الموعد بنجاح! 📅',
    toastCart: 'تمت الإضافة إلى السلة! 🛒', toastOrder: 'تم تأكيد الطلب بنجاح! 🎉',
    toastRem: 'تمت إضافة التذكير! ⏰', toastToggle: 'تم تحديث التذكير!',
    errFill: 'يرجى ملء جميع الحقول.', errPass: 'كلمتا المرور غير متطابقتين.', errSlot: 'يرجى اختيار موعد.',
    totalLabel: 'المجموع:',
    homeGreeting: 'مرحباً،', homeGreetingSub: 'رحلتك الصحية تزدهر اليوم.',
    todaysDate: 'تاريخ اليوم', dailySteps: 'الخطوات اليومية', heartRate: 'معدل ضربات القلب',
    sleepQuality: 'جودة النوم', hydration: 'الترطيب', bpm: 'نبضة/دقيقة', hrs: 'ساعة', liters: 'لتر',
    wellnessLib: 'الصحة والعافية', exploreAll: 'استكشاف الكل ←', comingUp: 'القادم',
    weeklyActivity: 'النشاط الأسبوعي', browsePharm: 'تصفح ←', manageRem: 'إدارة ←',
    days: ['أحد','اثن','ثلاث','أربع','خمس','جمعة','سبت'],
    artTitle1: 'فهم مؤشراتك الصحية: دليل شامل',
    artDesc1: 'اكتشف كيف يُحوّل التتبع اليومي للخطوات ومعدل ضربات القلب والنوم نتائجك الصحية على المدى البعيد.',
    artTitle2: 'إدارة الأدوية الذكية', artDesc2: 'كيف تقلل التذكيرات والتتبع من الجرعات الفائتة بنسبة 60%...',
    artTitle3: 'التشخيص بالذكاء الاصطناعي', artDesc3: 'كيف تُحوّل نماذج الذكاء الاصطناعي الكشف المبكر عن الأمراض...',
    filterAll: 'الكل', filterUpcoming: 'القادمة', filterCompleted: 'المكتملة', filterCancelled: 'الملغاة',
    joinCall: 'الانضمام', reschedule: 'إعادة جدولة', viewReport: 'عرض التقرير', rebook: 'إعادة الحجز',
    noConsults: 'لا توجد استشارات',
    rsPanel: '📅 إعادة جدولة الموعد', rsNewDate: 'تاريخ جديد', rsNewTime: 'وقت جديد',
    rsConfirm: 'تأكيد إعادة الجدولة',
    backToDoctors: '← العودة للأطباء', patientRating: 'تقييم المريض',
    successfulProc: 'إجراءات ناجحة', yearsExp: 'سنوات خبرة', reviews: 'تقييم',
    biography: 'السيرة الذاتية', credentials: 'المؤهلات الأكاديمية', medDegree: 'شهادة الطب',
    certMedical: 'طبيب معتمد', patientRefl: 'آراء المرضى',
    reserveSession: 'احجز جلسة', availDates: 'التواريخ المتاحة', selectSlot: 'اختر الوقت',
    bookVideo: 'احجز استشارة فيديو', bookNote: 'لن يتم الخصم حتى تأكيد الاستشارة.',
    needHelp: 'تحتاج مساعدة في الحجز؟', healthConcierge: 'تحدث مع مسؤول الرعاية',
    lastSynced: '🔄 آخر مزامنة: اليوم', addReading: 'إضافة قراءة',
    aiInsights: 'رؤى الذكاء الاصطناعي', scheduleCheck: '📅 جدولة فحص صحي شامل',
    medRecords: 'ملخص السجلات الطبية', bloodGroup: 'فصيلة الدم', weight: 'الوزن', height: 'الطول',
    allergiesSec: 'الحساسيات', addAllergy: '+ إضافة',
    emergencyContacts: 'جهات الطوارئ', contactInfo: 'معلومات الاتصال',
    emailAddr: 'البريد الإلكتروني', mobileNum: 'رقم الهاتف', city: 'المدينة',
    editProfile: 'تعديل الملف', editYourInfo: 'تعديل معلوماتك', saveChanges: 'حفظ التغييرات', cancelEdit: 'إلغاء',
    recentConsults: 'الاستشارات الأخيرة', viewAll: 'عرض الكل',
    premiumMember: 'عضو مميز', upgradePlan: 'ترقية الخطة',
    plansTitle: 'اختر خطتك', plansSub: 'اكتشف قوة ميدلينكا الكاملة',
    planFree: 'مجاني', planPremium: 'بريميوم', planPro: 'احترافي',
    planFreePriceLabel: 'مجاني دائماً', planPremiumPrice: '37 ريال', planProPrice: '94 ريال',
    perMonth: '/ شهرياً',
    planFreeFeatures: ['محادثة AI (5 يومياً)', 'تصفح الأطباء', 'صيدلية أساسية', 'تذكير واحد'],
    planPremiumFeatures: ['محادثة AI بلا حدود', 'حجز المواعيد', 'صيدلية كاملة', 'تذكيرات غير محدودة', 'استشارات فيديو', 'تتبع المؤشرات الصحية'],
    planProFeatures: ['كل مزايا بريميوم', 'دعم أولوية 24/7', 'ملفات العائلة (5)', 'ربط نتائج المختبر', 'مدرب صحي شخصي', 'رؤى AI متقدمة'],
    currentPlan: 'خطتك الحالية', selectPlan: 'ابدأ الآن', mostPopular: 'الأكثر شيوعاً',
    morningRituals: 'روتين الصباح', afternoonRituals: 'روتين الظهر', eveningRituals: 'روتين المساء',
    activePlans: 'خطط نشطة', remindersSet: 'تذكيرات مضبوطة', daysTracked: 'أيام متتبعة', healthLevel: 'المستوى الصحي',
    adherenceScore: 'معدل الالتزام', lowStock: 'تنبيهات النفاد', refill: 'إعادة ملء',
    // ── Landing Hero ──
    heroEyebrow: 'منصتك الصحية الشاملة',
    heroMainTitle: 'منصتك الصحية الشاملة',
    heroDesc: 'استمتع بتشخيص طبي بالذكاء الاصطناعي، واستشارات فورية مع الأطباء، وإدارة سلسة للوصفات الطبية. موثوق به من المختصين، مفضل لدى المرضى.',
    heroAnalyze: 'تحليل',
    statProfessionals: 'متخصص', statSpecialties: 'تخصص', statAvailability: 'متاح', statSuccess: 'معدل النجاح',
    // ── Bento ──
    bentoDiagLabel: 'تشخيص AI', bentoDiagTitle: 'اكتمل تحليل الأعراض', bentoDiagSub: 'تم تحديد 3 حالات محتملة',
    bentoApptLabel: 'الموعد القادم', bentoApptSub: 'اليوم · 10:00 ص', bentoConfirmed: 'مؤكد ✓',
    bentoDoctors: 'طبيب', bentoSpecialties: 'تخصص',
    bentoCommunityLabel: 'المجتمع', bentoCommunityTitle: '+1.2 مليون مريض تمت مساعدتهم', bentoCommunitySub: 'انضم إليهم اليوم',
    bentoRatingLbl: 'متوسط التقييم',
    // ── Care Section ──
    whatWeOffer: 'ما نقدمه',
    careHeading: 'رعاية شاملة ومُبسَّطة',
    careAITitle: 'مساعد التشخيص بالذكاء الاصطناعي',
    careAIDesc: 'تحلّل أداة التشخيص المدعومة بالذكاء الاصطناعي أعراضك بمقارنتها بملايين الحالات الطبية وخطط العلاج لتقديم رؤى صحية دقيقة.',
    careAIBtn: 'احصل على تشخيص مجاني',
    carePharmTitle: 'الصيدلية الصحية',
    carePharmDesc: 'لم تكن إدارة جدول أدويتك أسهل من قبل. اطلب الوصفات الطبية، واضبط التذكيرات الذكية، واحصل على التوصيل إلى باب منزلك في دقائق.',
    carePharmBtn: 'اعرف أكثر ←',
    careHipaa: 'متوافق مع HIPAA',
    // ── Journey ──
    howItWorks: 'كيف يعمل',
    journeyTitle: 'رحلة المريض',
    journeySub: 'مسار سلس من العرض إلى الحل في أربع خطوات بسيطة',
    step1Title: 'اكتشف الحلول', step1Desc: 'صف أعراضك أو تصفح دليل المتخصصين للعثور على الرعاية التي تحتاجها.',
    step2Title: 'احصل على دعم الذكاء الاصطناعي', step2Desc: 'يحلل الذكاء الاصطناعي مدخلاتك ويقترح أنسب الحلول الطبية على الفور.',
    step3Title: 'تواصل مع طبيب', step3Desc: 'احجز متخصصاً معتمداً فوراً. استشارة فيديو أو حضوري — اختيارك، جدولك.',
    step4Title: 'ابدأ التعافي', step4Desc: 'اتبع خطة علاجك الشخصية مع تذكيرات ذكية وتوصيل الدواء.',
    // ── Specialists ──
    verifiedExperts: 'خبراء معتمدون',
    topSpecialists: 'أبرز متخصصينا',
    advancedSearch: 'بحث متقدم ←',
    bookNow: 'احجز الآن',
    // ── Community ──
    testimonials: 'شهادات العملاء',
    communityHeading: 'قصص من مجتمعنا الصحي',
    quote1: '«نظام التشخيص بالذكاء الاصطناعي دقيق بشكل لا يصدق. حدد حالتي بشكل صحيح وأوصى بالمختص المناسب. كان الحجز سلسًا والطبيب ممتازاً.»',
    quote2: '«أصبحت إدارة حالتي المزمنة أسهل بكثير. أتلقى تذكيرات بتناول دوائي، وأطلب إعادة التعبئة بنقرة واحدة، وأستشير طبيبي عند الحاجة.»',
    quote3: '«كنت مترددًا في البداية، لكن ميدلينكا فاقت كل توقعاتي. المنصة سهلة الاستخدام، والأطباء متجاوبون، والمساعد الذكي كأن لديك طبيباً على مدار الساعة.»',
    // ── FAQ ──
    supportLabel: 'الدعم',
    faqTitle: 'الأسئلة الشائعة',
    faqContact: 'لم تجد ما تبحث عنه؟',
    faqContactLink: 'تواصل معنا ←',
    faq1Q: 'ما مدى دقة تجربة الاستشارة بالذكاء الاصطناعي؟',
    faq1A: 'محرك التشخيص بالذكاء الاصطناعي مدرَّب على ملايين السجلات الطبية ومحدَّث باستمرار بأحدث الإرشادات السريرية. يقدم تحليلاً دقيقاً للأعراض، مع التوصية دائماً باستشارة طبيب معتمد للتشخيص النهائي.',
    faq2Q: 'هل معلوماتي الصحية الشخصية محمية؟',
    faq2A: 'بالتأكيد. ميدلينكا متوافقة تمامًا مع معايير HIPAA وتستخدم تشفير AES-256 لجميع البيانات. لا تُباع معلوماتك الصحية أو تُشارَك مع أطراف ثالثة دون موافقتك الصريحة.',
    faq3Q: 'كيف أبدأ استشارتي الأولى؟',
    faq3A: 'أنشئ حسابًا مجانيًا في أقل من 60 ثانية، وصف أعراضك في محادثة الذكاء الاصطناعي أو تصفح دليل الأطباء، اختر متخصصًا واحجز موعدك المفضل. تتوفر الاستشارات الأولى في أغلب الأحيان خلال ساعات.',
    faq4Q: 'هل يمكنني استخدام ميدلينكا عبر هذا التطبيق فقط؟',
    faq4A: 'ميدلينكا متاحة كتطبيق ويب يمكن الوصول إليه من أي متصفح على سطح المكتب أو الجهاز اللوحي أو الهاتف المحمول. تطبيقات iOS وAndroid الأصلية قادمة قريباً.',
    faq5Q: 'هل تعمل ميدلينكا في حالات الطوارئ؟',
    faq5A: 'صُممت ميدلينكا للاستشارات غير الطارئة. في حالات الخطر على الحياة، يرجى الاتصال بخدمات الطوارئ المحلية فوراً. سيوجهك المساعد الذكي دائمًا إلى خدمات الطوارئ إذا اكتشف أعراضاً خطيرة.',
    // ── CTA ──
    ctaTitle: 'تحكم في صحتك اليوم',
    ctaDesc: 'انضم إلى أكثر من 10,000 مريض يثقون بميدلينكا لاحتياجاتهم الطبية اليومية. ابدأ رحلتك الصحية مجاناً — بدون بطاقة ائتمان.',
    ctaBtn1: 'إضافة استشارة', ctaBtn2: 'تحدث مع متخصص',
    ctaStat1: 'مريض نشط', ctaStat2: 'متخصص', ctaStat3: 'رضا العملاء',
    // ── Footer ──
    footerTagline: 'منصتك الصحية الشاملة. مدعوم بالذكاء الاصطناعي، معتمد من الأطباء، المريض أولاً.',
    footerCol1: 'ميدلينكا', footerCol2: 'الشركة', footerCol3: 'قانوني',
    footerAIDiag: 'تشخيص AI', footerFindDoc: 'ابحث عن طبيب', footerPharm: 'الصيدلية', footerRem: 'التذكيرات',
    footerAbout: 'من نحن', footerCareers: 'وظائف', footerPress: 'الصحافة', footerBlog: 'المدونة',
    footerPrivacy: 'سياسة الخصوصية', footerTerms: 'شروط الخدمة', footerCookie: 'سياسة الكوكيز', footerDisclaimer: 'إخلاء المسؤولية',
    footerCopy: '© 2026 ميدلينكا. جميع الحقوق محفوظة.',
    footerMade: 'صُنع بـ ❤️ من أجل رعاية صحية أفضل',
    // ── Auth page ──
    authLeftTitle: 'إرث من العافية أُعيد تصوره.',
    authLeftDesc: 'انضم إلى منصة يلتقي فيها التشخيص بالذكاء الاصطناعي مع أفضل المتخصصين في العالم. رحلتك نحو صحة شاملة تبدأ هنا.',
    authStatPatients: 'مريض نشط', authStatRating: 'تقييم الصحة', authStatSpecs: 'تخصص', authStatSupport: 'دعم AI',
  },
  tr: {
    appName: 'MedLinka', appTag: 'Hepsi bir arada sağlık platformunuz.',
    heroTitle: 'Hepsi Bir Arada Sağlık Platformunuz',
    heroSub: 'AI teşhis · Doktorlar · Eczane · Hatırlatıcılar',
    feat1: '🤖 AI Asistan', feat2: '👨‍⚕️ Doktorlar', feat3: '💊 Eczane', feat4: '⏰ Hatırlatıcılar',
    featDesc1: 'Belirtilerinizi tanımlayın ve 7/24 anında yapay zeka destekli tıbbi rehberlik alın.',
    featDesc2: 'En iyi uzmanları göz atın ve saniyeler içinde randevu alın.',
    featDesc3: 'İlaçlar, vitaminler ve takviyeler kapınıza teslim edilsin.',
    featDesc4: 'Akıllı ilaç hatırlatma yönetimiyle hiçbir dozu kaçırmayın.',
    createAccount: 'Ücretsiz Hesap Oluştur', signIn: 'Giriş Yap', logout: 'Çıkış Yap',
    greeting: 'Günaydın 👋',
    qaAI: 'AI Sohbet', qaDoc: 'Doktorlar', qaPharm: 'Eczane', qaRem: 'Hatırlatıcılar',
    todayRem: "Bugünün Hatırlatıcıları", topDocs: 'En İyi Doktorlar', featMed: 'Öne Çıkan İlaçlar', seeAll: 'Tümünü gör →',
    done: 'Tamam', soon: 'Yakında', later: 'Sonra',
    navHome: 'Ana Sayfa', navAI: 'AI Sohbet', navDocs: 'Doktorlar', navPharm: 'Eczane', navRem: 'Hatırlatıcılar',
    viewDir: 'Rehber', shopPharm: 'Eczane',
    qaSub1: 'MedLinka AI ile danış', qaSub2: 'Uzman randevusu al', qaSub3: 'Reçete sipariş et', qaSub4: 'Dozajını takip et',
    aiTitle: 'Tıbbi AI Asistanı', aiSub: '7/24 Mevcut · Yapay Zeka Destekli',
    chatPh: 'Belirtilerinizi tanımlayın…',
    aiWelcome: 'Merhaba! Ben Tıbbi AI Asistanınızım. Bugün size nasıl yardımcı olabilirim? 😊',
    chips: ['🤒 Ateş & Baş Ağrısı', '😷 Grip belirtileri', '🤢 Mide Bulantısı', '😴 Uykusuzluk'],
    doctorsTitle: 'Tıbbi Danışma', doctorsSub: 'En iyi uzmanlarla randevu alın',
    searchDoc: 'Doktor veya uzmanlık arayın…',
    docFilters: ['Tümü', 'Genel', 'Kardiyoloji', 'Pediatri', 'Dermatoloji', 'Göz'],
    bookBtn: 'Randevu', pickTime: 'Tercih ettiğiniz saati seçin', date: 'Tarih',
    availableSlots: 'Uygun Saatler', confirmBook: 'Randevuyu Onayla 📅', cancel: 'İptal',
    pharmacyTitle: 'Eczane & Tedaviler', pharmacySub: 'Tıbbi tedaviler ve takviyeler kataloğumuzu keşfedin.',
    uploadPresc: 'Reçete Yükle',
    pharmCtaTitle: 'Aradığınızı bulamıyor musunuz?',
    pharmCtaDesc: 'Klinik ekibimiz belirli ilaçları temin edebilir veya sertifikalı alternatifler önerebilir.',
    pharmCtaBtn1: 'Konsültasyon Rezervasyonu', pharmCtaBtn2: 'Eczacı ile Sohbet',

    searchMed: 'İlaç arayın…',
    medFilters: ['Tümü', 'Hızlı Çözüm', 'Antibiyotikler', 'Takviyeler', 'Botanik Bitkisel'],
    addCart: '+ Ekle', addedCart: '✓ Eklendi', cartBar: 'Sepetim', cartTitle: 'Sepetim 🛒', checkout: 'Sipariş Ver 🎉',
    remTitle: 'İlaç Hatırlatıcıları', remSub: 'Hiçbir dozu kaçırma', addRem: '➕ Yeni Hatırlatıcı Ekle',
    navCalls: 'Aramalarım', navProfile: 'Profil', navVitals: 'Sağlık Göstergeleri',
    callsTitle: 'Danışmalarım', callsSub: 'Rezerve ettiğiniz görüntülü aramaları takip edin ve danışma raporlarına erişin.',
    profileTitle: 'Profilim', vitalsTitle: 'Sağlık Göstergeleri', vitalsSub: 'Temel sağlık metriklerinizi ve eğilimlerinizi izleyin.',
    register: 'Kayıt Ol', login: 'Giriş Yap',
    authSubReg: "MedLinka'ya ücretsiz katılın", authSubLog: 'Tekrar hoş geldiniz!',
    fullName: 'Ad Soyad', email: 'E-posta', password: 'Şifre', confirmPass: 'Şifreyi Onayla',
    namePh: 'Adınızı ve soyadınızı girin', aiPlaceholder: 'Belirtilerinizi tanımlayın…',
    aiPendingMsg: 'Kaydolduktan hemen sonra sorunuzu yanıtlayacağız!',
    toastReg: "MedLinka'ya hoş geldiniz! 🎉", toastBook: 'Randevu başarıyla alındı! 📅',
    toastCart: 'Sepete eklendi! 🛒', toastOrder: 'Sipariş başarıyla verildi! 🎉',
    toastRem: 'Hatırlatıcı eklendi! ⏰', toastToggle: 'Hatırlatıcı güncellendi!',
    errFill: 'Lütfen tüm alanları doldurun.', errPass: 'Şifreler eşleşmiyor.', errSlot: 'Lütfen bir saat seçin.',
    totalLabel: 'Toplam:',
    homeGreeting: 'Merhaba,', homeGreetingSub: 'Sağlık yolculuğunuz bugün gelişiyor.',
    todaysDate: 'BUGÜNÜN TARİHİ', dailySteps: 'GÜNLÜK ADIM', heartRate: 'KALP ATIŞI',
    sleepQuality: 'UYKU KALİTESİ', hydration: 'SULAMA', bpm: 'ATİM/DAK', hrs: 'Saat', liters: 'Litre',
    wellnessLib: 'Sağlık & Wellness', exploreAll: 'Tümünü Keşfet →', comingUp: 'Yaklaşanlar',
    weeklyActivity: 'Haftalık Aktivite', browsePharm: 'Göz At →', manageRem: 'Yönet →',
    days: ['PAZ','PAZ','SAL','ÇAR','PER','CUM','CMT'],
    artTitle1: 'Sağlık Metriklerinizi Anlamak: Tam Rehber',
    artDesc1: 'Günlük takibin uzun vadeli sağlık sonuçlarınızı nasıl dönüştürdüğünü keşfedin.',
    artTitle2: 'Akıllı İlaç Yönetimi', artDesc2: 'Hatırlatıcılar kaçırılan dozları %60 azaltıyor...',
    artTitle3: 'AI Destekli Tanı', artDesc3: 'Yapay zeka erken hastalık tespitini nasıl dönüştürüyor...',
    filterAll: 'Tümü', filterUpcoming: 'Yaklaşan', filterCompleted: 'Tamamlanan', filterCancelled: 'İptal',
    joinCall: 'Aramaya Katıl', reschedule: 'Yeniden Planla', viewReport: 'Raporu Gör', rebook: 'Yeniden Rezerve',
    noConsults: 'Danışma bulunamadı',
    rsPanel: '📅 Randevuyu Yeniden Planla', rsNewDate: 'Yeni Tarih', rsNewTime: 'Yeni Saat',
    rsConfirm: 'Yeniden Planlamayı Onayla',
    backToDoctors: '← Doktorlara Dön', patientRating: 'HASTA DEĞERLENDİRMESİ',
    successfulProc: 'Başarılı İşlem', yearsExp: 'Yıl Deneyim', reviews: 'Yorum',
    biography: 'BİYOGRAFİ', credentials: 'Akademik Kimlik Bilgileri', medDegree: 'Tıp Doktorası (MD)',
    certMedical: 'Sertifikalı Tıp Uzmanı', patientRefl: 'Hasta Görüşleri',
    reserveSession: 'Seans Rezerve Et', availDates: 'UYGUN TARİHLER', selectSlot: 'SAAT SEÇ',
    bookVideo: 'Görüntülü Konsültasyon Al', bookNote: 'Danışma onaylanana kadar ücret alınmaz.',
    needHelp: 'Rezervasyon için yardım mı lazım?', healthConcierge: 'Sağlık danışmanıyla konuşun',
    lastSynced: '🔄 Son senkronizasyon: Bugün', addReading: 'Okuma Ekle',
    aiInsights: 'AI Sağlık Öngörüleri', scheduleCheck: '📅 Tam Sağlık Kontrolü Planla',
    medRecords: 'Tıbbi Kayıt Özeti', bloodGroup: 'KAN GRUBU', weight: 'KİLO', height: 'BOY',
    allergiesSec: 'Alerjiler', addAllergy: '+ Ekle',
    emergencyContacts: 'Acil Kişiler', contactInfo: 'İletişim Bilgileri',
    emailAddr: 'E-POSTA ADRESİ', mobileNum: 'CEP TELEFONU', city: 'ŞEHİR',
    editProfile: 'Profili Düzenle', editYourInfo: 'Bilgilerinizi Düzenleyin', saveChanges: 'Değişiklikleri Kaydet', cancelEdit: 'İptal',
    recentConsults: 'Son Danışmalar', viewAll: 'Tümünü Gör',
    premiumMember: 'PREMİUM ÜYE', upgradePlan: 'Planı Yükselt',
    plansTitle: 'Planınızı Seçin', plansSub: "MedLinka'nın tam gücünü açın",
    planFree: 'Ücretsiz', planPremium: 'Premium', planPro: 'Pro',
    planFreePriceLabel: 'Her zaman ücretsiz', planPremiumPrice: '₺349', planProPrice: '₺849',
    perMonth: '/ ay',
    planFreeFeatures: ['AI Sohbet (5/gün)', 'Doktor Göz Atma', 'Temel Eczane', '1 Hatırlatıcı'],
    planPremiumFeatures: ['Sınırsız AI Sohbet', 'Randevu Al', 'Tam Eczane', 'Sınırsız Hatırlatıcı', 'Görüntülü Konsültasyon', 'Sağlık Göstergeleri'],
    planProFeatures: ["Premium'daki Her Şey", '7/24 Öncelikli Destek', 'Aile Profilleri (5)', 'Lab Entegrasyonu', 'Kişisel Sağlık Koçu', 'Gelişmiş AI Öngörüleri'],
    currentPlan: 'Mevcut Plan', selectPlan: 'Başlayın', mostPopular: 'EN POPÜLER',
    morningRituals: 'Sabah Rutini', afternoonRituals: 'Öğle Rutini', eveningRituals: 'Akşam Rutini',
    activePlans: 'AKTİF PLAN', remindersSet: 'HATIRLATICI', daysTracked: 'TAKİP GÜNÜ', healthLevel: 'SAĞLIK SEVİYESİ',
    adherenceScore: 'UYUM SKORU', lowStock: 'Düşük Stok Uyarıları', refill: 'Yenile',
    // ── Landing Hero ──
    heroEyebrow: 'HEPSİ BİR ARADA SAĞLIK PLATFORMUNUZ',
    heroMainTitle: 'Hepsi Bir Arada Sağlık Platformunuz',
    heroDesc: 'Tıbbi düzeyde AI tanı, anlık doktor konsültasyonları ve kesintisiz reçete yönetimi deneyimleyin. Profesyonellerin güvendiği, hastaların tercih ettiği platform.',
    heroAnalyze: 'Analiz Et',
    statProfessionals: 'Uzman', statSpecialties: 'Uzmanlık', statAvailability: 'Kullanılabilir', statSuccess: 'Başarı Oranı',
    // ── Bento ──
    bentoDiagLabel: 'AI TANISI', bentoDiagTitle: 'Belirti analizi tamamlandı', bentoDiagSub: '3 olası durum belirlendi',
    bentoApptLabel: 'SONRAKİ RANDEVU', bentoApptSub: 'Bugün · 10:00', bentoConfirmed: 'Onaylandı ✓',
    bentoDoctors: 'Doktor', bentoSpecialties: 'Uzmanlık',
    bentoCommunityLabel: 'TOPLULUK', bentoCommunityTitle: '+1.2M Hasta Yardım Edildi', bentoCommunitySub: 'Bugün onlara katılın',
    bentoRatingLbl: 'Ortalama Puan',
    // ── Care Section ──
    whatWeOffer: 'NE SUNUYORUZ',
    careHeading: 'Kapsamlı Bakım, Basitleştirildi',
    careAITitle: 'AI Tanı Asistanı',
    careAIDesc: 'AI destekli tanı aracımız, belirtilerinizi milyonlarca tıbbi vakayı ve tedavi planıyla karşılaştırarak doğru sağlık içgörüleri sunar.',
    careAIBtn: 'Ücretsiz Tanı Al',
    carePharmTitle: 'Sağlık Eczanesi',
    carePharmDesc: 'İlaç takviminizi yönetmek hiç bu kadar kolay olmamıştı. Reçete siparişi verin, akıllı hatırlatıcılar ayarlayın, dakikalar içinde kapınıza teslimat alın.',
    carePharmBtn: 'Daha Fazla →',
    careHipaa: 'HIPAA Uyumlu',
    // ── Journey ──
    howItWorks: 'NASIL ÇALIŞIR',
    journeyTitle: 'Hasta Yolculuğu',
    journeySub: 'Belirtiden çözüme sorunsuz bir yol, dört basit adımda',
    step1Title: 'Çözümleri Keşfet', step1Desc: 'Belirtilerinizi tanımlayın veya ihtiyaç duyduğunuz bakımı bulmak için uzman rehberimize göz atın.',
    step2Title: 'AI Desteği Alın', step2Desc: 'AI girdilerinizi analiz eder ve en uygun tıbbi çözümleri anında önerir.',
    step3Title: 'Doktorla Bağlanın', step3Desc: 'Hemen onaylı bir uzman rezerve edin. Görüntülü veya yüz yüze — tercihiniz, programınız.',
    step4Title: 'İyileşmeye Başlayın', step4Desc: 'Akıllı hatırlatıcılar ve eczane teslimatıyla kişiselleştirilmiş tedavi planınızı takip edin.',
    // ── Specialists ──
    verifiedExperts: 'DOĞRULANMIŞ UZMANLAR',
    topSpecialists: 'En İyi Uzmanlarımız',
    advancedSearch: 'Gelişmiş Arama →',
    bookNow: 'Şimdi Rezerve Et',
    // ── Community ──
    testimonials: 'REFERANSLAR',
    communityHeading: 'Sağlıklı Topluluğumuzdan Hikayeler',
    quote1: '"AI tanı sistemi inanılmaz derecede doğru. Durumumu doğru tespit etti ve doğru uzmanı önerdi. Rezervasyon sorunsuzdu ve doktor harikaydı."',
    quote2: '"Kronik durumumu yönetmek çok kolaylaştı. İlaç almam için uyarı alıyorum, bir tıklamayla yenileme yapıyorum ve gerektiğinde doktoruma danışıyorum."',
    quote3: '"Başlangıçta tereddütlüydüm ama MedLinka tüm beklentilerimi aştı. Platform sezgisel, doktorlar duyarlı ve AI asistan 7/24 yanınızda bir doktor gibi."',
    // ── FAQ ──
    supportLabel: 'DESTEK',
    faqTitle: 'Sıkça Sorulan Sorular',
    faqContact: 'Aradığınızı bulamıyor musunuz?',
    faqContactLink: 'Bize ulaşın →',
    faq1Q: 'AI danışma deneyimi ne kadar doğru?',
    faq1A: 'AI tanı motorumuz milyonlarca tıbbi kayıt üzerinde eğitilmiş ve en son klinik yönergelere göre sürekli güncellenmektedir. Kesin tanı için her zaman sertifikalı bir hekime danışmanızı önerir.',
    faq2Q: 'Kişisel sağlık bilgilerim korumalı mı?',
    faq2A: "Kesinlikle. MedLinka tamamen HIPAA uyumludur ve tüm veriler için AES-256 şifrelemesi kullanır. Sağlık bilgileriniz açık rızanız olmadan asla satılmaz veya paylaşılmaz.",
    faq3Q: 'İlk danışmama nasıl başlarım?',
    faq3A: '60 saniyeden kısa sürede ücretsiz hesap oluşturun, belirtilerinizi AI sohbette tanımlayın veya doktor rehberimize göz atın, bir uzman seçin ve tercih ettiğiniz saati rezerve edin.',
    faq4Q: "MedLinka'yı yalnızca bu uygulama üzerinden kullanabilir miyim?",
    faq4A: 'MedLinka, masaüstü, tablet veya mobilde herhangi bir tarayıcıdan erişilebilen bir web uygulaması olarak kullanılabilir. iOS ve Android uygulamaları yakında geliyor.',
    faq5Q: 'MedLinka acil durumlar için çalışıyor mu?',
    faq5A: 'MedLinka acil olmayan danışmalar için tasarlanmıştır. Hayatı tehdit eden durumlar için lütfen hemen yerel acil numaranızı arayın. AI asistanı ciddi belirtiler tespit ederse her zaman acil servislere yönlendirir.',
    // ── CTA ──
    ctaTitle: 'Sağlığınızın Kontrolünü Bugün Alın',
    ctaDesc: "MedLinka'ya günlük tıbbi ihtiyaçları için güvenen 10.000'den fazla hastaya katılın. Sağlık yolculuğunuza ücretsiz başlayın — kredi kartı gerekmez.",
    ctaBtn1: 'Danışma Ekle', ctaBtn2: 'Uzmanla Konuş',
    ctaStat1: 'Aktif Hasta', ctaStat2: 'Uzman', ctaStat3: 'Memnuniyet',
    // ── Footer ──
    footerTagline: 'Hepsi bir arada sağlık platformunuz. AI destekli, doktor onaylı, hasta odaklı.',
    footerCol1: 'MedLinka', footerCol2: 'Şirket', footerCol3: 'Yasal',
    footerAIDiag: 'AI Tanı', footerFindDoc: 'Doktor Bul', footerPharm: 'Eczane', footerRem: 'Hatırlatıcılar',
    footerAbout: 'Hakkımızda', footerCareers: 'Kariyer', footerPress: 'Basın', footerBlog: 'Blog',
    footerPrivacy: 'Gizlilik Politikası', footerTerms: 'Kullanım Şartları', footerCookie: 'Çerez Politikası', footerDisclaimer: 'Sorumluluk Reddi',
    footerCopy: '© 2026 MedLinka. Tüm hakları saklıdır.',
    footerMade: 'Daha iyi sağlık hizmetleri için ❤️ ile yapıldı',
    // ── Auth page ──
    authLeftTitle: 'Yeniden Hayal Edilen Bir Sağlık Mirası.',
    authLeftDesc: "AI destekli tanının dünya standartlarında uzmanlarla buluştuğu bir platforma katılın. Bütünsel sağlığa giden yolculuğunuz burada başlıyor.",
    authStatPatients: 'Aktif Hasta', authStatRating: 'Sağlık Puanı', authStatSpecs: 'Uzmanlık', authStatSupport: 'AI Destek',
  }
};

/* ─────────────────────────────────────────────
   DOCTORS DATA
───────────────────────────────────────────── */
const doctorsData = [
  { id: 1,  emoji: '👨‍⚕️', photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&h=300&crop=face&q=80', name: 'Dr. Ahmed Hassan',  spec_en: 'General Practice', spec_ar: 'طب عام',       spec_tr: 'Genel Pratik',     rating: '4.9', patients: '1.2k', exp: '12', color: '#e8f4ff', filter: 'General',     price: '$30', loc: 'Dubai, UAE'    },
  { id: 2,  emoji: '👩‍⚕️', photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=300&crop=face&q=80', name: 'Dr. Sara Al-Noor',  spec_en: 'Cardiologist',     spec_ar: 'طب القلب',      spec_tr: 'Kardiyoloji',      rating: '4.8', patients: '980',  exp: '15', color: '#ffe8e8', filter: 'Cardiology',  price: '$55', loc: 'Cairo, Egypt'  },
  { id: 3,  emoji: '👨‍⚕️', photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&h=300&crop=face&q=80', name: 'Dr. Karim Yilmaz',  spec_en: 'Pediatrician',     spec_ar: 'طب الأطفال',    spec_tr: 'Pediatri',         rating: '4.7', patients: '2.1k', exp: '10', color: '#e8fff0', filter: 'Pediatrics',  price: '$35', loc: 'Istanbul, TR'  },
  { id: 4,  emoji: '👩‍⚕️', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&h=300&crop=face&q=80', name: 'Dr. Lina Farhat',   spec_en: 'Dermatologist',    spec_ar: 'طب الجلدية',    spec_tr: 'Dermatoloji',      rating: '4.9', patients: '1.5k', exp: '9',  color: '#fff8e8', filter: 'Dermatology', price: '$40', loc: 'Beirut, LB'    },
  { id: 5,  emoji: '👨‍⚕️', photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=300&crop=face&q=80', name: 'Dr. Omar Khalil',   spec_en: 'Ophthalmologist',  spec_ar: 'طب العيون',     spec_tr: 'Göz Hastalıkları', rating: '4.6', patients: '890',  exp: '18', color: '#f0e8ff', filter: 'Eye Care',    price: '$45', loc: 'Riyadh, SA'    },
  { id: 6,  emoji: '👩‍⚕️', photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&h=300&crop=face&q=80', name: 'Dr. Nour Bakri',    spec_en: 'General Practice', spec_ar: 'طب عام',       spec_tr: 'Genel Pratik',     rating: '4.8', patients: '760',  exp: '7',  color: '#e8f4ff', filter: 'General',     price: '$25', loc: 'Amman, JO'     },
  { id: 7,  emoji: '👨‍⚕️', photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=300&crop=face&q=80', name: 'Dr. Tariq Mansour', spec_en: 'Cardiologist',     spec_ar: 'طب القلب',      spec_tr: 'Kardiyoloji',      rating: '4.7', patients: '1.1k', exp: '20', color: '#ffe8e8', filter: 'Cardiology',  price: '$60', loc: 'Baghdad, IQ'   },
  { id: 8,  emoji: '👩‍⚕️', photo: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=400&h=300&crop=face&q=80', name: 'Dr. Hana Demir',    spec_en: 'Pediatrician',     spec_ar: 'طب الأطفال',    spec_tr: 'Pediatri',         rating: '4.9', patients: '1.8k', exp: '11', color: '#e8fff0', filter: 'Pediatrics',  price: '$35', loc: 'Ankara, TR'    },
  { id: 9,  emoji: '👨‍⚕️', photo: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?auto=format&fit=crop&w=400&h=300&crop=face&q=80', name: 'Dr. Sami Nasser',   spec_en: 'Dermatologist',    spec_ar: 'طب الجلدية',    spec_tr: 'Dermatoloji',      rating: '4.5', patients: '640',  exp: '6',  color: '#fff8e8', filter: 'Dermatology', price: '$38', loc: 'Tunis, TN'     },
  { id: 10, emoji: '👩‍⚕️', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=300&crop=face&q=80', name: 'Dr. Rima Tawfiq',   spec_en: 'Ophthalmologist',  spec_ar: 'طب العيون',     spec_tr: 'Göz Hastalıkları', rating: '4.8', patients: '970',  exp: '14', color: '#f0e8ff', filter: 'Eye Care',    price: '$42', loc: 'Kuwait City'   },
];

/* ─────────────────────────────────────────────
   MEDICINES DATA
───────────────────────────────────────────── */
const medsData = [
  { id: 1,  emoji: '💊', photo: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Paracetamol 500mg',  name_ar: 'باراسيتامول ٥٠٠',  name_tr: 'Parasetamol 500mg',  desc_en: 'Fast-acting pain & fever relief for adults and children.',  desc_ar: 'مسكن للألم والحرارة سريع المفعول.',        desc_tr: 'Yetişkinler ve çocuklar için hızlı etki.',   price: '$2.50',  type: 'Painkillers', rx: false },
  { id: 2,  emoji: '🩹', photo: 'https://images.unsplash.com/photo-1550572017-4f7c2b37ead7?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Ibuprofen 400mg',    name_ar: 'إيبوبروفين ٤٠٠',   name_tr: 'İbuprofen 400mg',    desc_en: 'Anti-inflammatory and analgesic for pain and swelling.',    desc_ar: 'مضاد للالتهاب ومسكن للألم والتورم.',        desc_tr: 'Ağrı ve şişlik için antienflamatuvar.',      price: '$3.20',  type: 'Painkillers', rx: false },
  { id: 3,  emoji: '🧬', photo: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Amoxicillin 500mg',  name_ar: 'أموكسيسيلين ٥٠٠',  name_tr: 'Amoksisilin 500mg',  desc_en: 'Broad-spectrum antibiotic for bacterial infections.',        desc_ar: 'مضاد حيوي واسع الطيف للعدوى البكتيرية.',   desc_tr: 'Bakteriyel enfeksiyonlara karşı antibiyotik.',price: '$8.90',  type: 'Antibiotics', rx: true  },
  { id: 4,  emoji: '💉', photo: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Azithromycin 250mg', name_ar: 'أزيثروميسين ٢٥٠',  name_tr: 'Azitromisin 250mg',  desc_en: 'Prescribed antibiotic for respiratory & skin infections.',   desc_ar: 'مضاد حيوي للعدوى التنفسية والجلدية.',       desc_tr: 'Solunum yolu enfeksiyonları için antibiyotik.',price: '$12.00', type: 'Antibiotics', rx: true  },
  { id: 5,  emoji: '🌟', photo: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Vitamin D3 1000IU',  name_ar: 'فيتامين د٣ ١٠٠٠',  name_tr: 'D3 Vitamini 1000IU', desc_en: 'Supports bone density, immunity, and mood regulation.',      desc_ar: 'يدعم كثافة العظام والمناعة وتنظيم المزاج.',  desc_tr: 'Kemik yoğunluğunu ve bağışıklığı destekler.',price: '$6.50',  type: 'Vitamins',    rx: false },
  { id: 6,  emoji: '🍊', photo: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Vitamin C 1000mg',   name_ar: 'فيتامين ج ١٠٠٠',   name_tr: 'C Vitamini 1000mg',  desc_en: 'High-dose immune booster with antioxidant protection.',      desc_ar: 'معزز مناعة بجرعة عالية مع حماية مضادة للأكسدة.',desc_tr: 'Antioksidan korumalı yüksek doz bağışıklık güçlendirici.',price: '$5.00',  type: 'Vitamins',    rx: false },
  { id: 7,  emoji: '🧪', photo: 'https://images.unsplash.com/photo-1576671414121-aa2d60f1f46d?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Zinc Picolinate 50mg',name_ar: 'زنك ٥٠ ملغ',        name_tr: 'Çinko 50mg',         desc_en: 'Supports immune function, skin health, and metabolism.',     desc_ar: 'يدعم وظيفة المناعة وصحة البشرة والتمثيل الغذائي.',desc_tr: 'Bağışıklık ve cilt sağlığını destekler.',   price: '$4.20',  type: 'Vitamins',    rx: false },
  { id: 8,  emoji: '🌿', photo: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Ginger Extract',     name_ar: 'مستخلص الزنجبيل',   name_tr: 'Zencefil Özü',       desc_en: 'Relieves nausea, supports digestion and circulation.',       desc_ar: 'يخفف الغثيان ويدعم الهضم والدورة الدموية.',  desc_tr: 'Mide bulantısını giderir, sindirime destek sağlar.',price: '$7.80',  type: 'Herbal',      rx: false },
  { id: 9,  emoji: '🍃', photo: 'https://images.unsplash.com/photo-1611574579564-e7c8ccdab05d?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Chamomile 400mg',    name_ar: 'بابونج ٤٠٠ ملغ',    name_tr: 'Papatya 400mg',      desc_en: 'Natural calming herb for sleep support and anxiety relief.',  desc_ar: 'عشبة مهدئة طبيعية لدعم النوم وتخفيف القلق.',  desc_tr: 'Uyku ve kaygı giderme için doğal sakinleştirici.',price: '$6.00',  type: 'Herbal',      rx: false },
  { id: 10, emoji: '🌱', photo: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Turmeric Extract 500mg',name_ar: 'كركم ٥٠٠ ملغ',    name_tr: 'Zerdeçal 500mg',     desc_en: 'Curcumin-rich anti-inflammatory for joint and gut health.',  desc_ar: 'مضاد التهاب غني بالكركمين لصحة المفاصل.',    desc_tr: 'Eklem ve bağırsak sağlığı için kerkumin.',  price: '$5.50',  type: 'Herbal',      rx: false },
  { id: 11, emoji: '💛', photo: 'https://images.unsplash.com/photo-1535185384036-28bbc8035f28?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Omega-3 Fish Oil',   name_ar: 'أوميغا-٣',           name_tr: 'Omega-3 Balık Yağı', desc_en: 'Premium fish oil for heart, brain and cholesterol health.',  desc_ar: 'زيت سمك فاخر لصحة القلب والدماغ والكوليسترول.',desc_tr: 'Kalp, beyin ve kolesterol sağlığı için balık yağı.',price: '$9.00',  type: 'Vitamins',    rx: false },
  { id: 12, emoji: '🔴', photo: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?auto=format&fit=crop&w=400&h=260&q=80', name_en: 'Iron 65mg',          name_ar: 'حديد ٦٥ ملغ',       name_tr: 'Demir 65mg',         desc_en: 'Iron supplement to prevent and treat anemia in adults.',     desc_ar: 'مكمل حديد للوقاية من الأنيميا وعلاجها.',     desc_tr: 'Yetişkinlerde anemi önleme ve tedavisi için.',price: '$4.80',  type: 'Vitamins',    rx: false },
];

/* ─────────────────────────────────────────────
   REMINDERS DATA
───────────────────────────────────────────── */
let remindersData = [];

let callsData = [];

const vitalsData = [
  { key: 'bp', icon: '❤️', color: '#fee2e2', iconColor: '#ef4444', label: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'Normal', statusColor: '#10b981', trend: [75,78,80,72,76,80,77] },
  { key: 'hr', icon: '💓', color: '#fce7f3', iconColor: '#ec4899', label: 'Heart Rate', value: '72', unit: 'bpm', status: 'Normal', statusColor: '#10b981', trend: [68,72,75,70,72,74,72] },
  { key: 'bs', icon: '🩸', color: '#fef3c7', iconColor: '#f59e0b', label: 'Blood Sugar', value: '95', unit: 'mg/dL', status: 'Normal', statusColor: '#10b981', trend: [90,92,95,88,94,97,95] },
  { key: 'wt', icon: '⚖️', color: '#ede9fe', iconColor: '#7c3aed', label: 'Weight', value: '75.5', unit: 'kg', status: 'Healthy', statusColor: '#10b981', trend: [76,75.8,75.5,75.6,75.4,75.5,75.5] },
  { key: 'bmi', icon: '📊', color: '#e0f2fe', iconColor: '#0284c7', label: 'BMI', value: '24.2', unit: 'kg/m²', status: 'Normal', statusColor: '#10b981', trend: [24.5,24.4,24.3,24.3,24.2,24.2,24.2] },
  { key: 'spo2', icon: '🫁', color: '#dcfce7', iconColor: '#16a34a', label: 'SpO2', value: '98', unit: '%', status: 'Excellent', statusColor: '#10b981', trend: [97,98,98,97,98,99,98] },
];

/* ─────────────────────────────────────────────
   NEW REMINDERS CYCLE
───────────────────────────────────────────── */
const newRemindersCycle = [
  { name: 'Iron 65mg',      emoji: '🔴', color: '#ffe8e8', detail_en: 'Once daily',  detail_ar: 'مرة يومياً',   detail_tr: 'Günde bir kez',  times: ['12:00 PM'],           active: true },
  { name: 'Zinc 50mg',      emoji: '🧪', color: '#e8fff0', detail_en: 'Twice daily', detail_ar: 'مرتين يومياً', detail_tr: 'Günde iki kez',  times: ['8:00 AM', '8:00 PM'], active: true },
  { name: 'Chamomile',      emoji: '🍃', color: '#f0fff4', detail_en: 'Before bed',  detail_ar: 'قبل النوم',    detail_tr: 'Yatmadan önce',  times: ['10:00 PM'],           active: true },
  { name: 'Turmeric 500mg', emoji: '🌱', color: '#fffde7', detail_en: 'With meals',  detail_ar: 'مع الوجبات',  detail_tr: 'Yemeklerle',     times: ['8:00 AM', '1:00 PM'], active: true },
];

/* ─────────────────────────────────────────────
   AI REPLIES
───────────────────────────────────────────── */
const aiReplies = {
  fever:   "It sounds like you may have a fever.\n\n• Rest and stay hydrated\n• Take paracetamol as directed\n• Monitor your temperature regularly\n\n⚠️ See a doctor if temperature exceeds 39°C for more than 2 days.",
  flu:     "Flu symptoms are common and usually resolve in a few days.\n\n• Rest at home and avoid contact with others\n• Stay warm and drink warm fluids\n• Use over-the-counter symptom relief\n\n💊 Antivirals may help if started within 48 hours.",
  nausea:  "Nausea can have many causes including dietary or stress-related issues.\n\n• Sip water or clear fluids slowly\n• Avoid heavy, spicy, or fatty food\n• Ginger tea or ginger extract can help\n\n⚠️ Seek medical help if vomiting persists beyond 24 hours.",
  sleep:   "Insomnia is often linked to stress, screen time, or irregular schedules.\n\n• Avoid screens at least 1 hour before bed\n• Keep a consistent sleep and wake schedule\n• Chamomile tea or lavender may promote relaxation\n\n🩺 Speak to a doctor if insomnia has persisted for more than a month.",
  default: "Thank you for sharing your symptoms. Based on your description, I recommend the following general guidance:\n\n• Monitor your symptoms closely over the next 24–48 hours\n• Stay well hydrated and get adequate rest\n• Avoid self-medicating without professional advice\n\n⚠️ This is not a medical diagnosis. Please consult a qualified healthcare professional for an accurate assessment."
};

/* ─────────────────────────────────────────────
   TIME SLOTS
───────────────────────────────────────────── */
const timeSlots = [
  { time: '09:00 AM', available: true  },
  { time: '10:00 AM', available: true  },
  { time: '11:00 AM', available: false },
  { time: '12:00 PM', available: true  },
  { time: '02:00 PM', available: true  },
  { time: '03:00 PM', available: false },
  { time: '04:00 PM', available: true  },
  { time: '05:00 PM', available: true  },
];

/* ─────────────────────────────────────────────
   APPLICATION STATE
───────────────────────────────────────────── */
let lang = 'en';
let currentUser = null;
let pendingAIQuery = '';
let currentPage = 'page-landing';

// Doctors state
let docFilter = 'All';
let docSearch = '';
let selectedDoc = null;
let selectedSlot = null;

// Pharmacy state
let cart = [];
let medFilter = 'All';
let medSearch = '';

// Reminders state
let newRemIndex = 0;

// Toast state
let toastTimer = null;

/* ─────────────────────────────────────────────
   API LAYER
───────────────────────────────────────────── */
const API_BASE = '';

async function apiCall(method, path, body) {
  const token = localStorage.getItem('ml_token');
  const opts = {
    method,
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  };
  if (token) opts.headers['Authorization'] = `Bearer ${token}`;
  if (body)  opts.body = JSON.stringify(body);
  try {
    const res  = await fetch(API_BASE + path, opts);
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    return { ok: false, status: 0, data: { error: 'Network error — working offline' } };
  }
}

function saveSession(token, user) {
  if (token) localStorage.setItem('ml_token', token);
  if (user)  localStorage.setItem('ml_user',  JSON.stringify(user));
  
  // ✅ نظام التوجيه التلقائي حسب دور المستخدم
  if (user.role === 'doctor') {
    window.location.href = '/doctor';
    return;
  } 
  if (user.role === 'pharmacy') {
    window.location.href = '/pharmacy';
    return;
  }
  if (user.role === 'admin') {
    window.location.href = '/admin';
    return;
  }
}

function clearSession() {
  localStorage.removeItem('ml_token');
  localStorage.removeItem('ml_user');
}

async function restoreSession() {
  const saved = localStorage.getItem('ml_user');
  const token = localStorage.getItem('ml_token');
  if (!saved || !token) return;
  // Quick restore from localStorage while we verify
  try {
    const user = JSON.parse(saved);
    currentUser = { ...user, initial: (user.name || 'U')[0].toUpperCase() };
    updateNavUser();
  } catch(_) {}
  // Verify with server in background
  const { ok, data } = await apiCall('GET', '/api/auth/me');
  if (ok && data.user) {
    const u = data.user;
    currentUser = { ...u, name: u.name, email: u.email, initial: (u.name || 'U')[0].toUpperCase() };
    saveSession(null, currentUser);
    updateNavUser();
    loadProfileFromAPI();
  } else if (!ok && localStorage.getItem('ml_token')) {
    // Token expired — try refresh silently
    const ref = await apiCall('POST', '/api/auth/refresh');
    if (ref.ok && ref.data.token) {
      localStorage.setItem('ml_token', ref.data.token);
    } else {
      clearSession();
      currentUser = null;
      updateNavUser();
    }
  }
}

/* ═══════════════════════════════════════════════════════════
   i18n
═══════════════════════════════════════════════════════════ */

function t(key) {
  return (i18n[lang] && i18n[lang][key] !== undefined) ? i18n[lang][key] : (i18n.en[key] || key);
}

function setLang(l) {
  lang = l;
  const html = document.documentElement;
  html.lang = l;
  html.dir = l === 'ar' ? 'rtl' : 'ltr';

  // Update active lang button
  ['EN', 'AR', 'TR'].forEach(code => {
    const btn = document.getElementById('lang' + code);
    if (btn) btn.classList.toggle('active', code.toLowerCase() === l);
    const appBtn = document.getElementById('appLang' + code);
    if (appBtn) appBtn.classList.toggle('active', code.toLowerCase() === l);
  });

  applyI18n();
  renderAll();
}

function applyI18n() {
  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== undefined) el.textContent = val;
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val !== undefined) el.placeholder = val;
  });

  // Update document title
  document.title = t('appName') + ' — Healthcare Platform';

  // Render plan feature lists
  _renderPlanFeatures();
}

function _renderPlanFeatures() {
  const map = [
    ['planFreeList', 'planFreeFeatures'],
    ['planPremiumList', 'planPremiumFeatures'],
    ['planProList', 'planProFeatures'],
  ];
  map.forEach(([elId, key]) => {
    const el = document.getElementById(elId);
    if (!el) return;
    const features = t(key);
    if (!Array.isArray(features)) return;
    el.innerHTML = features.map(f => `<li class="plan-feature-item"><span class="plan-feature-check">✓</span>${f}</li>`).join('');
  });
}

function openUpgradePlans() {
  _renderPlanFeatures();
  document.getElementById('plansModalOverlay').classList.add('active');
}

function closePlansModal(e) {
  if (e && e.target !== document.getElementById('plansModalOverlay')) return;
  document.getElementById('plansModalOverlay').classList.remove('active');
}

/* ═══════════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════════ */

function showPage(pageId, pushHistory = true) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.add('page-hidden'));

  // Show target
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.remove('page-hidden');
    currentPage = pageId;
  }

  // Update URL hash for key pages (except doctor profile — handled separately)
  if (pushHistory && pageId !== 'page-doctor-profile') {
    const hashMap = {
      'page-doctors': '#/doctors',
      'page-home':    '#/home',
      'page-pharmacy':'#/pharmacy',
      'page-chat':    '#/chat',
    };
    if (hashMap[pageId]) history.pushState({ page: pageId }, '', hashMap[pageId]);
    else if (pageId === 'page-landing') history.pushState({ page: pageId }, '', '#');
  }

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === pageId);
  });

  // App sidebar mode for authenticated pages
  const appPages = ['page-home','page-chat','page-doctors','page-doctor-profile','page-pharmacy','page-cart','page-reminders','page-vitals','page-calls','page-profile'];
  if (appPages.includes(pageId)) {
    document.body.classList.add('app-mode');
    updateAppSidebarActive(pageId);
    updateAppTopbarTitle(pageId);
  } else {
    document.body.classList.remove('app-mode');
  }


  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function updateAppSidebarActive(pageId) {
  document.querySelectorAll('.app-nav-item').forEach(item => {
    item.classList.toggle('app-nav-active', item.dataset.page === pageId);
  });
}

function updateAppTopbarTitle(pageId) {
  const titles = {
    'page-home': 'Dashboard', 'page-chat': 'AI Health Assistant',
    'page-doctors': 'Find a Doctor', 'page-doctor-profile': 'Doctor Profile', 'page-pharmacy': 'Pharmacy',
    'page-cart': 'Shopping Basket', 'page-reminders': 'Medicine Reminders', 'page-vitals': 'Health Vitals',
    'page-calls': 'My Consultations', 'page-profile': 'My Profile',
  };
  const titleEl = document.getElementById('appTopbarTitle');
  if (titleEl) titleEl.textContent = titles[pageId] || 'MedLinka';
}

function navTo(pageId) {
  showPage(pageId);
}

function requireAuth(pageId) {
  if (currentUser) {
    showPage(pageId);
    if (pageId === 'page-chat') initChat();
    if (pageId === 'page-profile') renderProfilePage();
    if (pageId === 'page-cart') renderCartPage();
  } else {
    pendingAIQuery = '';
    goAuth('register');
  }
}

function goAuth(tab) {
  showPage('page-auth');
  switchTab(tab || 'register');
}

/* ═══════════════════════════════════════════════════════════
   SIDEBAR
═══════════════════════════════════════════════════════════ */

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const hamburger = document.getElementById('hamburger');
  const isOpen = sidebar.classList.contains('open');

  if (isOpen) {
    closeSidebar();
  } else {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const hamburger = document.getElementById('hamburger');
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════════════════════════
   AUTH
═══════════════════════════════════════════════════════════ */

function switchTab(tab) {
  const isRegister = tab === 'register';
  const tabReg = document.getElementById('tabReg');
  const tabLog = document.getElementById('tabLog');
  const regForm = document.getElementById('regForm');
  const logForm = document.getElementById('logForm');

  if (tabReg) tabReg.classList.toggle('active', isRegister);
  if (tabLog) tabLog.classList.toggle('active', !isRegister);
  if (regForm) regForm.style.display = isRegister ? 'block' : 'none';
  if (logForm) logForm.style.display = isRegister ? 'none' : 'block';
}

async function doRegister() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;

  if (!name || !email || !pass || !pass2) { showToast(t('errFill'), 'warn'); return; }
  if (pass !== pass2) { showToast(t('errPass'), 'warn'); return; }
  if (pass.length < 6) { showToast('Password must be at least 6 characters.', 'warn'); return; }

  const btn = document.querySelector('#regForm .auth-submit-btn');
  if (btn) { btn.disabled = true; btn.style.opacity = '0.7'; }

  const { ok, data } = await apiCall('POST', '/api/auth/register', { name, email, password: pass, lang });

  if (btn) { btn.disabled = false; btn.style.opacity = '1'; }

  if (ok && data.token) {
    // ✅ Real API success
    saveSession(data.token, data.user);
    currentUser = { ...data.user, initial: (data.user.name || 'U')[0].toUpperCase() };
  } else if (data.error && data.error.includes('already')) {
    showToast('Email already registered. Please log in.', 'warn');
    switchTab('login');
    return;
  } else if (!ok) {
    // ⚡ Offline fallback — works without server
    console.warn('API unavailable, using offline mode:', data.error);
    currentUser = { name, email, initial: name.charAt(0).toUpperCase() };
  } else {
    currentUser = { name, email, initial: name.charAt(0).toUpperCase() };
  }

  updateNavUser();
  showPage('page-home');
  renderHomeWidgets();
  loadProfileFromAPI();
  showToast(t('toastReg'));

  if (pendingAIQuery) {
    const query = pendingAIQuery;
    pendingAIQuery = '';
    const pending = document.getElementById('aiPending');
    if (pending) pending.style.display = 'none';
    setTimeout(() => { showPage('page-chat'); initChat(); setTimeout(() => sendMsgText(query), 400); }, 800);
  }
}

async function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;

  if (!email || !pass) { showToast(t('errFill'), 'warn'); return; }

  const btn = document.querySelector('#logForm .auth-submit-btn');
  if (btn) { btn.disabled = true; btn.style.opacity = '0.7'; }

  const { ok, data } = await apiCall('POST', '/api/auth/login', { email, password: pass });

  if (btn) { btn.disabled = false; btn.style.opacity = '1'; }

  if (ok && data.token) {
    // ✅ Real API success
    saveSession(data.token, data.user);
    currentUser = { ...data.user, initial: (data.user.name || 'U')[0].toUpperCase() };
  } else if (!ok && (data.error === 'Invalid credentials')) {
    showToast('Invalid email or password.', 'warn');
    return;
  } else if (!ok) {
    // ⚡ Offline fallback
    console.warn('API unavailable, using offline mode:', data.error);
    const username    = email.split('@')[0];
    const displayName = username.charAt(0).toUpperCase() + username.slice(1);
    currentUser = { name: displayName, email, initial: displayName.charAt(0).toUpperCase() };
  } else {
    const username    = email.split('@')[0];
    const displayName = username.charAt(0).toUpperCase() + username.slice(1);
    currentUser = { name: displayName, email, initial: displayName.charAt(0).toUpperCase() };
  }

  updateNavUser();
  showPage('page-home');
  renderHomeWidgets();
  loadProfileFromAPI();
  showToast(t('toastReg'));

  if (pendingAIQuery) {
    const query = pendingAIQuery;
    pendingAIQuery = '';
    const pending = document.getElementById('aiPending');
    if (pending) pending.style.display = 'none';
    setTimeout(() => { showPage('page-chat'); initChat(); setTimeout(() => sendMsgText(query), 400); }, 800);
  }
}

async function logout() {
  await apiCall('POST', '/api/auth/logout').catch(() => {});
  clearSession();
  currentUser = null;
  pendingAIQuery = '';
  // Reset all local data
  callsData = [];
  remindersData = [];
  chatSessions = [];
  activeChatSessionId = null;
  appointmentsData = [];
  profileData = { phone: '', city: '', blood: '', weight: '', height: '', allergies: [], emergencyContacts: [], avatar: '' };
  updateNavUser();
  showPage('page-landing');
}

function updateNavUser() {
  const navAuth     = document.getElementById('navAuth');
  const navUser     = document.getElementById('navUser');
  const navAvatar   = document.getElementById('navAvatar');
  const navUsername = document.getElementById('navUsername');
  const sidebarAuth = document.getElementById('sidebarAuth');
  const sidebarUser = document.getElementById('sidebarUser');
  const sidebarAvatar   = document.getElementById('sidebarAvatar');
  const sidebarUsername = document.getElementById('sidebarUsername');

  if (currentUser) {
    if (navAuth) navAuth.style.display = 'none';
    if (navUser) navUser.style.display = 'flex';
    if (navAvatar) navAvatar.textContent = currentUser.initial;
    if (navUsername) navUsername.textContent = currentUser.name;
    if (sidebarAuth) sidebarAuth.style.display = 'none';
    if (sidebarUser) sidebarUser.style.display = 'block';
    if (sidebarAvatar) sidebarAvatar.textContent = currentUser.initial;
    if (sidebarUsername) sidebarUsername.textContent = currentUser.name;
    // App sidebar
    const appSidebarAvatar = document.getElementById('appSidebarAvatar');
    const appSidebarUsername = document.getElementById('appSidebarUsername');
    const appTopbarAvatar = document.getElementById('appTopbarAvatar');
    const appTopbarName = document.getElementById('appTopbarName');
    if (appSidebarAvatar) appSidebarAvatar.textContent = currentUser.initial;
    if (appSidebarUsername) appSidebarUsername.textContent = currentUser.name;
    if (appTopbarAvatar) appTopbarAvatar.textContent = currentUser.initial;
    if (appTopbarName) appTopbarName.textContent = currentUser.name;
    const greetNameEl = document.getElementById('greetingName');
    if (greetNameEl) greetNameEl.textContent = (currentUser.name || 'User').split(' ')[0];
  } else {
    if (navAuth) navAuth.style.display = 'flex';
    if (navUser) navUser.style.display = 'none';
    if (sidebarAuth) sidebarAuth.style.display = 'block';
    if (sidebarUser) sidebarUser.style.display = 'none';
  }
}

/* ═══════════════════════════════════════════════════════════
   CHAT SESSIONS
═══════════════════════════════════════════════════════════ */
let chatSessions = [];
let activeChatSessionId = null;
let newSessionCounter = 0;
let appointmentsData = [];

function renderChatSidebar() {
  const recentList = document.getElementById('clpRecentList');
  const archiveList = document.getElementById('clpArchiveList');
  if (!recentList || !archiveList) return;

  const recent = chatSessions.filter(s => !s.archived);
  const archived = chatSessions.filter(s => s.archived);

  recentList.innerHTML = recent.map(s => `
    <div class="clp-chat-item${s.id === activeChatSessionId ? ' clp-chat-active' : ''}" onclick="loadChatSession(${s.id})">
      <div class="clp-chat-dot" style="background:${s.color}"></div>
      <div class="clp-chat-body">
        <div class="clp-chat-name">${escapeHtml(s.title)}</div>
        <div class="clp-chat-preview">${s.messages.length > 1 ? escapeHtml(s.messages[s.messages.length - 1].text.substring(0, 40)) + '…' : 'New conversation'}</div>
      </div>
      <button class="clp-archive-btn" title="Archive" onclick="event.stopPropagation(); archiveChatSession(${s.id})">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
      </button>
    </div>
  `).join('');

  archiveList.innerHTML = archived.map(s => `
    <div class="clp-archive-item" onclick="loadChatSession(${s.id})">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
      ${escapeHtml(s.title)}
    </div>
  `).join('');
}

function loadChatSession(id) {
  activeChatSessionId = id;
  const session = chatSessions.find(s => s.id === id);
  if (!session) return;

  const messagesEl = document.getElementById('chatMessages');
  const chipsRow = document.getElementById('chipsRow');
  if (!messagesEl) return;
  messagesEl.innerHTML = '';
  if (chipsRow) chipsRow.innerHTML = '';

  _renderingSession = true;
  session.messages.forEach(msg => {
    if (msg.role === 'bot') addBotMsg(msg.text);
    else addUserMsg(msg.text);
  });
  _renderingSession = false;

  renderChatSidebar();
}

function archiveChatSession(id) {
  const session = chatSessions.find(s => s.id === id);
  if (!session) return;
  session.archived = true;
  // If we archived the active session, switch to another
  if (activeChatSessionId === id) {
    const next = chatSessions.find(s => !s.archived);
    if (next) loadChatSession(next.id);
    else newChatSession();
    return;
  }
  renderChatSidebar();
  showToast('Chat archived 📁');
}

let _renderingSession = false;

/* ═══════════════════════════════════════════════════════════
   AI CHAT
═══════════════════════════════════════════════════════════ */

function triggerAI() {
  const input = document.getElementById('heroInput');
  const query = input ? input.value.trim() : '';

  if (currentUser) {
    showPage('page-chat');
    initChat();
    if (query) {
      setTimeout(() => sendMsgText(query), 300);
      if (input) input.value = '';
    }
  } else {
    pendingAIQuery = query;
    const pending = document.getElementById('aiPending');
    if (pending) pending.style.display = query ? 'flex' : 'none';
    goAuth('register');
  }
}

async function initChat() {
  const greetEl = document.getElementById('chatUserGreeting');
  if (greetEl && currentUser) {
    greetEl.textContent = currentUser.name.split(' ')[0];
  }
  renderChatVitals();

  // Load chat history from API if sessions not yet loaded
  if (chatSessions.length === 0) {
    await _loadChatHistory();
  }

  if (activeChatSessionId && chatSessions.find(s => s.id === activeChatSessionId)) {
    loadChatSession(activeChatSessionId);
  } else if (chatSessions.length > 0) {
    activeChatSessionId = chatSessions[0].id;
    loadChatSession(activeChatSessionId);
  } else {
    newChatSession();
  }
}

async function _loadChatHistory() {
  const { ok, data } = await apiCall('GET', '/api/ai/history');
  if (ok && data.history && data.history.length > 0) {
    // Group all messages into one session "Chat History"
    const messages = data.history.map(m => ({
      role: m.role === 'model' ? 'bot' : 'user',
      text: m.text,
    }));
    newSessionCounter++;
    const historySession = {
      id: 'history_' + newSessionCounter,
      title: 'Chat History',
      color: '#10b981',
      archived: false,
      messages,
    };
    chatSessions = [historySession];
    activeChatSessionId = historySession.id;
  }
  renderChatSidebar();
}

function saveChatSessionMessages() {
  const session = chatSessions.find(s => s.id === activeChatSessionId);
  if (!session) return;
  const messagesEl = document.getElementById('chatMessages');
  if (!messagesEl) return;
  // Messages already stored in chatSessions[].messages via addBotMsg/addUserMsg
}

function newChatSession() {
  newSessionCounter++;
  const colors = ['#10b981','#6366f1','#f59e0b','#8b5cf6','#ec4899','#0ea5e9'];
  const newSession = {
    id: 'session_' + newSessionCounter,
    title: 'New Consultation',
    color: colors[newSessionCounter % colors.length],
    archived: false,
    messages: [{ role: 'bot', text: t('aiWelcome') }],
  };
  chatSessions.unshift(newSession);
  activeChatSessionId = newSession.id;
  renderChatSidebar();
  const messagesEl = document.getElementById('chatMessages');
  if (messagesEl) messagesEl.innerHTML = '';
  addBotMsg(t('aiWelcome'));
  renderChips();
  const input = document.getElementById('chatInput');
  if (input) input.focus();
}

function renderChatVitals() {
  const upcomingEl = document.getElementById('acUpcomingList');
  if (!upcomingEl) return;
  const upcoming = appointmentsData.filter(a => a.status === 'upcoming').slice(0, 3);
  if (upcoming.length === 0) {
    upcomingEl.innerHTML = '<p style="font-size:12px;color:var(--muted);text-align:center;padding:8px 0">No upcoming appointments</p>';
    return;
  }
  upcomingEl.innerHTML = upcoming.map(a => {
    const d = new Date(a.date);
    const month = isNaN(d) ? '—' : d.toLocaleString('en', { month: 'short' }).toUpperCase();
    const day = isNaN(d) ? '?' : d.getDate();
    return `
      <div class="ac-upcoming-item">
        <div class="ac-upcoming-date">
          <div class="ac-upcoming-month">${month}</div>
          <div class="ac-upcoming-day">${day}</div>
        </div>
        <div class="ac-upcoming-info">
          <div class="ac-upcoming-name">${escapeHtml(a.doctor)}</div>
          <div class="ac-upcoming-meta">${escapeHtml(a.time)} • ${escapeHtml(a.type || 'Consultation')}</div>
        </div>
      </div>
    `;
  }).join('');
}

let micActive = false;
function toggleMic(btn) {
  micActive = !micActive;
  btn.classList.toggle('listening', micActive);
  btn.setAttribute('aria-pressed', micActive);
  if (micActive) {
    showToast('Listening... speak now 🎤');
    // Auto-cancel after 5s in demo
    setTimeout(() => {
      micActive = false;
      btn.classList.remove('listening');
      btn.setAttribute('aria-pressed', false);
    }, 5000);
  }
}

function renderChips() {
  const row = document.getElementById('chipsRow');
  if (!row) return;
  const chips = t('chips');
  if (!Array.isArray(chips)) return;

  row.innerHTML = chips.map(chip =>
    `<button class="chip" onclick="useChip(this)">${escapeHtml(chip)}</button>`
  ).join('');
}

function useChip(btn) {
  const text = btn.textContent;
  const chatInput = document.getElementById('chatInput');
  if (chatInput) chatInput.value = text;
  sendMsg();
}

/* ─────────────────────────────────────────────
   LANDING — TESTIMONIALS SLIDER
───────────────────────────────────────────── */
let testimonialOffset = 0;
function slideTestimonials(dir) {
  const grid = document.querySelector('.community-grid');
  if (!grid) return;
  const cards = grid.querySelectorAll('.community-card');
  if (!cards.length) return;
  const total = cards.length;
  testimonialOffset = (testimonialOffset + dir + total) % total;
  // On mobile, scroll the card into view; on desktop just cycle opacity highlight
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    cards[testimonialOffset].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  } else {
    cards.forEach((c, i) => {
      c.style.opacity = i === testimonialOffset ? '1' : '0.55';
      c.style.transform = i === testimonialOffset ? 'translateY(-4px)' : 'translateY(0)';
      c.style.transition = 'opacity 0.35s, transform 0.35s';
    });
  }
}

function sendMsg() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  sendMsgText(text);
}

async function sendMsgText(text) {
  addUserMsg(text);
  const typingEl = showTyping();

  try {
    const { ok, data } = await apiCall('POST', '/api/ai/chat', { message: text, lang });
    removeTyping(typingEl);
    if (ok && data.response) {
      addBotMsg(data.response);
    } else {
      addBotMsg(_localAIReply(text));
    }
  } catch {
    removeTyping(typingEl);
    addBotMsg(_localAIReply(text));
  }
}

function _localAIReply(text) {
  const lower = text.toLowerCase();
  if (lower.includes('fever') || lower.includes('temperature') || lower.includes('حمى') || lower.includes('ateş')) return aiReplies.fever;
  if (lower.includes('flu') || lower.includes('cold') || lower.includes('إنفلونزا') || lower.includes('grip')) return aiReplies.flu;
  if (lower.includes('nausea') || lower.includes('vomit') || lower.includes('sick') || lower.includes('غثيان') || lower.includes('bulantı')) return aiReplies.nausea;
  if (lower.includes('sleep') || lower.includes('insomnia') || lower.includes('أرق') || lower.includes('uykusuzluk')) return aiReplies.sleep;
  return aiReplies.default;
}

function addUserMsg(text) {
  const messages = document.getElementById('chatMessages');
  if (!messages) return;
  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble msg-user';
  bubble.textContent = text;
  messages.appendChild(bubble);
  scrollChatBottom();
  if (!_renderingSession) {
    const session = chatSessions.find(s => s.id === activeChatSessionId);
    if (session) {
      session.messages.push({ role: 'user', text });
      // Update preview in sidebar
      const previewEl = document.querySelector(`#clpRecentList .clp-chat-item.clp-chat-active .clp-chat-preview`);
      if (previewEl) previewEl.textContent = text.substring(0, 40) + (text.length > 40 ? '…' : '');
    }
  }
}

function addBotMsg(text) {
  const messages = document.getElementById('chatMessages');
  if (!messages) return;
  const wrap = document.createElement('div');
  wrap.className = 'msg-bot-wrap';
  wrap.innerHTML = `
    <div class="msg-bot-avatar"><span class="material-symbols-outlined">psychology</span></div>
    <div>
      <div class="msg-bot-header">MedLinka AI &bull; Just now</div>
      <div class="msg-bubble msg-bot">${formatBotMessage(text)}</div>
    </div>
  `;
  messages.appendChild(wrap);
  scrollChatBottom();
  if (!_renderingSession) {
    const session = chatSessions.find(s => s.id === activeChatSessionId);
    if (session) session.messages.push({ role: 'bot', text });
  }
}

function formatBotMessage(text) {
  // Replace bullet points with styled spans, handle line breaks
  return text
    .split('\n')
    .map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('•')) {
        return `<div class="msg-bullet">${escapeHtml(trimmed.slice(1).trim())}</div>`;
      }
      if (trimmed === '') return '<br>';
      return `<span>${escapeHtml(trimmed)}</span><br>`;
    })
    .join('');
}

function showTyping() {
  const messages = document.getElementById('chatMessages');
  if (!messages) return null;
  const el = document.createElement('div');
  el.className = 'typing-dots';
  el.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
  messages.appendChild(el);
  scrollChatBottom();
  return el;
}

function removeTyping(el) {
  if (el && el.parentNode) el.parentNode.removeChild(el);
}

function scrollChatBottom() {
  const messages = document.getElementById('chatMessages');
  if (messages) {
    requestAnimationFrame(() => {
      messages.scrollTop = messages.scrollHeight;
    });
  }
}

/* ═══════════════════════════════════════════════════════════
   DOCTORS
═══════════════════════════════════════════════════════════ */

function getDoctorSpec(doc) {
  if (lang === 'ar') return doc.spec_ar;
  if (lang === 'tr') return doc.spec_tr;
  return doc.spec_en;
}

function renderDoctorFilterTabs() {
  const filters = t('docFilters');
  const container = document.getElementById('docFilterTabs');
  if (!container || !Array.isArray(filters)) return;

  const filterKeys = ['All', 'General', 'Cardiology', 'Pediatrics', 'Dermatology', 'Eye Care'];
  container.innerHTML = filters.map((label, i) => {
    const key = filterKeys[i] || label;
    return `<button class="filter-btn${docFilter === key ? ' active' : ''}" onclick="filterDocSpec(this,'${key}')">${escapeHtml(label)}</button>`;
  }).join('');
}

function renderDoctorsGrid(list) {
  const grid = document.getElementById('doctorsList');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">👨‍⚕️</div><div class="empty-state-text">No doctors found</div></div>';
    return;
  }

  grid.innerHTML = list.map(doc => {
    const spec = getDoctorSpec(doc);
    const stars = '★'.repeat(Math.round(parseFloat(doc.rating)));
    return `
      <div class="doc-card" role="listitem" style="cursor:pointer" onclick="openDoctorProfile(${doc.id})">
        <div class="doc-card-photo-wrap">
          <img src="${doc.photo}" alt="${escapeHtml(doc.name)}" class="doc-card-photo" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="doc-card-photo-fallback" style="background:${doc.color};display:none">${doc.emoji}</div>
          <span class="doc-avail-badge">● Available</span>
          <span class="doc-photo-rating">${stars} ${doc.rating}</span>
        </div>
        <div class="doc-card-body">
          <div class="doc-name">${escapeHtml(doc.name)}</div>
          <div class="doc-spec">${escapeHtml(spec)}</div>
          <div class="doc-card-meta">
            <span class="doc-meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              ${doc.exp} yrs exp
            </span>
            <span class="doc-meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              ${doc.patients}
            </span>
          </div>
          <div class="doc-meta-item doc-loc-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${doc.loc}
          </div>
          <div class="doc-card-footer">
            <div class="doc-price">${doc.price}<span>/session</span></div>
            <div style="display:flex;gap:6px">
              <button class="doc-book-btn" style="background:transparent;border:1.5px solid #004843;color:#004843" onclick="event.stopPropagation();openDoctorProfile(${doc.id})">Profile</button>
              <button class="doc-book-btn" onclick="event.stopPropagation();openBookingModal(${doc.id})">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterDoctors(val) {
  docSearch = val.toLowerCase();
  applyDoctorFilters();
}

function filterDocSpec(_btn, spec) {
  docFilter = spec;
  renderDoctorFilterTabs();
  applyDoctorFilters();
}

function applyDoctorFilters() {
  let list = doctorsData;
  if (docFilter !== 'All') {
    list = list.filter(d => d.filter === docFilter);
  }
  const specSel = document.getElementById('docsSpecSelect');
  if (specSel && specSel.value) {
    const val = specSel.value.toLowerCase();
    list = list.filter(d => d.filter.toLowerCase().includes(val) || d.spec_en.toLowerCase().includes(val));
  }
  if (docSearch) {
    list = list.filter(d =>
      d.name.toLowerCase().includes(docSearch) ||
      d.spec_en.toLowerCase().includes(docSearch) ||
      d.spec_ar.includes(docSearch) ||
      d.spec_tr.toLowerCase().includes(docSearch) ||
      (d.loc && d.loc.toLowerCase().includes(docSearch))
    );
  }
  renderDoctorsGrid(list);
}

async function loadDoctorsFromAPI() {
  const { ok, data } = await apiCall('GET', '/api/doctors');
  if (ok && Array.isArray(data.doctors) && data.doctors.length > 0) {
    const apiDocs = data.doctors.map((d, i) => ({
      id:       d._id || (i + 1),
      emoji:    d.emoji || '\u{1F468}\u200D\u2695\uFE0F',
      photo:    d.photo || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(d.name) + '&background=0a7c6e&color=fff&size=400',
      name:     d.name,
      spec_en:  d.specialty_en || 'General Practice',
      spec_ar:  d.specialty_ar || 'طب عام',
      spec_tr:  d.specialty_tr || 'Genel Pratik',
      rating:   String(d.rating || '4.8'),
      patients: d.totalPatients ? (d.totalPatients > 999 ? (d.totalPatients/1000).toFixed(1)+'k' : String(d.totalPatients)) : '500+',
      exp:      String(d.exp_years || '5'),
      color:    d.color || '#e8f4ff',
      filter:   d.specialty_key || 'General',
      price:    d.fee ? '$' + d.fee : '$40',
      loc:      d.location || 'Online',
    }));
    doctorsData.length = 0;
    apiDocs.forEach(d => doctorsData.push(d));
  }
  renderDoctorFilterTabs();
  renderDoctorsGrid(doctorsData);
}

function openBookingModal(id) {
  const doc = doctorsData.find(d => d.id === id);
  if (!doc) return;
  selectedDoc = doc;
  selectedSlot = null;

  // Populate modal
  const avatarEl = document.getElementById('bookingDocAvatar');
  const nameEl   = document.getElementById('bookingDocName');
  const specEl   = document.getElementById('bookingDocSpec');
  if (avatarEl) avatarEl.textContent = doc.emoji;
  if (nameEl)   nameEl.textContent   = doc.name;
  if (specEl)   specEl.textContent   = getDoctorSpec(doc);

  // Set min date to today
  const dateInput = document.getElementById('bookDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = '';
  }

  // Render time slots
  const grid = document.getElementById('timeGrid');
  if (grid) {
    grid.innerHTML = timeSlots.map(slot => {
      const cls = slot.available ? 'time-slot' : 'time-slot unavailable';
      const click = slot.available ? `onclick="selectSlot(this)"` : '';
      const ariaDisabled = slot.available ? '' : 'aria-disabled="true"';
      return `<button class="${cls}" ${click} ${ariaDisabled}>${slot.time}</button>`;
    }).join('');
  }

  // Show modal
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function openDoctorProfile(id, pushHistory = true) {
  const doc = doctorsData.find(d => d.id === id);
  if (!doc) return;
  window.currentDoctorId = id;
  if (pushHistory) history.pushState({ page: 'doctor', id }, '', `#/doctor/${id}`);

  const name = doc.name || '—';
  const spec = lang === 'ar' ? doc.spec_ar : lang === 'tr' ? doc.spec_tr : doc.spec_en || '—';

  const setEl = (elId, val) => { const el = document.getElementById(elId); if (el) el.textContent = val; };
  const setAttr = (elId, attr, val) => { const el = document.getElementById(elId); if (el) el[attr] = val; };

  setEl('dpName', name);
  setEl('dpSpec', spec.toUpperCase());
  setEl('dpRating', doc.rating || '5.0');
  setEl('dpReviews', doc.reviews || '0');
  setEl('dpExp', doc.experience || '5+');
  setEl('dpPatients', doc.patients || '2k+');
  setEl('dpPrice', doc.price || '—');
  setEl('dpQuote', doc.quote || `"Committed to delivering the highest standard of patient care."`);
  setEl('dpReviewsCount', `View all ${doc.reviews || 0} reviews`);
  setAttr('dpPhoto', 'src', doc.photo || '');

  // Tags
  const tags = document.getElementById('dpTags');
  if (tags) {
    const specs = Array.isArray(doc.tags) ? doc.tags : [spec];
    tags.innerHTML = specs.map(t => `<span style="padding:4px 12px;background:rgba(0,72,67,0.08);color:#004843;border-radius:100px;font-size:12px;font-weight:600">${t}</span>`).join('');
  }

  // Available dates (next 5 weekdays)
  const datesRow = document.getElementById('dpDates');
  if (datesRow) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const chips = [];
    let d = new Date();
    let count = 0;
    while (count < 5) {
      if (d.getDay() !== 0 && d.getDay() !== 6) {
        chips.push({ day: days[d.getDay()], num: d.getDate(), sel: count === 0 });
        count++;
      }
      d = new Date(d.getTime() + 86400000);
    }
    datesRow.innerHTML = chips.map(c => `
      <div class="dp-date-chip${c.sel ? ' selected' : ''}" onclick="dpSelectDate(this)">
        <span class="dp-date-day">${c.day}</span>
        <span class="dp-date-num">${c.num}</span>
      </div>`).join('');
  }

  // Slot interactions
  document.querySelectorAll('#dpSlots .dp-slot').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('#dpSlots .dp-slot').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
    };
  });

  showPage('page-doctor-profile');
}

function dpSelectDate(el) {
  document.querySelectorAll('#dpDates .dp-date-chip').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

async function bookFromProfile() {
  const doc = doctorsData.find(d => d.id === window.currentDoctorId);
  if (!doc) return;

  // Read selected date chip
  const dateChip = document.querySelector('#dpDates .dp-date-chip.selected');
  // Read selected time slot
  const slotChip = document.querySelector('#dpSlots .dp-slot.selected');

  if (!dateChip) { showToast('Please select a date first.', 'warn'); return; }
  if (!slotChip) { showToast('Please select a time slot.', 'warn'); return; }

  const num   = dateChip.querySelector('.dp-date-num')?.textContent || '';
  const time  = slotChip.textContent.trim();
  const now   = new Date();
  const month = now.toLocaleString('en-US', { month: 'short' });
  const year  = now.getFullYear();
  const dateLabel = `${month} ${num}, ${year}`;

  // Disable button while booking
  const btn = document.getElementById('dpBookBtn');
  if (btn) { btn.disabled = true; btn.style.opacity = '0.7'; }

  // Convert date label to ISO format for API (e.g. "Apr 15, 2026" → "2026-04-15")
  const now2 = new Date();
  const isoDate = `${now2.getFullYear()}-${String(now2.getMonth()+1).padStart(2,'0')}-${String(parseInt(num)).padStart(2,'0')}`;

  const localEntry = {
    id:         Date.now(),
    doctorName: doc.name,
    specialty:  getDoctorSpec(doc),
    photo:      doc.photo,
    date:       dateLabel,
    time:       time,
    type:       'Video Call',
    status:     'upcoming',
  };
  callsData.unshift(localEntry);
  _syncAppointmentsData();

  // Save to API and update local ID with real MongoDB _id
  const apptRes = await apiCall('POST', '/api/appointments', {
    doctorId:   doc._id || String(doc.id),
    doctorName: doc.name,
    specialty:  getDoctorSpec(doc),
    date:       isoDate,
    time,
    type:       'video',
  });
  if (apptRes.ok && apptRes.data.appointment) {
    localEntry.id = apptRes.data.appointment._id;
  }

  if (btn) { btn.disabled = false; btn.style.opacity = '1'; }

  showToast('✅ Appointment booked! See it in My Calls.');

  // Navigate to My Calls after short delay
  setTimeout(() => {
    renderCallsList('all');
    showPage('page-calls');
  }, 1200);
}

function closeBookingModal(event) {
  if (event && event.target !== document.getElementById('bookingModal')) return;
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  selectedDoc = null;
  selectedSlot = null;
}

function selectSlot(el) {
  document.querySelectorAll('#timeGrid .time-slot').forEach(s => s.classList.remove('sel'));
  el.classList.add('sel');
  selectedSlot = el.textContent;
}

async function confirmBooking() {
  const dateInput = document.getElementById('bookDate');
  const date = dateInput ? dateInput.value : '';

  if (!date) { showToast(t('errFill'), 'warn'); return; }
  if (!selectedSlot) { showToast(t('errSlot'), 'warn'); return; }

  // Try to book via API
  if (selectedDoc) {
    const docId = selectedDoc._id || selectedDoc.id;
    await apiCall('POST', '/api/appointments', {
      doctorId: docId,
      date,
      time: selectedSlot,
      type: 'Video Call',
    });
    // Add to local callsData for UI display
    callsData.unshift({
      id: Date.now(),
      doctorName: selectedDoc.name,
      specialty:  getDoctorSpec(selectedDoc),
      photo:      selectedDoc.photo,
      date:       new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time:       selectedSlot,
      type:       'Video Call',
      status:     'upcoming',
    });
    renderCallsList('all');
  }

  closeBookingModal();
  showToast(t('toastBook'));
}

/* ═══════════════════════════════════════════════════════════
   PHARMACY
═══════════════════════════════════════════════════════════ */

function getMedName(med) {
  if (lang === 'ar') return med.name_ar;
  if (lang === 'tr') return med.name_tr;
  return med.name_en;
}

function getMedDesc(med) {
  if (lang === 'ar') return med.desc_ar;
  if (lang === 'tr') return med.desc_tr;
  return med.desc_en;
}

function renderMedFilterTabs() {
  const filters = t('medFilters');
  const container = document.getElementById('medFilterTabs');
  if (!container || !Array.isArray(filters)) return;

  const filterKeys = ['All', 'Painkillers', 'Antibiotics', 'Vitamins', 'Herbal'];
  container.innerHTML = filters.map((label, i) => {
    const key = filterKeys[i] || label;
    return `<button class="filter-btn${medFilter === key ? ' active' : ''}" onclick="filterMedType(this,'${key}')">${escapeHtml(label)}</button>`;
  }).join('');
}

function renderMedGrid(list) {
  const grid = document.getElementById('medGrid');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">💊</div><div class="empty-state-text">No medicines found</div></div>';
    return;
  }

  grid.innerHTML = list.map(med => {
    const inCart = cart.some(item => item.id === med.id);
    const btnLabel = inCart ? t('addedCart') : t('addCart');
    const btnClass = inCart ? 'med-add-btn in-cart' : 'med-add-btn';
    const rxBadge = med.rx ? '<span class="med-rx-badge">Rx</span>' : '';
    const actionBtn = med.rx && !inCart
      ? `<button class="med-presc-btn" onclick="showToast('Please upload your prescription 📋')">${t('uploadPresc') || 'Upload Prescription'}</button>`
      : `<button class="${btnClass}" id="med-btn-${med.id}" onclick="addToCart(${med.id}, this)">${btnLabel}</button>`;
    return `
      <div class="med-card" role="listitem">
        <div class="med-card-img-wrap">
          <img src="${med.photo}" alt="${escapeHtml(getMedName(med))}" class="med-card-img" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="med-card-img-fallback" style="display:none">${med.emoji}</div>
          ${rxBadge}
        </div>
        <div class="med-card-body">
          <div class="med-card-name">${escapeHtml(getMedName(med))}</div>
          <div class="med-card-price">${med.price}</div>
          <div class="med-card-desc">${escapeHtml(getMedDesc(med))}</div>
          <div class="med-card-footer">
            ${actionBtn}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterMeds(val) {
  medSearch = val.toLowerCase();
  applyMedFilters();
}

function filterMedType(_btn, type) {
  medFilter = type;
  renderMedFilterTabs();
  applyMedFilters();
}

function applyMedFilters() {
  let list = medsData;
  if (medFilter !== 'All') {
    list = list.filter(m => m.type === medFilter);
  }
  if (medSearch) {
    list = list.filter(m =>
      m.name_en.toLowerCase().includes(medSearch) ||
      m.name_ar.includes(medSearch) ||
      m.name_tr.toLowerCase().includes(medSearch) ||
      m.desc_en.toLowerCase().includes(medSearch)
    );
  }
  renderMedGrid(list);
}

function addToCart(id, btn) {
  const med = medsData.find(m => m.id === id);
  if (!med) return;

  const idx = cart.findIndex(item => item.id === id);
  if (idx > -1) {
    // Remove from cart
    cart.splice(idx, 1);
    if (btn) {
      btn.textContent = t('addCart');
      btn.classList.remove('in-cart');
    }
  } else {
    // Add to cart
    cart.push({ ...med });
    if (btn) {
      btn.textContent = t('addedCart');
      btn.classList.add('in-cart');
    }
    showToast(t('toastCart'));
  }

  updateCartBar();
}

function updateCartBar() {
  const bar   = document.getElementById('cartBar');
  const badge = document.getElementById('cartBadge');

  if (badge) badge.textContent = cart.length;

  if (bar) {
    if (cart.length > 0) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  }
}

function openCartModal() {
  requireAuth('page-cart');
}

function closeCartModal() {}

function renderCartPage() {
  const container = document.getElementById('scCartItems');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="sc-empty">
        <div class="sc-empty-icon">🛒</div>
        <div class="sc-empty-text">Your basket is empty</div>
        <button class="sc-empty-btn" onclick="requireAuth('page-pharmacy')">Browse Pharmacy</button>
      </div>`;
  } else {
    const categoryLabels = { Painkillers: 'PAIN RELIEF', Antibiotics: 'ANTIBIOTICS', Vitamins: 'SUPPLEMENTS', Herbal: 'HERBAL BOTANICS' };
    container.innerHTML = cart.map(item => {
      const name = getMedName(item);
      const cat = categoryLabels[item.type] || 'PHARMACY';
      const price = parseFloat(item.price.replace('$', ''));
      const qty = item.qty || 1;
      return `
        <div class="sc-item-card">
          <img class="sc-item-img" src="${item.photo}" alt="${escapeHtml(name)}"
            onerror="this.src='https://ui-avatars.com/api/?name=Med&background=efeeec&color=6f7977&size=90'">
          <div class="sc-item-body">
            <div class="sc-item-cat">${cat}</div>
            <div class="sc-item-name">${escapeHtml(name)}</div>
            <div class="sc-item-desc">${escapeHtml(item.desc_en || '')}</div>
            <div class="sc-item-controls">
              <button class="sc-qty-btn" onclick="scChangeQty(${item.id}, -1)">−</button>
              <span class="sc-qty-val" id="sc-qty-${item.id}">${qty}</span>
              <button class="sc-qty-btn" onclick="scChangeQty(${item.id}, 1)">+</button>
              <button class="sc-remove-btn" onclick="removeFromCart(${item.id})">
                <span class="material-symbols-outlined" style="font-size:14px">delete</span>
                REMOVE
              </button>
            </div>
          </div>
          <div class="sc-item-right">
            <div class="sc-item-price">$${(price * qty).toFixed(2)}</div>
            <div class="sc-item-stock">${qty > 1 ? 'Unit: ' + item.price : 'In Stock'}</div>
          </div>
        </div>`;
    }).join('');
  }

  // Update summary
  const subtotal = cart.reduce((s, i) => s + parseFloat(i.price.replace('$','')) * (i.qty || 1), 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;
  const setEl = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  setEl('scSubtotalLbl', `Subtotal (${cart.length} item${cart.length !== 1 ? 's' : ''})`);
  setEl('scSubtotal', `$${subtotal.toFixed(2)}`);
  setEl('scTax', `$${tax.toFixed(2)}`);
  setEl('scTotal', `$${total.toFixed(2)}`);
}

function scChangeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, (item.qty || 1) + delta);
  renderCartPage();
}

function addMedToCart(id) {
  const med = medsData.find(m => m.id === id);
  if (!med) return;
  if (!cart.find(i => i.id === id)) {
    cart.push({ ...med, qty: 1 });
    updateCartBar();
    showToast(t('toastCart'));
    renderCartPage();
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);

  // Update button state in grid
  const btn = document.getElementById('med-btn-' + id);
  if (btn) {
    btn.textContent = t('addCart');
    btn.classList.remove('in-cart');
  }

  updateCartBar();
  renderCartPage();
}

function checkout() {
  if (cart.length === 0) return;

  // Reset all add buttons
  cart.forEach(item => {
    const btn = document.getElementById('med-btn-' + item.id);
    if (btn) {
      btn.textContent = t('addCart');
      btn.classList.remove('in-cart');
    }
  });

  cart = [];
  updateCartBar();
  renderCartPage();
  showPage('page-pharmacy');
  showToast(t('toastOrder'));
}

/* ═══════════════════════════════════════════════════════════
   REMINDERS
═══════════════════════════════════════════════════════════ */

function getRemDetail(rem) {
  if (lang === 'ar') return rem.detail_ar;
  if (lang === 'tr') return rem.detail_tr;
  return rem.detail_en;
}

function renderReminderList() {
  // Build date strip
  mrRenderDateStrip();

  const emptyHtml = '<div class="mr-empty-period">No rituals scheduled for this period.</div>';

  // Classify reminders by first time slot
  const morning   = remindersData.filter(r => { const h = mrHour(r.times[0]); return h >= 5  && h < 12; });
  const afternoon = remindersData.filter(r => { const h = mrHour(r.times[0]); return h >= 12 && h < 18; });
  const evening   = remindersData.filter(r => { const h = mrHour(r.times[0]); return h >= 18 || h < 5;  });

  const now = new Date();
  const nowMins = now.getHours() * 60 + now.getMinutes();

  function buildItem(rem) {
    const firstTime = rem.times[0] || '08:00 AM';
    const itemMins = mrTimeTo24Mins(firstTime);
    const taken = rem.active && itemMins < nowMins - 30;
    const upcoming = itemMins > nowMins + 10;
    const detail = getRemDetail(rem);

    let rightHtml;
    if (taken) {
      rightHtml = `
        <span class="mr-taken-badge">TAKEN AT ${firstTime}</span>
        <button class="mr-taken-check"><span class="material-symbols-outlined" style="font-size:18px;color:#fff">check</span></button>`;
    } else if (upcoming) {
      rightHtml = `
        <span class="mr-upcoming-lbl">Upcoming</span>
        <button class="mr-alarm-btn"><span class="material-symbols-outlined" style="font-size:16px;color:var(--teal)">alarm</span></button>`;
    } else {
      rightHtml = `
        <button class="mr-mark-btn" onclick="toggleReminder('${rem.id}')">Mark Taken</button>
        <button class="mr-dismiss-btn" onclick="toggleReminder('${rem.id}')">✕</button>`;
    }
    return `
      <div class="mr-item-card">
        <div class="mr-item-icon" style="background:${rem.color}">${rem.emoji}</div>
        <div class="mr-item-body">
          <div class="mr-item-name">${escapeHtml(rem.name)}</div>
          <div class="mr-item-meta">${escapeHtml(detail)} &bull; ${firstTime}</div>
        </div>
        <div class="mr-item-right">${rightHtml}</div>
        <button class="mr-delete-btn" title="Delete reminder" onclick="deleteReminder('${rem.id}')">
          <span class="material-symbols-outlined" style="font-size:15px">delete</span>
        </button>
      </div>`;
  }

  const setSection = (id, list) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = list.length ? list.map(buildItem).join('') : emptyHtml;
  };
  setSection('mrMorning',   morning);
  setSection('mrAfternoon', afternoon);
  setSection('mrEvening',   evening);

  // Count
  const countEl = document.getElementById('mrRemCount');
  if (countEl) countEl.textContent = String(remindersData.length).padStart(2, '0');
}

let mrDayOffset = 0;
function mrRenderDateStrip() {
  const chips = document.getElementById('mrDateChips');
  if (!chips) return;
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const today = new Date();
  const html = [-1, 0, 1, 2, 3].map(offset => {
    const d = new Date(today);
    d.setDate(today.getDate() + mrDayOffset + offset);
    const isToday = offset === 0 && mrDayOffset === 0;
    const lbl = isToday ? 'TODAY' : days[d.getDay()];
    return `<div class="mr-date-chip${isToday ? ' active' : ''}" onclick="mrSelectDay(${offset})">
      <span class="mr-dc-day">${lbl}</span>
      <span class="mr-dc-num">${d.getDate()}</span>
      <span class="mr-dc-mon">${months[d.getMonth()]}</span>
    </div>`;
  }).join('');
  chips.innerHTML = html;
}
function mrShiftDays(delta) { mrDayOffset += delta; mrRenderDateStrip(); }
function mrSelectDay(offset) { mrDayOffset += offset; mrRenderDateStrip(); }
function mrHour(timeStr) {
  if (!timeStr) return 8;
  const m = timeStr.match(/(\d+):(\d+)\s*(AM|PM)?/i);
  if (!m) return 8;
  let h = parseInt(m[1]);
  if (m[3] && m[3].toUpperCase() === 'PM' && h !== 12) h += 12;
  if (m[3] && m[3].toUpperCase() === 'AM' && h === 12) h = 0;
  return h;
}
function mrTimeTo24Mins(timeStr) {
  const h = mrHour(timeStr);
  const m = timeStr.match(/:(\d+)/);
  return h * 60 + (m ? parseInt(m[1]) : 0);
}

function deleteReminder(id) {
  remindersData = remindersData.filter(r => String(r.id) !== String(id));
  renderReminderList();
  renderHomeReminders();
  showToast('Reminder deleted 🗑️');
  apiCall('DELETE', `/api/reminders/${id}`).catch(() => {});
}

function toggleReminder(id) {
  const rem = remindersData.find(r => String(r.id) === String(id));
  if (rem) {
    rem.active = !rem.active;
    renderReminderList();
    showToast(t('toastToggle'));
    apiCall('PATCH', `/api/reminders/${rem.id}`, { active: rem.active }).catch(() => {});
  }
}

function addReminder() {
  openReminderModal();
}

function openReminderModal() {
  const overlay = document.getElementById('remModalOverlay');
  if (!overlay) return;
  // Reset form
  const nameInput = document.getElementById('remNameInput');
  const doseInput = document.getElementById('remDoseInput');
  if (nameInput) nameInput.value = '';
  if (doseInput) doseInput.value = '';
  // Reset times
  const timesList = document.getElementById('remTimesList');
  if (timesList) timesList.innerHTML = `
    <div class="rem-time-entry">
      <input class="rem-time-input" type="time" value="08:00">
      <button class="rem-time-remove" onclick="removeRemTime(this)" title="Remove">✕</button>
    </div>
  `;
  // Reset emoji
  document.querySelectorAll('.rem-emoji-btn').forEach(b => b.classList.remove('active'));
  const firstEmoji = document.querySelector('.rem-emoji-btn');
  if (firstEmoji) firstEmoji.classList.add('active');
  // Reset color
  document.querySelectorAll('.rem-color-btn').forEach(b => b.classList.remove('active'));
  const firstColor = document.querySelector('.rem-color-btn');
  if (firstColor) firstColor.classList.add('active');

  overlay.classList.add('rem-modal-open');
  if (nameInput) setTimeout(() => nameInput.focus(), 100);
}

function closeReminderModal(event) {
  if (event && event.target !== document.getElementById('remModalOverlay')) return;
  const overlay = document.getElementById('remModalOverlay');
  if (overlay) overlay.classList.remove('rem-modal-open');
}

function selectRemEmoji(btn) {
  document.querySelectorAll('.rem-emoji-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectRemColor(btn) {
  document.querySelectorAll('.rem-color-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function addRemTime() {
  const list = document.getElementById('remTimesList');
  if (!list) return;
  const entry = document.createElement('div');
  entry.className = 'rem-time-entry';
  entry.innerHTML = `
    <input class="rem-time-input" type="time" value="12:00">
    <button class="rem-time-remove" onclick="removeRemTime(this)" title="Remove">✕</button>
  `;
  list.appendChild(entry);
}

function removeRemTime(btn) {
  const entries = document.querySelectorAll('.rem-time-entry');
  if (entries.length <= 1) { showToast('At least one time is required ⏰'); return; }
  btn.closest('.rem-time-entry').remove();
}

function saveNewReminder() {
  const nameInput = document.getElementById('remNameInput');
  const doseInput = document.getElementById('remDoseInput');
  const name = nameInput ? nameInput.value.trim() : '';
  if (!name) { showToast('Please enter a medicine name ⚠️'); if (nameInput) nameInput.focus(); return; }

  const activeEmoji = document.querySelector('.rem-emoji-btn.active');
  const emoji = activeEmoji ? activeEmoji.dataset.emoji : '💊';

  const activeColor = document.querySelector('.rem-color-btn.active');
  const color = activeColor ? activeColor.dataset.color : '#e8f4ff';

  const dose = doseInput ? doseInput.value.trim() : '';

  const timeInputs = document.querySelectorAll('.rem-time-input');
  const times = Array.from(timeInputs).map(inp => {
    const val = inp.value; // HH:MM
    if (!val) return null;
    const [h, m] = val.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const hour = h % 12 || 12;
    return `${hour}:${String(m).padStart(2, '0')} ${period}`;
  }).filter(Boolean);

  if (times.length === 0) { showToast('Please add at least one time ⏰'); return; }

  const localRem = {
    id: Date.now(), // temp id
    name,
    emoji,
    color,
    detail_en: dose || 'As prescribed',
    detail_ar: dose || 'حسب الوصفة',
    detail_tr: dose || 'Reçeteye göre',
    times,
    active: true,
  };
  remindersData.unshift(localRem);
  renderReminderList();
  renderHomeReminders();
  closeReminderModal();
  showToast(t('toastRem'));

  // Save to API and update local id with real MongoDB _id
  apiCall('POST', '/api/reminders', {
    medicineName: name, emoji, color,
    detail_en: localRem.detail_en, detail_ar: localRem.detail_ar, detail_tr: localRem.detail_tr,
    times,
  }).then(res => {
    if (res.ok && res.data.reminder) {
      localRem.id = res.data.reminder._id;
    }
  }).catch(() => {});
}

/* ═══════════════════════════════════════════════════════════
   HOME WIDGETS
═══════════════════════════════════════════════════════════ */

function renderHomeWidgets() {
  if (!currentUser) return;

  // Update greeting name
  const greetNameEl = document.getElementById('greetingName');
  if (greetNameEl) greetNameEl.textContent = (currentUser.name || 'User').split(' ')[0];
  // Update date
  const dateChip = document.getElementById('homeDateChip');
  if (dateChip) {
    const now = new Date();
    dateChip.textContent = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  renderHomeDoctors();
  renderHomeMeds();
  renderHomeReminders();
}

function renderHomeDoctors() {
  const container = document.getElementById('homeDoctors');
  if (!container) return;

  const specColors = ['#10b981','#3b82f6','#f59e0b','#8b5cf6','#ef4444','#06b6d4'];
  const topDocs = doctorsData.slice(0, 4);
  container.innerHTML = topDocs.map((doc, i) => {
    const spec = getDoctorSpec(doc);
    const reviewCount = Math.floor(80 + Math.random() * 150);
    const color = specColors[i % specColors.length];
    return `
      <div class="home-doc-card2" onclick="requireAuth('page-doctors')" role="button" tabindex="0">
        <div class="home-doc-photo-wrap">
          <img src="${doc.photo}" alt="${escapeHtml(doc.name)}" class="home-doc-photo" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="home-doc-emoji-fb" style="background:${doc.color};display:none">${doc.emoji}</div>
        </div>
        <div class="home-doc2-info">
          <div class="home-doc2-name">${escapeHtml(doc.name)}</div>
          <div class="home-doc2-spec" style="color:${color}">${escapeHtml(spec)}</div>
          <div class="home-doc2-rating">⭐ ${doc.rating} <span class="home-doc2-reviews">(${reviewCount} reviews)</span></div>
        </div>
      </div>
    `;
  }).join('');
}

function renderHomeMeds() {
  const container = document.getElementById('homeMeds');
  if (!container) return;

  const topMeds = medsData.slice(0, 6);
  container.innerHTML = topMeds.map(med => `
    <div class="home-med-card2" onclick="requireAuth('page-pharmacy')" role="button" tabindex="0">
      <div class="home-med-icon2">${med.emoji}</div>
      <div class="home-med2-name">${escapeHtml(getMedName(med))}</div>
      <div class="home-med2-price">${med.price}</div>
    </div>
  `).join('');
}

function renderHomeReminders() {
  const container = document.getElementById('homeReminders');
  if (!container) return;

  const allRems = remindersData.slice(0, 4);
  if (allRems.length === 0) {
    container.innerHTML = '<div class="home-rem-empty">No reminders for today.</div>';
    return;
  }

  container.innerHTML = allRems.map((rem, idx) => {
    const isDone = idx === 2; // simulate one "Done" for UI demo
    const timeBadge = isDone
      ? `<span class="home-rem-done-badge">Done</span>`
      : `<span class="home-rem-time-badge">${rem.times[0]}</span>`;
    return `
      <div class="home-rem-row" onclick="requireAuth('page-reminders')" role="button" tabindex="0">
        <div class="home-rem-icon" style="background:${rem.color}">${rem.emoji}</div>
        <div class="home-rem-info">
          <div class="home-rem-name">${escapeHtml(rem.name)}</div>
          <div class="home-rem-detail">${escapeHtml(getRemDetail(rem))}</div>
        </div>
        ${timeBadge}
      </div>
    `;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════
   RENDER ALL (called on language change)
═══════════════════════════════════════════════════════════ */

function renderAll() {
  // Re-render doctor filter tabs & grid
  renderDoctorFilterTabs();
  applyDoctorFilters();

  // Re-render med filter tabs & grid
  renderMedFilterTabs();
  applyMedFilters();

  // Re-render reminders
  renderReminderList();

  // Re-render home widgets if logged in
  if (currentUser) {
    renderHomeWidgets();
  }

  // Re-render chat chips if on chat page
  if (currentPage === 'page-chat') {
    renderChips();
  }

  // Update cart bar text
  const cartBarLabel = document.querySelector('#cartBar [data-i18n="cartBar"]');
  if (cartBarLabel) cartBarLabel.textContent = t('cartBar');

  // Re-apply i18n to dynamic elements that might have been overwritten
  applyI18n();
}

/* ═══════════════════════════════════════════════════════════
   TOAST
═══════════════════════════════════════════════════════════ */

function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  if (toastTimer) {
    clearTimeout(toastTimer);
    toast.classList.remove('show');
  }

  toast.textContent = msg;
  toast.className = 'toast ' + type;

  // Force reflow to restart animation
  void toast.offsetWidth;

  toast.classList.add('show');

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    toastTimer = null;
  }, 3000);
}

/* ═══════════════════════════════════════════════════════════
   FAQ ACCORDION
═══════════════════════════════════════════════════════════ */

function toggleFaq(el) {
  const item = el.closest('.faq-item');
  if (!item) return;
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item.open').forEach(f => f.classList.remove('open'));
  // Open clicked if it was closed
  if (!isOpen) item.classList.add('open');
}

/* ═══════════════════════════════════════════════════════════
   UTILITY
═══════════════════════════════════════════════════════════ */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ═══════════════════════════════════════════════════════════
   KEYBOARD ACCESSIBILITY
═══════════════════════════════════════════════════════════ */

document.addEventListener('keydown', function(e) {
  // Close modals on Escape
  if (e.key === 'Escape') {
    const bookingModal = document.getElementById('bookingModal');
    const cartModal    = document.getElementById('cartModal');
    if (bookingModal && bookingModal.classList.contains('open')) closeBookingModal();
    if (cartModal    && cartModal.classList.contains('open'))    closeCartModal();
    if (document.getElementById('sidebar').classList.contains('open')) closeSidebar();
  }
});

// Allow Enter/Space on elements with role="button"
document.addEventListener('keypress', function(e) {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.hasAttribute('tabindex')) {
    if (e.target.getAttribute('role') === 'button') {
      e.target.click();
    }
  }
});

/* ═══ CALLS PAGE ═══ */
let activeCallFilter = 'all';
function renderCallsList(filter) {
  activeCallFilter = filter || activeCallFilter;
  const container = document.getElementById('callsList');
  if (!container) return;
  const filtered = activeCallFilter === 'all' ? callsData : callsData.filter(c => c.status === activeCallFilter);
  document.querySelectorAll('.calls-filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === activeCallFilter);
  });
  if (!filtered.length) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">📋</div><div>No consultations found</div></div>';
    return;
  }
  const slots = ['09:00 AM','10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM'];
  const today = new Date().toISOString().split('T')[0];

  container.innerHTML = filtered.map(call => {
    const statusLabel = { upcoming: 'Upcoming', completed: 'Completed', cancelled: 'Cancelled' }[call.status];
    const statusClass = `call-status-${call.status}`;
    let actions = '';
    // Use data-cid attribute to avoid HTML attribute quote conflicts with MongoDB ObjectId strings
    const safeId = encodeURIComponent(String(call.id));
    if (call.status === 'upcoming') {
      actions = `<button class="call-btn call-btn-primary" onclick="showToast('Connecting to video call… 📹')">Join Call</button>
                 <button class="call-btn call-btn-outline" data-cid="${safeId}" onclick="toggleReschedulePanel(decodeURIComponent(this.dataset.cid))">Reschedule</button>`;
    } else if (call.status === 'completed') {
      actions = `<button class="call-btn call-btn-outline" data-cid="${safeId}" onclick="toggleCallReport(decodeURIComponent(this.dataset.cid))">View Report</button>
                 <button class="call-btn call-btn-primary" data-cid="${safeId}" onclick="rebookCall(decodeURIComponent(this.dataset.cid))">Rebook</button>`;
    } else {
      actions = `<button class="call-btn call-btn-primary" data-cid="${safeId}" onclick="rebookCall(decodeURIComponent(this.dataset.cid))">Rebook</button>`;
    }

    const slotBtns = slots.map(s => `<button class="rs-slot" onclick="selectRescheduleSlot(this)">${s}</button>`).join('');

    const reportHtml = call.report ? `
      <div class="call-report-drawer" id="report-${safeId}" style="display:none">
        <div class="call-report-section"><div class="call-report-label">Diagnosis</div><div class="call-report-text">${escapeHtml(call.report.diagnosis)}</div></div>
        <div class="call-report-section"><div class="call-report-label">Prescription</div><ul class="call-report-list">${(call.report.prescription||[]).map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul></div>
        <div class="call-report-section"><div class="call-report-label">Doctor Notes</div><div class="call-report-text">${escapeHtml(call.report.notes||'')}</div></div>
      </div>` : '';

    return `
      <div class="call-card" id="call-${safeId}">
        <div class="call-card-main">
          <img src="${call.photo||''}" alt="${escapeHtml(call.doctorName)}" class="call-doc-photo" loading="lazy" onerror="this.style.display='none'">
          <div class="call-card-info">
            <div class="call-doc-name">${escapeHtml(call.doctorName)}</div>
            <div class="call-doc-spec">${escapeHtml(call.specialty)}</div>
            <div class="call-meta"><span class="call-meta-chip">📅 ${call.date}</span><span class="call-meta-chip">🕐 ${call.time}</span><span class="call-meta-chip">📹 ${call.type}</span></div>
          </div>
          <div class="call-card-right"><span class="call-status-badge ${statusClass}">${statusLabel}</span><div class="call-actions">${actions}</div></div>
        </div>
        ${reportHtml}
        <div class="rs-panel" id="rs-${safeId}" style="display:none">
          <div class="rs-panel-title">📅 Reschedule Appointment</div>
          <div class="rs-row">
            <label class="rs-label">New Date</label>
            <input type="date" class="rs-date-input" id="rs-date-${safeId}" min="${today}">
          </div>
          <div class="rs-label" style="margin-top:12px;margin-bottom:6px">New Time</div>
          <div class="rs-slots-grid">${slotBtns}</div>
          <div class="rs-actions">
            <button class="call-btn call-btn-outline" data-cid="${safeId}" onclick="toggleReschedulePanel(decodeURIComponent(this.dataset.cid))">Cancel</button>
            <button class="call-btn call-btn-primary" data-cid="${safeId}" onclick="confirmReschedule(decodeURIComponent(this.dataset.cid))">Confirm Reschedule</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function toggleCallReport(id) {
  const safeId = encodeURIComponent(String(id));
  const drawer = document.getElementById(`report-${safeId}`);
  if (!drawer) return;
  const isOpen = drawer.style.display !== 'none';
  drawer.style.display = isOpen ? 'none' : 'block';
  const card = document.getElementById(`call-${safeId}`);
  if (card) {
    const btn = card.querySelector('.call-btn-outline');
    if (btn) btn.textContent = isOpen ? t('viewReport') : 'Hide Report';
  }
}

function toggleReschedulePanel(id) {
  const safeId = encodeURIComponent(String(id));
  const panel = document.getElementById(`rs-${safeId}`);
  if (!panel) return;
  const isOpen = panel.style.display !== 'none';
  panel.style.display = isOpen ? 'none' : 'block';
}

function selectRescheduleSlot(btn) {
  const grid = btn.closest('.rs-slots-grid');
  if (!grid) return;
  grid.querySelectorAll('.rs-slot').forEach(s => s.classList.remove('selected'));
  btn.classList.add('selected');
}

async function confirmReschedule(id) {
  const call = callsData.find(c => String(c.id) === String(id));
  if (!call) return;

  const safeId = encodeURIComponent(String(id));
  const dateInput = document.getElementById(`rs-date-${safeId}`);
  const slotBtn   = document.querySelector(`#rs-${safeId} .rs-slot.selected`);

  if (!dateInput?.value) { showToast('Please select a new date.', 'warn'); return; }
  if (!slotBtn)          { showToast('Please select a new time.', 'warn'); return; }

  const d = new Date(dateInput.value);
  const newDate = dateInput.value; // ISO YYYY-MM-DD
  const newTime = slotBtn.textContent.trim();

  call.date = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  call.time = newTime;

  // Save to API (skip for demo entries)
  if (!String(id).startsWith('demo-')) {
    apiCall('PATCH', `/api/appointments/${id}/reschedule`, { date: newDate, time: newTime }).catch(() => {});
  }

  showToast('✅ Appointment rescheduled successfully!');
  renderCallsList(activeCallFilter);
  _syncAppointmentsData();
}

function rebookCall(id) {
  const call = callsData.find(c => String(c.id) === String(id));
  if (!call) return;

  // Find the doctor in doctorsData by name match
  const doc = doctorsData.find(d => d.name === call.doctorName);
  if (doc) {
    openDoctorProfile(doc.id);
  } else {
    // Fallback: go to doctors page to find another
    showPage('page-doctors');
  }
}

/* ═══ VITALS PAGE ═══ */
function renderVitals() {
  const grid = document.getElementById('vitalsGrid');
  if (!grid) return;
  const maxVal = arr => Math.max(...arr);
  grid.innerHTML = vitalsData.map(v => {
    const max = maxVal(v.trend);
    const bars = v.trend.map(val => {
      const pct = Math.round((val / max) * 100);
      return `<div class="vital-bar" style="height:${pct}%"></div>`;
    }).join('');
    return `
      <div class="vital-card">
        <div class="vital-card-top">
          <div class="vital-icon" style="background:${v.color};color:${v.iconColor}">${v.icon}</div>
          <span class="vital-status-badge" style="background:${v.statusColor}20;color:${v.statusColor}">${v.status}</span>
        </div>
        <div class="vital-label">${v.label}</div>
        <div class="vital-value">${v.value} <span class="vital-unit">${v.unit}</span></div>
        <div class="vital-trend-bars">${bars}</div>
        <div class="vital-trend-label">7-day trend</div>
      </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════════════════════
   PROFILE PAGE
═══════════════════════════════════════════════════════════ */

let profileData = {
  phone: '', city: '', blood: '', weight: '', height: '',
  allergies: [], emergencyContacts: [], avatar: ''
};

// Load ALL user data from API on login
async function loadProfileFromAPI() {
  if (!currentUser) return;
  const [uRes, hRes, remRes, apptRes] = await Promise.all([
    apiCall('GET', '/api/users/me'),
    apiCall('GET', '/api/users/me/health'),
    apiCall('GET', '/api/reminders'),
    apiCall('GET', '/api/appointments'),
  ]);

  if (uRes.ok && uRes.data.user) {
    const u = uRes.data.user;
    currentUser.name  = u.name  || currentUser.name;
    currentUser.email = u.email || currentUser.email;
    currentUser.initial = (currentUser.name || 'U')[0].toUpperCase();
    profileData.phone  = u.phone || '';
    profileData.city   = u.city  || '';
    profileData.avatar = u.avatar || '';
    profileData.emergencyContacts = u.emergencyContacts || [];
    updateNavUser();
  }

  if (hRes.ok && hRes.data.health) {
    const h = hRes.data.health;
    profileData.blood    = h.bloodType || '';
    profileData.weight   = h.weight   ? String(h.weight)  : '';
    profileData.height   = h.height   ? String(h.height)  : '';
    profileData.allergies = h.allergies || [];
  }

  if (remRes.ok && remRes.data.reminders) {
    remindersData = remRes.data.reminders.map(r => ({
      id:        r._id,
      name:      r.medicineName,
      emoji:     r.emoji,
      color:     r.color,
      detail_en: r.detail_en,
      detail_ar: r.detail_ar,
      detail_tr: r.detail_tr,
      times:     r.times,
      active:    r.active,
    }));
    renderReminderList();
    renderHomeReminders();
  }

  if (apptRes.ok && apptRes.data.appointments) {
    _mapAppointmentsFromAPI(apptRes.data.appointments);
    renderCallsList(activeCallFilter);
    _syncAppointmentsData();
  }

  renderProfilePage();
}

function _mapAppointmentsFromAPI(appts) {
  callsData = appts.map(a => {
    const doc = doctorsData.find(d => d._id === String(a.doctorId) || d.name === a.doctorName);
    const dateLabel = _formatDateLabel(a.date);
    return {
      id:         a._id,
      doctorName: a.doctorName || '—',
      specialty:  a.specialty  || '—',
      photo:      doc ? doc.photo : '',
      date:       dateLabel,
      time:       a.time,
      type:       'Video Call',
      status:     a.status === 'pending' ? 'upcoming' : (a.status === 'confirmed' ? 'upcoming' : a.status),
      report:     _mapReport(a.report),
    };
  });

  // If no completed appointment exists, inject a demo one with a full doctor report
  const hasCompleted = callsData.some(c => c.status === 'completed');
  if (!hasCompleted) {
    const demoDoc = doctorsData[1]; // Dr. Sara Al-Noor — Cardiologist
    callsData.push({
      id:         'demo-completed-1',
      doctorName: demoDoc ? demoDoc.name : 'Dr. Sara Al-Noor',
      specialty:  demoDoc ? getDoctorSpec(demoDoc) : 'Cardiologist',
      photo:      demoDoc ? demoDoc.photo : '',
      date:       'Apr 15, 2026',
      time:       '10:00 AM',
      type:       'Video Call',
      status:     'completed',
      report: {
        diagnosis:    'Mild hypertension with vitamin D deficiency. Overall cardiovascular health is stable.',
        prescription: [
          'Omega-3 Fish Oil — 1 capsule daily with meal',
          'Vitamin D3 1000IU — 1 tablet daily in the morning',
          'Paracetamol 500mg — As needed for headache (max 3/day)',
        ],
        notes: 'Reduce sodium intake. Avoid caffeine after 6 PM. Follow-up in 4 weeks. Exercise 30 min/day.',
      },
    });
  }
}

function _formatDateLabel(dateStr) {
  if (!dateStr) return '—';
  // If already formatted (e.g. "Apr 20, 2026"), return as-is
  if (/[A-Za-z]/.test(dateStr)) return dateStr;
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function _mapReport(report) {
  if (!report || !report.diagnosis) return null;
  return {
    diagnosis:    report.diagnosis,
    prescription: report.medications ? report.medications.map(m => `${m.name} — ${m.dose}`) : (report.recommendations || []),
    notes:        report.doctorNotes || report.recommendations?.join('; ') || '',
  };
}

function _syncAppointmentsData() {
  appointmentsData = callsData
    .filter(c => c.status === 'upcoming')
    .map(c => ({ id: c.id, doctor: c.doctorName, date: c.date, time: c.time, type: 'Consultation', status: 'upcoming' }));
}

function renderProfilePage() {
  if (!currentUser) return;
  const initial = (currentUser.name || 'U')[0].toUpperCase();
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || '—'; };

  // Hero
  set('profileName', currentUser.name);
  set('profileCity', profileData.city);

  // Contact card
  set('profileEmail',       currentUser.email);
  set('profilePhone',       profileData.phone);
  set('profileCityContact', profileData.city);

  // Vitals chips
  set('profileBlood',  profileData.blood);
  set('profileWeight', profileData.weight ? profileData.weight + ' kg' : '—');
  set('profileHeight', profileData.height ? profileData.height + ' cm' : '—');

  // Avatar
  _updateAvatarUI(initial, profileData.avatar);

  // Allergies
  renderAllergyTags();

  // Emergency contacts
  renderEmergencyContacts();

  // Topbar sync
  const topbarAvatar = document.getElementById('appTopbarAvatar');
  const topbarName   = document.getElementById('appTopbarName');
  if (topbarAvatar) {
    if (profileData.avatar) {
      topbarAvatar.style.backgroundImage = `url(${profileData.avatar})`;
      topbarAvatar.style.backgroundSize = 'cover';
      topbarAvatar.textContent = '';
    } else {
      topbarAvatar.style.backgroundImage = '';
      topbarAvatar.textContent = initial;
    }
  }
  if (topbarName) topbarName.textContent = (currentUser.name || 'User').split(' ')[0];
}

function _updateAvatarUI(initial, avatarUrl) {
  const avatarEl   = document.getElementById('profileAvatar');
  const avatarImg  = document.getElementById('profileAvatarImg');
  const avatarSide = document.getElementById('profileAvatarSide');
  if (avatarUrl) {
    if (avatarImg)  { avatarImg.src = avatarUrl; avatarImg.style.display = 'block'; }
    if (avatarEl)   avatarEl.style.display = 'none';
  } else {
    if (avatarImg)  avatarImg.style.display = 'none';
    if (avatarEl)   { avatarEl.style.display = 'flex'; avatarEl.textContent = initial; }
  }
  if (avatarSide) avatarSide.textContent = initial;
}

// ── Avatar Upload ──
function handleAvatarUpload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { showToast('Image must be under 2 MB.', 'warn'); return; }
  const reader = new FileReader();
  reader.onload = async e => {
    const base64 = e.target.result;
    profileData.avatar = base64;
    _updateAvatarUI((currentUser.name || 'U')[0].toUpperCase(), base64);
    // Save to API
    await apiCall('PATCH', '/api/users/me', { avatar: base64 });
    showToast('✅ Photo updated!');
  };
  reader.readAsDataURL(file);
}

// ── Allergies ──
function renderAllergyTags() {
  const container = document.getElementById('allergyTagsList');
  if (!container) return;
  if (!profileData.allergies.length) {
    container.innerHTML = '<span style="font-size:13px;color:var(--muted)">No allergies added</span>';
    return;
  }
  container.innerHTML = profileData.allergies.map((a, i) => `
    <span class="up-allergy-tag" style="display:inline-flex;align-items:center;gap:4px">
      ${escapeHtml(a)}
      <button onclick="removeAllergy(${i})" style="background:none;border:none;cursor:pointer;color:#ef4444;font-size:14px;line-height:1;padding:0 2px" title="Remove">✕</button>
    </span>`).join('');
}

function showAddAllergy()  { document.getElementById('allergyAddRow').style.display = 'flex'; document.getElementById('allergyInput').focus(); }
function hideAddAllergy()  { document.getElementById('allergyAddRow').style.display = 'none'; document.getElementById('allergyInput').value = ''; }

async function addAllergy() {
  const val = document.getElementById('allergyInput').value.trim();
  if (!val) return;
  profileData.allergies.push(val);
  hideAddAllergy();
  renderAllergyTags();
  await _saveHealthData();
  showToast('Allergy added ✅');
}

async function removeAllergy(idx) {
  profileData.allergies.splice(idx, 1);
  renderAllergyTags();
  await _saveHealthData();
}

// ── Emergency Contacts ──
function renderEmergencyContacts() {
  const container = document.getElementById('emergencyList');
  if (!container) return;
  if (!profileData.emergencyContacts.length) {
    container.innerHTML = '<span style="font-size:13px;color:var(--muted)">No contacts added</span>';
    return;
  }
  container.innerHTML = profileData.emergencyContacts.map((ec, i) => `
    <div class="up-emergency-card">
      <span class="material-symbols-outlined up-emergency-icon">person</span>
      <div style="flex:1">
        <div class="up-emergency-name">${escapeHtml(ec.name)}</div>
        <div class="up-emergency-sub">${escapeHtml(ec.relation)} &bull; ${escapeHtml(ec.phone)}</div>
      </div>
      <div style="display:flex;gap:6px;margin-left:auto">
        <button class="up-add-tag-btn" onclick="editEmergency(${i})" title="Edit">✏️</button>
        <button class="up-add-tag-btn" style="color:#ef4444" onclick="removeEmergency(${i})" title="Remove">✕</button>
      </div>
    </div>`).join('');
}

function showAddEmergency() {
  document.getElementById('ecName').value = '';
  document.getElementById('ecRelation').value = '';
  document.getElementById('ecPhone').value = '';
  document.getElementById('ecEditId').value = '';
  document.getElementById('emergencyForm').style.display = 'block';
}
function hideEmergencyForm() { document.getElementById('emergencyForm').style.display = 'none'; }

function editEmergency(idx) {
  const ec = profileData.emergencyContacts[idx];
  document.getElementById('ecName').value     = ec.name;
  document.getElementById('ecRelation').value = ec.relation;
  document.getElementById('ecPhone').value    = ec.phone;
  document.getElementById('ecEditId').value   = idx;
  document.getElementById('emergencyForm').style.display = 'block';
  document.getElementById('ecName').focus();
}

async function saveEmergencyContact() {
  const name     = document.getElementById('ecName').value.trim();
  const relation = document.getElementById('ecRelation').value.trim();
  const phone    = document.getElementById('ecPhone').value.trim();
  if (!name || !phone) { showToast('Name and phone are required.', 'warn'); return; }

  const editIdx = document.getElementById('ecEditId').value;
  if (editIdx !== '') {
    profileData.emergencyContacts[parseInt(editIdx)] = { name, relation, phone };
  } else {
    profileData.emergencyContacts.push({ name, relation, phone });
  }
  hideEmergencyForm();
  renderEmergencyContacts();
  await _saveUserData({});
  showToast('Emergency contact saved ✅');
}

async function removeEmergency(idx) {
  profileData.emergencyContacts.splice(idx, 1);
  renderEmergencyContacts();
  await _saveUserData({});
}

// ── Save helpers ──
async function _saveHealthData() {
  await apiCall('PATCH', '/api/users/me/health', {
    bloodType:  profileData.blood,
    weight:     profileData.weight ? Number(profileData.weight) : null,
    height:     profileData.height ? Number(profileData.height) : null,
    allergies:  profileData.allergies,
  });
}

async function _saveUserData(extra) {
  await apiCall('PATCH', '/api/users/me', {
    name:  currentUser.name,
    email: currentUser.email,
    phone: profileData.phone,
    city:  profileData.city,
    emergencyContacts: profileData.emergencyContacts,
    ...extra,
  });
}

// ── Toggle edit form ──
function toggleEditProfile() {
  const form = document.getElementById('editProfileForm');
  const btn  = document.getElementById('editProfileBtn');
  if (!form) return;
  const opening = form.style.display === 'none';
  form.style.display = opening ? 'block' : 'none';
  if (btn) btn.innerHTML = opening
    ? '<span class="material-symbols-outlined" style="font-size:16px">close</span> Cancel'
    : '<span class="material-symbols-outlined" style="font-size:16px">edit</span> Edit Profile';

  if (opening) {
    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
    setVal('editName',   currentUser.name);
    setVal('editEmail',  currentUser.email);
    setVal('editPhone',  profileData.phone);
    setVal('editCity',   profileData.city);
    setVal('editBlood',  profileData.blood);
    setVal('editWeight', profileData.weight);
    setVal('editHeight', profileData.height);
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ── Save profile changes ──
async function saveProfileChanges() {
  const get = id => document.getElementById(id)?.value.trim() || '';
  const name   = get('editName');
  const email  = get('editEmail');
  if (!name)  { showToast('Name cannot be empty.', 'warn'); return; }
  if (!email) { showToast('Email cannot be empty.', 'warn'); return; }

  profileData.phone  = get('editPhone');
  profileData.city   = get('editCity');
  profileData.blood  = get('editBlood');
  profileData.weight = get('editWeight');
  profileData.height = get('editHeight');

  currentUser.name  = name;
  currentUser.email = email;
  currentUser.initial = name[0].toUpperCase();

  // Save to localStorage for fast restore
  const saved = JSON.parse(localStorage.getItem('ml_user') || '{}');
  localStorage.setItem('ml_user', JSON.stringify({ ...saved, name, email }));

  const btn = document.querySelector('#editProfileForm .up-btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Saving…'; }

  await Promise.all([
    _saveUserData({ name, email }),
    _saveHealthData(),
  ]);

  if (btn) { btn.disabled = false; btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:16px;vertical-align:middle">save</span> Save Changes'; }

  renderProfilePage();
  updateNavUser();
  toggleEditProfile();
  showToast('✅ Profile saved successfully!');
}

/* ═══════════════════════════════════════════════════════════
   INITIALISATION
═══════════════════════════════════════════════════════════ */

async function initApp() {
  applyI18n();

  // Restore session from localStorage + verify with server
  await restoreSession();

  // Render filter tabs
  renderDoctorFilterTabs();
  renderMedFilterTabs();

  // Render static data immediately (fast paint)
  renderDoctorsGrid(doctorsData);
  renderMedGrid(medsData);
  renderReminderList();
  renderCallsList('all');
  renderVitals();
  renderProfilePage();
  initChat();

  // Load fresh data from API in background (non-blocking)
  loadDoctorsFromAPI();

  // Routing — decide what page to show
  if (currentUser) {
    renderHomeWidgets();
    const hash = location.hash;
    const doctorMatch = hash.match(/^#\/doctor\/(\d+)$/);
    if (doctorMatch) {
      openDoctorProfile(parseInt(doctorMatch[1]), false);
    } else if (hash === '#/home') {
      showPage('page-home', false);
    } else if (hash === '#/pharmacy') {
      showPage('page-pharmacy', false);
    } else if (hash === '#/chat') {
      showPage('page-chat', false);
    } else {
      showPage('page-home');
    }
  } else {
    showPage('page-landing');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initApp();

  // Hash routing — handle browser back/forward
  window.addEventListener('popstate', function() {
    const hash = location.hash;
    const doctorMatch = hash.match(/^#\/doctor\/(\d+)$/);
    if (doctorMatch) {
      openDoctorProfile(parseInt(doctorMatch[1]), false);
    } else if (hash === '#/doctors') {
      showPage('page-doctors', false);
    } else if (hash === '#/home') {
      showPage('page-home', false);
    } else if (hash === '#/pharmacy') {
      showPage('page-pharmacy', false);
    } else if (hash === '#/chat') {
      showPage('page-chat', false);
    } else {
      showPage('page-landing', false);
    }
  });

  // Wire up doctor search
  const docSearchInput = document.querySelector('#page-doctors .search-input');
  if (docSearchInput) docSearchInput.addEventListener('input', e => filterDoctors(e.target.value));

  // Wire up pharmacy search
  const medSearchInput = document.querySelector('#page-pharmacy .search-input');
  if (medSearchInput) medSearchInput.addEventListener('input', e => filterMeds(e.target.value));

  // Set default EN lang button active
  const langEN = document.getElementById('langEN');
  if (langEN) langEN.classList.add('active');

  // Cart bar keyboard
  const cartBar = document.getElementById('cartBar');
  if (cartBar) cartBar.addEventListener('keypress', e => { if (e.key === 'Enter' || e.key === ' ') openCartModal(); });
});
