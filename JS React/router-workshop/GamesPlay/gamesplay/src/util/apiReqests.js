
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


export {
    getHomeGames,
    getElementById,
    getCatalogeGames
}