const landingLeft = document.querySelector('.split-left');
const landingRight = document.querySelector('.split-right');
const container = document.querySelector('.container');

landingLeft.addEventListener('mouseenter', () => {
  landingLeft.classList.add('hover-left');
})
landingLeft.addEventListener('mouseleave', () => {
  landingLeft.classList.remove('hover-left');
})

landingRight.addEventListener('mouseenter', () => {
  landingRight.classList.add('hover-right');
})
landingRight.addEventListener('mouseleave', () => {
    landingRight.classList.remove('hover-right');
})