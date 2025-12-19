// Language Toggle
const langToggle = document.getElementById('lang-toggle');
const langText = langToggle.querySelector('.lang-text');
const translatable = document.querySelectorAll('[data-ar][data-en]');
const placeholders = document.querySelectorAll('[data-en-placeholder]');

let currentLang = 'ar';

langToggle.addEventListener('click', () => {
    if (currentLang === 'ar') {
        translatable.forEach(el => el.textContent = el.dataset.en);
        placeholders.forEach(el => el.placeholder = el.dataset.enPlaceholder || el.placeholder);
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        langText.textContent = 'EN';
        currentLang = 'en';
    } else {
        translatable.forEach(el => el.textContent = el.dataset.ar);
        placeholders.forEach(el => el.placeholder = el.getAttribute('placeholder'));
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
        langText.textContent = 'AR';
        currentLang = 'ar';
    }
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Fade In on Scroll
const fadeElems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

fadeElems.forEach(el => observer.observe(el));

// Header Scroll Effect
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 100);
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    parallax.style.backgroundPositionY = `${speed}px`;
});

// Smooth Scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navList.classList.remove('active');
        hamburger.classList.remove('active');
    });
});
