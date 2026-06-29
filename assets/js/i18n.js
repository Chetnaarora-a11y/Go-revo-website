// assets/js/i18n.js
// ─────────────────────────────────────────────────────────────────────────────
// Internal language switcher – English / Hindi
// Works by finding elements with [data-i18n] attributes AND by selector map.
// No external APIs. No page reload. Persists in localStorage.
// ─────────────────────────────────────────────────────────────────────────────

const translations = {
  en: {
    /* ── Navigation ─────────────────────────────────────────────────────── */
    nav_home: "Home",
    nav_residential: "Residential Solar",
    nav_commercial: "Commercial Solar",
    nav_projects: "Projects",
    nav_calculator: "Solar Calculator",
    nav_about: "About",
    nav_blog: "Blog",
    nav_contact: "Contact",
    nav_services: "Services",
    nav_faq: "FAQ",
    nav_pricing: "Pricing",
    nav_history: "Our History",

    /* ── Hero ────────────────────────────────────────────────────────────── */
    hero_title: "Solar Power Made Simple",
    hero_subtitle: "Save money & the planet with Go Revo",
    btn_get_quote: "Get Free Quote",

    /* ── Sections ───────────────────────────────────────────────────────── */
    section_why_gorevo: "Why Choose GoRevo?",
    section_our_services: "Our Services",
    section_testimonials: "What Our Customers Say",
    section_blog: "Recent Articles",
    section_contact: "Contact Us",

    /* ── Calculator ─────────────────────────────────────────────────────── */
    calc_title: "Solar Savings Calculator",
    calc_name: "Full Name",
    calc_phone: "Phone Number",
    calc_pin: "PIN Code",
    calc_bill: "Monthly Electricity Bill",
    calc_submit: "CHECK MY EXACT SAVINGS",
    calc_desc: "Check your estimated system size, lifetime savings, and government subsidy instantly.",

    /* ── Footer ─────────────────────────────────────────────────────────── */
    footer_about: "About GoRevo",
    footer_links: "Quick Links",
    footer_contact: "Contact",
    footer_newsletter: "Newsletter",
    footer_newsletter_placeholder: "Enter your email address",
    footer_copyright: "© 2024 GoRevo. All rights reserved.",

    /* ── Contact / Forms ────────────────────────────────────────────────── */
    form_name_placeholder: "Full Name",
    form_phone_placeholder: "Phone Number",
    form_email_placeholder: "Email Address",
    form_message_placeholder: "Your Message",
    form_submit: "Send Message",
    form_pincode_placeholder: "Pincode",

    /* ── About ──────────────────────────────────────────────────────────── */
    about_heading: "About GoRevo",
    about_subtitle: "Premium Solar Solutions for India",

    /* ── FAQ ────────────────────────────────────────────────────────────── */
    faq_heading: "Frequently Asked Questions",

    /* ── Pricing ────────────────────────────────────────────────────────── */
    pricing_heading: "Pricing Plans",
    pricing_subtitle: "Choose the right plan for your home",

    /* ── 404 ────────────────────────────────────────────────────────────── */
    error_heading: "Page Not Found",
    error_subtitle: "The page you are looking for does not exist.",
    error_btn: "Go Back Home"
  },

  hi: {
    /* ── Navigation ─────────────────────────────────────────────────────── */
    nav_home: "होम",
    nav_residential: "रेसिडेंशियल सोलर",
    nav_commercial: "कमर्शियल सोलर",
    nav_projects: "परियोजनाएँ",
    nav_calculator: "सोलर कैलकुलेटर",
    nav_about: "हमारे बारे में",
    nav_blog: "ब्लॉग",
    nav_contact: "संपर्क",
    nav_services: "सेवाएँ",
    nav_faq: "अक्सर पूछे जाने वाले सवाल",
    nav_pricing: "मूल्य निर्धारण",
    nav_history: "हमारा इतिहास",

    /* ── Hero ────────────────────────────────────────────────────────────── */
    hero_title: "सौर ऊर्जा अब सरल है",
    hero_subtitle: "Go Revo के साथ बिजली बिल बचाएँ और ग्रह बचाएँ",
    btn_get_quote: "मुफ़्त कोटेशन पाएँ",

    /* ── Sections ───────────────────────────────────────────────────────── */
    section_why_gorevo: "GoRevo क्यों चुनें?",
    section_our_services: "हमारी सेवाएँ",
    section_testimonials: "हमारे ग्राहक क्या कहते हैं",
    section_blog: "हाल के लेख",
    section_contact: "हमसे संपर्क करें",

    /* ── Calculator ─────────────────────────────────────────────────────── */
    calc_title: "सोलर बचत कैलकुलेटर",
    calc_name: "पूरा नाम",
    calc_phone: "फ़ोन नंबर",
    calc_pin: "पिन कोड",
    calc_bill: "मासिक बिजली बिल",
    calc_submit: "मेरी सटीक बचत देखें",
    calc_desc: "अपने अनुमानित सिस्टम आकार, जीवन‑भर बचत और सरकारी सब्सिडी तुरंत जांचें।",

    /* ── Footer ─────────────────────────────────────────────────────────── */
    footer_about: "GoRevo के बारे में",
    footer_links: "त्वरित लिंक",
    footer_contact: "संपर्क",
    footer_newsletter: "न्यूज़लेटर",
    footer_newsletter_placeholder: "अपना ईमेल पता दर्ज करें",
    footer_copyright: "© 2024 GoRevo. सभी अधिकार सुरक्षित।",

    /* ── Contact / Forms ────────────────────────────────────────────────── */
    form_name_placeholder: "पूरा नाम",
    form_phone_placeholder: "फ़ोन नंबर",
    form_email_placeholder: "ईमेल पता",
    form_message_placeholder: "आपका संदेश",
    form_submit: "संदेश भेजें",
    form_pincode_placeholder: "पिन कोड",

    /* ── About ──────────────────────────────────────────────────────────── */
    about_heading: "GoRevo के बारे में",
    about_subtitle: "भारत के लिए प्रीमियम सोलर समाधान",

    /* ── FAQ ────────────────────────────────────────────────────────────── */
    faq_heading: "अक्सर पूछे जाने वाले सवाल",

    /* ── Pricing ────────────────────────────────────────────────────────── */
    pricing_heading: "मूल्य योजनाएँ",
    pricing_subtitle: "अपने घर के लिए सही योजना चुनें",

    /* ── 404 ────────────────────────────────────────────────────────────── */
    error_heading: "पृष्ठ नहीं मिला",
    error_subtitle: "जिस पृष्ठ को आप खोज रहे हैं वह मौजूद नहीं है।",
    error_btn: "होम पर वापस जाएँ"
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// Core: apply a language to every tagged element and every mapped selector
// ─────────────────────────────────────────────────────────────────────────────
function applyTranslations(lang) {
  var dict = translations[lang] || translations.en;

  // 1) data-i18n attributes (text content)
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var txt = dict[key];
    if (!txt) return;
    if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') &&
        el.getAttribute('placeholder') !== null) {
      el.placeholder = txt;
    } else if (el.tagName === 'INPUT' &&
               (el.type === 'submit' || el.type === 'button')) {
      el.value = txt;
    } else {
      el.textContent = txt;
    }
  });

  // 2) data-i18n-placeholder attributes (for inputs where the label also has data-i18n)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    var txt = dict[key];
    if (txt) el.placeholder = txt;
  });

  // 3) Update <html lang="…">
  document.documentElement.lang = lang;

  // 4) Persist
  localStorage.setItem('siteLang', lang);

  // 5) Sync active state on toggle buttons
  updateLangButtons(lang);
}

// ─────────────────────────────────────────────────────────────────────────────
// Visual: highlight the active language button
// ─────────────────────────────────────────────────────────────────────────────
function updateLangButtons(lang) {
  var buttons = document.querySelectorAll('.lang-option-new');
  buttons.forEach(function(btn) {
    var btnLang = btn.textContent.trim().toLowerCase();
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Init: called once DOM is ready
// ─────────────────────────────────────────────────────────────────────────────
function initI18n() {
  // Load saved language (default English)
  var saved = localStorage.getItem('siteLang') || 'en';
  applyTranslations(saved);

  // Wire up EN / HI toggle buttons by class (they have no IDs)
  document.querySelectorAll('.lang-option-new').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var chosen = btn.textContent.trim().toLowerCase(); // "en" or "hi"
      applyTranslations(chosen);
    });
  });
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
