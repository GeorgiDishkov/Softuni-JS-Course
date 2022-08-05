export function getUserData() {
    let user = window.sessionStorage.getItem(`user`);
    if (user) {
        return JSON.parse(user);
    } else {
        return null;
    }
}

export function clearUserData() {
    window.sessionStorage.removeItem(`user`);
}

export function setUserData(data) {
    if (data) {
        window.sessionStorage.setItem('user', JSON.stringify(data));
    } else {
        return null
    }
}
