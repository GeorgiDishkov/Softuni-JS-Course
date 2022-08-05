import *  as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const href = `http://localhost:3030`
api.settings.href = href;

let endPoint = {
    all: `/data/posts?sortBy=_createdOn%20desc`,
    create: `/data/posts`,
    byId: `/data/posts/`,
    replace: `/data/posts/`,
    delete: `/data/posts/`,
    myItams: (id) => {
        return `/data/posts?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`
    },
    isDonated: (postId, userId) => {
        return `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
    },
    donatesById: (postId) => {
        return `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`
    },
    sendDoante: `/data/donations`
}

export function getAll() {
    return api.get(endPoint.all);
}

export function createItam(data) {
    return api.post(endPoint.create, data);
}

export function getItamById(id) {
    return api.get(endPoint.byId + id);
}

export function replaceById(id, data) {
    return api.put(endPoint.replace + id, data);
}

export function dellById(id) {
    return api.dell(endPoint.delete + id);
}

export function myItams(id) {
    return api.get(endPoint.myItams(id));
}

export function isDonated(postId, userId) {
    return api.get(endPoint.isDonated(postId, userId));
}

export function sendDonate(postId) {
    return api.post(endPoint.sendDoante, postId)
}

export function getAllDonatesById(postId) {
    return api.get(endPoint.donatesById(postId));
}