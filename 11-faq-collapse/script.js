const faqs = document.querySelectorAll('.faq')
const buttons = document.querySelectorAll('.faq button')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
        faq.querySelector('.faq-answer').classList.toggle('active')
        
        buttons.forEach(button => {
            if(button.parentElement === faq)
                button.classList.toggle('open')
        })
    });
})