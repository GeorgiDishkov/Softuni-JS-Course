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

async function editPage(id, data, accessToken) {
    const response = await fetch(`${URL}/data/games/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data),
    })
    return response.json();
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

async function logoutApi() {
    return await fetch(`${URL}/users/logout`);
}

async function loadComments(id) {
    const data = await fetch(`${URL}/data/comments?where=gameId%3D%22${id}%22`);
    if (data.ok) {
        return data.json();
    } else {
        throw new Error(`Problem with server , please wait a bit`);
    }
}

async function addComent(data , accessToken) {
    console.log(data);
    console.log(accessToken);
    const response = await fetch(`${URL}/data/comments`, {
        method: "POST",
        headers: {
            "contetn-type": "application/json",
            // 'X-Authorization': accessToken
        },  
        body: JSON.stringify(data),
    })
    return response.json();
}


export {
    getHomeGames,
    getElementById,
    getCatalogeGames,
    editPage,
    loginApi,
    logoutApi,
    loadComments,
    addComent
}