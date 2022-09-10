import * as api from './api.js'

let endPoint = {
    getAll: `/data/offers?sortBy=_createdOn%20desc`,
    getById(id) {
        return `/data/offers/${id}`
    },
    create: `/data/offers`,
    update(id) {
        return `/data/offers/${id}`
    },
    removeItem(id) {
        return `/data/offers/${id}`
    },
    getAplicatins(id) {
        return `/data/applications?where=offerId%3D%22${id}%22&distinct=_ownerId&count`
    },
    postAplication: `/data/applications`,
    isAplayed(id, userId) {
        return `/data/applications?where=offerId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`
    }
}

export function getAll() {
    return api.get(endPoint.getAll);
}

export function getItemById(id) {
    return api.get(endPoint.getById(id))
}

export function createItem(data) {
    return api.post(endPoint.create, data)
}

export function updateItem(id, data) {
    return api.put(endPoint.update(id), data)
}

export function removeItem(id) {
    return api.dell(endPoint.removeItem(id))
}

//bonus

export function getAplicatins(id) {
    return api.get(endPoint.getAplicatins(id));
}

export function sendAplication(data) {
    return api.post(endPoint.postAplication, data)
}

export function isAplayed(id, userId) {
    return api.get(endPoint.isAplayed(id, userId));
}