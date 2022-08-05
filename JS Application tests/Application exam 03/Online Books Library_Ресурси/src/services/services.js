import { reporters } from 'mocha';
import * as api from './api.js';

let endPoint = {
    getAll: `/data/books?sortBy=_createdOn%20desc`,
    getItemById(id) {
        return `/data/books/${id}`
    },
    create: `/data/books`,
    update(id) {
        return `/data/books/${id}`
    },
    dellPost(id) {
        return `/data/books/${id}`
    },
    personalPost(id) {
        return `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
    }
}

export function getAll() {
    return api.get(endPoint.getAll)
}

export function getItemById(id) {
    return api.get(endPoint.getItemById(id))
}

export function creatPost(data) {
    return api.post(endPoint.create, data)
}

export function update(id, data) {
    return api.put(endPoint.update(id), data)
}

export function dellPost(id) {
    return api.dell(endPoint.dellPost(id))
}

export function getPersonalPosts(id) {
    return api.get(endPoint.personalPost(id));
}   