const URLAddress = 'http://localhost:3030'

export function getFirstThree() {
    return fetch(`${URLAddress}/data/games?sortBy=_createdOn%20desc&distinct=category`)
        .then(response => response.json())
        .catch((err) => console.log(err))
}

