import * as api from './api.js'
const href = `http://localhost:3030`
api.settings.href = href;

let endPoint = {
    getHomeGames: `/data/games?sortBy=_createdOn%20desc&distinct=category`,
    catalog: `/data/games?sortBy=_createdOn%20desc`,
    create: `/data/games`,
    getById(id) {
        return `/data/games/${id}`
    },
    getAllComents(id) {
        return `/data/comments?where=gameId%3D%22${id}%22`
    },
    updateItem(id) {
        return `/data/games/${id}`
    },
    dellPost(id) {
        return `/data/games/${id}`
    },
    postCommnets: `/data/comments`,
}

export function getAllForHome() {
    return api.get(endPoint.getHomeGames);
}

export function getAllForCatalog() {
    return api.get(endPoint.catalog)
}

export function getItemById(id) {
    return api.get(endPoint.getById(id));
}

export function createItem(data) {
    return api.post(endPoint.create, data)
}

export function updateItem(id, data) {
    return api.put(endPoint.updateItem(id), data);
}

export function removeItem(id) {
    return api.dell(endPoint.dellPost(id))
}

export function getAllComents(id) {
    return api.get(endPoint.getAllComents(id))
}

export function postComment(data) {
    return api.post(endPoint.postCommnets, data);
}