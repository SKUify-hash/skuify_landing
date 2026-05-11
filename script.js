const translations = {
  ru: {
    nav_how: 'Как работает',
    nav_examples: 'Примеры',
    nav_cta: 'Попробовать',
    hero_badge: 'Uzum Market · Яндекс Маркет',
    hero_title: 'Карточки товаров,<br>которые <em>продают</em>',
    hero_sub: 'Отправьте фото товара — бот сам сделает красивые карточки для маркетплейса',
    cta_try: 'Попробовать бесплатно',
    steps_title: 'Как это работает',
    step1_title: 'Отправьте фото товара',
    step1_desc: 'Просто отправьте фото товара боту — как другу в Telegram. Никакого сложного редактора, никаких настроек.',
    step2_title: 'ИИ берёт работу на себя',
    step2_desc: 'За 2 минуты бот определяет товар, придумывает продающие тексты, подбирает компоновку и собирает карточки.',
    step3_title: 'Забирайте и публикуйте',
    step3_desc: 'Получите 3–5 готовых карточек прямо в чат. Скачивайте и загружайте на маркетплейс — всё уже в нужном формате.',
    gallery_title: 'Что вы получаете',
    cta_free: 'Попробовать бесплатно',
    cta_free_badge: '🎁 Первые 2 генерации — бесплатно',
    cta_title: 'Готовы попробовать?<br>Это бесплатно',
    cta_sub: 'Без регистрации. Результат — за 2 минуты.',
    cta_open: 'Открыть бота в Telegram',
    footer_link: 'Telegram-бот',
    footer_offer: 'Оферта',
    footer_privacy: 'Политика конфиденциальности',
  },
  uz: {
    nav_how: 'Qanday ishlaydi',
    nav_examples: 'Namunalar',
    nav_cta: 'Sinab ko\'rish',
    hero_badge: 'Uzum Market · Yandex Market',
    hero_title: 'Sotuvni oshiradigan<br>tovar <em>kartochkalari</em>',
    hero_sub: 'Tovarni surating — bot marketplace uchun chiroyli kartochkalar yaratadi',
    cta_try: 'Bepul sinab ko\'rish',
    steps_title: 'Qanday ishlaydi',
    step1_title: 'Tovar rasmini yuboring',
    step1_desc: 'Tovar rasmini botga yuboring — xuddi do\'stingizga Telegramda yuborgandek. Hech qanday murakkab sozlash kerak emas.',
    step2_title: 'AI ishni o\'z zimmasiga oladi',
    step2_desc: '2 daqiqada bot tovarni aniqlab, sotuvchi matnlar yozadi, joylashuvni tanlaydi va kartochkalarni tayyorlaydi.',
    step3_title: 'Oling va joylang',
    step3_desc: 'Chatga 3–5 ta tayyor kartochka keladi. Yuklab oling va to\'g\'ridan-to\'g\'ri marketplacega joylang — format allaqachon to\'g\'ri.',
    gallery_title: 'Siz nima olasiz',
    cta_free: 'Bepul sinab ko\'rish',
    cta_free_badge: '🎁 Birinchi 2 ta generatsiya — bepul',
    cta_title: 'Sinab ko\'rishga tayyormisiz?<br>Bu bepul',
    cta_sub: 'Ro\'yxatdan o\'tmasdan. Natija — 2 daqiqada.',
    cta_open: 'Telegramda botni ochish',
    footer_link: 'Telegram-bot',
    footer_offer: 'Oferta',
    footer_privacy: 'Maxfiylik siyosati',
  },
};

// Keys whose values contain HTML tags — use innerHTML
const HTML_KEYS = new Set(['hero_title', 'cta_title']);

let currentLang = 'ru';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    if (HTML_KEYS.has(key)) el.innerHTML = t[key];
    else el.textContent = t[key];
  });

  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// Burger menu
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

// Step icons — fade in on scroll
const stepIcons = document.querySelectorAll('.step-icon');
const iconObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const idx = Array.from(stepIcons).indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), idx * 150);
      iconObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

stepIcons.forEach(icon => iconObserver.observe(icon));
