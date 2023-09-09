const next = document.getElementById('nextBtn')
const prev = document.getElementById('prevBtn')
const slides = document.querySelectorAll('.slide')

next.addEventListener('click', () => {
  nextSlide()
})

prev.addEventListener('click', () => {
  prevSlide()
})

function nextSlide(){
    const active = document.querySelector('.active')
    active.classList.remove('active')
    if(active.nextElementSibling){
        active.nextElementSibling.classList.add('active')
        document.body.style.backgroundImage = active.nextElementSibling.style.backgroundImage
    } else {
        slides[0].classList.add('active')
        document.body.style.backgroundImage = slides[0].style.backgroundImage
    }

}

function prevSlide(){
    const active = document.querySelector('.active')
    active.classList.remove('active')
    if(active.previousElementSibling){
        active.previousElementSibling.classList.add('active')
        document.body.style.backgroundImage = active.previousElementSibling.style.backgroundImage
    } else {
        slides[slides.length - 1].classList.add('active')
        document.body.style.backgroundImage = slides[slides.length - 1].style.backgroundImage
    }

}
