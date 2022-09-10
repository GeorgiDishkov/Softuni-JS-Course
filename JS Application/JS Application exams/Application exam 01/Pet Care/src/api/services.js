import *  as api from "./api.js";

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const href = `http://localhost:3030`
api.settings.href = href;

let endPoint = {
    getAll: "/data/pets?sortBy=_createdOn%20desc&distinct=name",
    itamById: "/data/pets/",
    create: "/data/pets/",
    replace: "/data/pets/",
    deletePost: "/data/pets/",
    isDonate: (petId, userId) => {
        return `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
    },
    updateDonate: "/data/donation"
}

export function getAll() {
    return api.get(endPoint.getAll)
}

export function getItamById(id) {
    return api.get(endPoint.itamById + id);
}

export function createPost(data) {
    return api.post(endPoint.create, data);
}

export function replacePost(id, data) {
    return api.put(endPoint.replace + id, data)
}

export function deletePost(id) {
    return api.dell(endPoint.deletePost + id)
}

export async function isDonated(petId, userId) {
    const result = await api.get(endPoint.isDonate(petId, userId))
    return result;
}

export function getDonateCount(id) {
    return api.get(`/data/donation?where=petId%3D%22${id}%22&distinct=_ownerId&count`)
}

export function putDonate(data) {
    return api.post(endPoint.updateDonate , data)
}