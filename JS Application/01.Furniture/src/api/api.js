import { cleareUserData, getUserData, setUserData } from "./util.js";

const mainUrl = `http://localhost:3030`;

async function request(url, options) {

    const response = await fetch(mainUrl + url, options);
    if (response.ok != true) {
        if (response.status == 403) {
            cleareUserData();
        }
        const error = await response.json();
        throw new Error(error.message);
    }

    if (response.status == 204) {
        return response;
    } else {
        return response.json();
    }
}

function createOptions(method = 'GET', data) {
    let options = {
        method,
        headers: {},
    }
    if (method != undefined) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data)
    }
    const user = getUserData();
    if (user != null) {
        options.headers['X-Authorization'] = user.token;
    }
    return options;
}



export function getReqest(url) {
    return request(url, createOptions());
}

export function postReqest(url, data) {
    return request(url, createOptions('POST', data))
}

export function updateReqest(url, data) {
    return request(url, createOptions('PUT', data))
}
export function deleteReqest(url) {
    return request(url, createOptions('DELETE'))
}

export async function register(email, password) {

    let user = await postReqest(`/users/register`, { email, password });
    let userData = {
        email: user.email,
        id: user.id,
        token: user.accessToken,
    }
    setUserData(userData);
}

export async function login(email, password) {

    let user = await postReqest(`/users/login`, { email, password });

    let userData = {
        email: user.email,
        id: user.id,
        token: user.accessToken,
    }
    setUserData(userData);
}

export async function logout() {
    await get('/users/logout');
    cleareUserData();
}

