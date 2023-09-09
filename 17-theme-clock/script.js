const button = document.querySelector('.btn');
const html = document.querySelector('html');
const timeBlock = document.querySelector('.time');
const dateBlock = document.querySelector('.date');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.min');
const secondEl = document.querySelector('.sec');


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

button.addEventListener('click', (e) => {
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode 🌕';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode 🌞';
    }
})


function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`


    timeBlock.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`;
    dateBlock.innerHTML = `${days[day]}, ${months[month]} ` + `<span class="day">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()
setInterval(setTime, 1000)