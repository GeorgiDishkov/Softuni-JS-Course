import { clearUserData, getUserData, saveUserData } from "../units.js";

export const settings = {
    href: ``
}

async function reqsester(url, options) {

    try {
        let ress = await fetch(settings.href + url, options);
        if (ress.ok !== true) {
            const error = await ress.json();
            throw new Error(error.message)
        } else {
            const data = await ress.json();
            return data;
        }

    } catch (err) {
        console.log(err.message);
    }
}

function createOptions(method = `get`, data) {
    let options = {
        method,
        headers: {}
    }

    let user = getUserData();
    if (user) {
        options.headers[`X-Authorization`] = user.accessToken;
    }
    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    return options;
}

export function get(url) {
    return reqsester(url, createOptions());
}
export function post(url, data) {
    return reqsester(url, createOptions(`post`, data));
}
export function put(url, data) {
    return reqsester(url, createOptions(`put`, data));
}
export function dell(url, data) {
    return reqsester(url, createOptions(`DELETE`, data));
}

let endpoints = {
    register: `/users/register`,
    login: `/users/login`,
    logout: `/users/logout`,
}

export async function register(data) {
    let user = await post(endpoints.register, data);
    saveUserData(user);
}
export async function login(data) {
    let user = await post(endpoints.login, data);
    if (user) {
        saveUserData(user);
        return user;
    } else {
        return null;
    }
}
export async function logout() {
    await get(endpoints.logout);

    clearUserData();
}