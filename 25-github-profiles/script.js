const GITHUB_USER_API_URL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const searchInput = document.getElementById('search')


function getUser(username) {
    fetch(GITHUB_USER_API_URL + username)
        .then(res => res.json())
        .then(data => {
            if (data.message === 'Not Found') {
                createErrorCard('No profile with this username')
            } else {
                createUserCard(data)
                getRepos(username)
            }
        })
        .catch(err => console.log(err))
}

function getRepos(username) {
    fetch(GITHUB_USER_API_URL + username + '/repos')
        .then(res => res.json())
        .then(data => {
            addReposToCard(data)
        }) 
        .catch(err => console.log(err))
}

function createUserCard(user) {
    const cardUser =
        `<div class="user">
            <div>
                <img src="${user.avatar_url}" alt="Foto de perfil del usuario ${user.name} en GitHub" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers} Followers</li>
                    <li>${user.following} Following</li>
                    <li>${user.public_repos} Repos</li>
                </ul>
                <div id="repos"></div>
        </div>`
        
    document.querySelector('.profile').innerHTML = cardUser
}

function createErrorCard(message) {
    const cardError =
        `<div class="user">
            <p>${message}</p>
        </div>`

    document.querySelector('.profile').innerHTML = cardError
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')

    repos.slice(0, 5).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const username = searchInput.value
    
    if (username) {
        getUser(username)
        searchInput.value = ''
    }
})