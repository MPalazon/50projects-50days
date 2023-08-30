let container = document.querySelector('.container');
let open = document.querySelector('.open-btn');
let close = document.querySelector('.close-btn');

open.addEventListener('click', () => {
    container.classList.add('show-nav');
});

close.addEventListener('click', () => {        
    container.classList.remove('show-nav');
});