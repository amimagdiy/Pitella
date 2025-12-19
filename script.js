// Language Switcher
const langAr = document.getElementById('lang-ar');
const langEn = document.getElementById('lang-en');
const translatable = document.querySelectorAll('[data-ar][data-en]');
const html = document.documentElement;

langAr.addEventListener('click', () => {
    translatable.forEach(el => el.textContent = el.dataset.ar);
    html.lang = 'ar';
    html.dir = 'rtl';
    langAr.classList.add('active');
    langEn.classList.remove('active');
});

langEn.addEventListener('click', () => {
    translatable.forEach(el => el.textContent = el.dataset.en);
    html.lang = 'en';
    html.dir = 'ltr';
    langEn.classList.add('active');
    langAr.classList.remove('active');
});

// Default Arabic
langAr.click();
