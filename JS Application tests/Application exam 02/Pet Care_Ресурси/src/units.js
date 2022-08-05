let strUser = `user`;

export function saveUserData(user) {
    if (user) {
        window.localStorage.setItem(strUser, JSON.stringify(user))
    } else {
        return null;
    }
}

export function getUserData() {
    const user = window.localStorage.getItem(strUser);
    if (user) {
        return JSON.parse(user);
    } else {
        return undefined;
    }
}

export function clearUserData() {
    window.localStorage.clear();
}

