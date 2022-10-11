
const URL = 'http://localhost:3030'

async function getHomeGames() {
    let data = await fetch(`${URL}/data/games`);
    if (data.status === 200) {
        return data.json();
    } else {
        throw new Error(`Missing data`)
    }
}

async function getCatalogeGames() {
    const data = await fetch(`${URL}/data/games?sortBy=_createdOn%20desc`);
    if (data.status === 200) {
        return data.json();
    } else {
        throw new Error(`Missing data`);
    }
}

async function getElementById(id) {
    const data = await fetch(`${URL}/data/games/${id}`);
    if (data.status === 200) {
        return data.json();
    } else {
        throw new Error(`Missing data`)
    }
}

async function editPage(id, data) {
    console.log(id);
    console.log(data);
    const update = await fetch(`http://localhost:3030/data/games/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    console.log(update);
}

async function loginApi(authData) {
    const response = await fetch(`${URL}/users/login`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(authData)
    })
    return response.json();
}

export {
    getHomeGames,
    getElementById,
    getCatalogeGames,
    editPage,
    loginApi,
}