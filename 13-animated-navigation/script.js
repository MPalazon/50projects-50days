const button = document.querySelector('.icon');

button.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    button.classList.toggle('active');
});