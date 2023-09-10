const emptyContainers = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', () => {
    fill.classList.add('hold')
    setTimeout(() => {
        fill.classList.add('invisible')
    } , 0)
})

fill.addEventListener('dragend', () => {
    fill.classList.remove('hold','invisible')
})

emptyContainers.forEach((empty) => {
    empty.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    empty.addEventListener('dragenter', (e) => {
        e.preventDefault()
        empty.classList.add('hovered')
    })

    empty.addEventListener('dragleave', (e) => {
        empty.classList.remove('hovered')
    })

    empty.addEventListener('drop', (e) => {
        empty.classList.remove('hovered')
        empty.append(fill)
    })
})