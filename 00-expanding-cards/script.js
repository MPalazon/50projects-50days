let panels = document.querySelectorAll('.panel');

function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

function toggleActive() {
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActive();
            panel.classList.add('active');
        });
    });
}

toggleActive();