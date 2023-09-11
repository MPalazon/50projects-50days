const increaseBtn = document.getElementById('increaseBtn')
const decreaseBtn = document.getElementById('decreaseBtn')
const clearBtn = document.getElementById('clearBtn')
const penBtn = document.getElementById('penBtn')
const bucketBtn = document.getElementById('bucketBtn')

const sizeEl = document.getElementById('size')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const colorEl = document.getElementById('color')

let isPressed = false
let size = 20
colorEl.value = 'black'
let color = colorEl.value
let x = undefined
let y = undefined


const drawOnCanvas = () => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
    
    drawCircle(x, y)
}

const stopDrawOnCanvas = () => {
    isPressed = false

    x = undefined
    y = undefined
}


const moveDrawCanvas = (e) => {
    if (isPressed) {
        const x2 = e.clientX - 50
        const y2 = e.clientY - 90

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
}

const fillCanvas = () => {
    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = color
    ctx.fill()
}

increaseBtn.addEventListener('click', () => {
    size += 2
    if (size > 50) {
        size = 50
    }
    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 2
    if (size < 5) {
        size = 5
    }
    updateSizeOnScreen()
})

penBtn.addEventListener('click', () => {
    canvas.removeEventListener('click', fillCanvas)

    canvas.addEventListener('mousedown', drawOnCanvas)
    canvas.addEventListener('mouseup' ,stopDrawOnCanvas)
    canvas.addEventListener('mousemove', moveDrawCanvas)
})

bucketBtn.addEventListener('click', () => {
    canvas.removeEventListener('mousedown', drawOnCanvas)
    canvas.removeEventListener('mouseup' ,stopDrawOnCanvas)
    canvas.removeEventListener('mousemove',moveDrawCanvas)

   canvas.addEventListener('click', fillCanvas)
})

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

colorEl.addEventListener('change', (e) => {
    color = e.target.value
})

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
