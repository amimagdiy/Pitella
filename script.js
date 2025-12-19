// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submit (مؤقت - هيطبع في الكونسول)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('تم إرسال الرسالة! (في النسخة النهائية هيروح للإيميل)');
});
