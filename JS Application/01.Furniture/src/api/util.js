let user = null

export function setUserData(data) {
    user = {
        email: data.email,
        token: data.accessToken,
        id: data.id
    }
    window.sessionStorage.setItem('accessToken', user.accessToken);
    window.sessionStorage.setItem(`id`, user._id);
}

export function cleareUserData() {
    window.sessionStorage.removeItem('accessToken',);
    window.sessionStorage.removeItem(`id`);
    user = null
}

export function getUserData() {
    return user;
}