const background = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let load = 0;
let int = setInterval(blurring, 20);

function blurring() {
    load++;

    if(load > 99) {
        clearInterval(int);
    }

    text.innerText = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min)/(in_max - in_min) * (out_max - out_min) + out_min;
}