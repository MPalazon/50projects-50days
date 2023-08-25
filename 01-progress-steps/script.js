let prev = document.getElementById('prev');
let next = document.getElementById('next');
let active = document.querySelector('.active');
let lineProgress = document.getElementById('line-progress');
let textProgress = document.getElementById('progress');

let currentActive = 1;
let width = 0;

if (currentActive === 1) {
    prev.disabled = true;
}

prev.addEventListener('click', () => {   
    currentActive--; 
    active.previousElementSibling.classList.add('active');
    active.classList.remove('active');

    updateCircles();
});

next.addEventListener('click', () => {
    currentActive++;
    active.nextElementSibling.classList.add('active');
    active.classList.remove('active');
    
    updateCircles();
});


function updateCircles (){
    let circles = document.querySelectorAll('.circle');
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    });
    
    lineProgress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    }
    else if (currentActive === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}
