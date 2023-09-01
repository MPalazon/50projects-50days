window.addEventListener('keydown', function(e) {
    const all = document.querySelector('.all')

    let key = document.createElement('div')
    let keyCode = document.createElement('div')
    let code = document.createElement('div')

    let spanKey = document.createElement('span')
    spanKey.textContent = 'event.key'
    let spanKeyCode = document.createElement('span')
    spanKeyCode.textContent = 'event.keyCode'
    let spanCode = document.createElement('span')
    spanCode.textContent = 'event.code'

    this.document.querySelectorAll('.container').forEach(function(e) {
        e.remove() 
    })

    key.classList.add('container')
    keyCode.classList.add('container');
    code.classList.add('container');

    key.textContent = e.key === ' ' ? 'Space' : e.key
    keyCode.textContent = e.keyCode
    code.textContent = e.code

    key.appendChild(spanKey)
    keyCode.appendChild(spanKeyCode)
    code.appendChild(spanCode)

    all.appendChild(key)
    all.appendChild(keyCode)
    all.appendChild(code)
})