/*
function createBox(){
    const box = document.createElement('div')
    const content = document.createElement('h2')

    box.classList.add('box')
    content.innerHTML = 'Content'
    box.appendChild(content)
    document.body.appendChild(box)
}
*/

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    let boxes = document.querySelectorAll('.box')
    const triggerBottom = window.innerHeight / 5 * 4

    // sería scrolling infinito si queremos
    //createBox()
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })

}