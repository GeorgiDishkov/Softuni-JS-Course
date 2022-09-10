import { register } from './register.js'
import { login } from './login.js'
import { home } from './home.js'
import { logout } from './logout.js'

let pageList = {
    Register: register,
    Login: login,
    Home: home,
    Logout: logout,
}

export function routing (pageName) {
    hideNav();
    let currentPage = pageList[pageName];
    currentPage();
}

function hideNav () {
    const pageViews = document.querySelector(`#views`);
    for (const page of pageViews.children) {
        page.style.display = 'none';
    }
}