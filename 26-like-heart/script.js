const container = document.querySelector('.container')
const times = document.getElementById('counter')

container.addEventListener('dblclick', (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset


    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    container.appendChild(heart)
    setTimeout(() => {
        heart.remove()
    }, 800)

    times.innerHTML++
})


