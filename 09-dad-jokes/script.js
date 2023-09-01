const URL_API_JOKE = 'https://icanhazdadjoke.com/'

const jokeElement = document.querySelector('.joke')
const jokeBtn = document.querySelector('.btn')
const p = document.createElement('p')

generateJoke()

jokeBtn.addEventListener('click', generateJoke)

function generateJoke() {
    const config = {
        headers: {
        Accept: 'application/json',
        },
    };
    
    fetch(URL_API_JOKE, config)
        .then((response) => response.json())
        .then((data) => {
            p.innerHTML = data.joke
            jokeElement.appendChild(p)
        });
    }