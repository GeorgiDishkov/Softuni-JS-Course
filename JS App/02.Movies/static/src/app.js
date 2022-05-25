// [x] improve HTML structure
// [x] create app.js module
// [x] create r.js containing hide and display of view
// [x] placeholders for all views

// implement views
// - create request logic
// - DOM manipulation logic
// [ ] catalog
// [x] login
// [ ] register
// [ ] create
// [ ] details
// [ ] like
// [ ] edit
// [ ] delete

import { naviUpdate } from './router.js';
import { viewHome } from './home.js';
import { viewAddMovie } from './addMovie.js';
import { details } from './details.js';
import { editMovie } from './edit.js';
import { viewLogin } from './login.js';
import { viewRegister } from './register.js'
document.querySelector("nav").addEventListener("click", onNavigate);
document.querySelector("#add-movie-button").addEventListener("click", onNavigate);

const link = {
    "/home": viewHome,
    "/add-movie": viewAddMovie,
    "/movie-example": details,
    "/edit-move": editMovie,
    "/login": viewLogin,
    "/register": viewRegister,
    "/logout": logout,
}


function onNavigate(e) {
    if (e.target.tagName == `A` && e.target.href) {
        e.preventDefault();
        let path = new URL(e.target.href);
        let view = link[path.pathname];
        view();
        naviUpdate();
    }
}

function logout() {
    window.localStorage.clear();
    viewHome();
}
viewHome();
naviUpdate();
