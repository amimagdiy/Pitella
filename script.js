// Language Toggle - زر واحد
const langToggle = document.getElementById('lang-toggle');
const langText = langToggle.querySelector('.lang-text');
const translatable = document.querySelectorAll('[data-ar][data-en]');
const placeholders = document.querySelectorAll('[data-en-placeholder]');

let currentLang = 'ar'; // البداية عربي

langToggle.addEventListener('click', () => {
    if (currentLang === 'ar') {
        // غير للإنجليزي
        translatable.forEach(el => el.textContent = el.dataset.en);
        placeholders.forEach(el => el.placeholder = el.dataset.enPlaceholder || el.placeholder);
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        langText.textContent = 'EN';
        currentLang = 'en';
    } else {
        // رجع للعربي
        translatable.forEach(el => el.textContent = el.dataset.ar);
        placeholders.forEach(el => el.placeholder = el.getAttribute('placeholder'));
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
        langText.textContent = 'AR';
        currentLang = 'ar';
    }
});

// Hamburger Menu (نفس اللي فات)
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
});
