const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    const target = counter.getAttribute('data-target')

    const updateCounter = () => {
        const count = +counter.innerText
        const increment = target / 200

        if (count < target) {
            counter.innerText = Math.ceil(count + increment)
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})