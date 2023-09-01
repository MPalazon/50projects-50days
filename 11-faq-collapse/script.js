const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
        faq.querySelector('.faq-answer').classList.toggle('active');
    });
})