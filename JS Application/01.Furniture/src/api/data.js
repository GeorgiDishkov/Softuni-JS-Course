import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/catalog',
    byId: '/data/catalog/',
    myItams: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    create: '/data/catalog',
    update: '/data/catalog/',
}

export async function getAll() {
    return api.getReqest(endpoints.all);
}

export async function getById(id) {
    return api.getReqest(endpoints.byId + id);
}

export async function getMyItams(userId) {
    return api.getReqest(endpoints.myItams(userId))
}

export async function createItam(data) {
    return api.postReqest(endpoints.create, data)
}

export async function updateItam(id, data) {
    return api.postReqest(endpoints.update + id, data)
}

export async function deleteItam(id) {
    return api.deleteReqest(endpoints.update + id)
}