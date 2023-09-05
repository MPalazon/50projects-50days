const cups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('remained')
const percentage = document.getElementById('percentage')
const remained = document.querySelector('.cup')

cups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

updateBigCup()

function highlightCups(idx) {
    if (cups[idx].classList.contains('active') && !cups[idx].nextElementSibling.classList.contains('active')) {
        idx--;
    }

    cups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('active');
        } else {
            cup.classList.remove('active');
        }
    })
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.active').length
    const totalCups = cups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}