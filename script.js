// Language Switcher
const langAr = document.getElementById('lang-ar');
const langEn = document.getElementById('lang-en');
const translatable = document.querySelectorAll('[data-ar][data-en]');
const placeholders = document.querySelectorAll('[data-en-placeholder]');

langAr.addEventListener('click', () => {
    translatable.forEach(el => el.textContent = el.dataset.ar);
    placeholders.forEach(el => el.placeholder = el.getAttribute('placeholder'));
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    langAr.classList.add('active');
    langEn.classList.remove('active');
});

langEn.addEventListener('click', () => {
    translatable.forEach(el => el.textContent = el.dataset.en);
    placeholders.forEach(el => el.placeholder = el.dataset.enPlaceholder || el.placeholder);
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    langEn.classList.add('active');
    langAr.classList.remove('active');
});

// Hamburger
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Default Arabic
langAr.click();
