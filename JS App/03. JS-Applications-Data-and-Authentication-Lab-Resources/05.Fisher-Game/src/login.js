import { auth } from './auth.js';

export function login() {
    document.getElementById(`login-view`).style.display = 'block';
    takeInfo()
}
function takeInfo() {
    // if (!window.localStorage) {
    let loginForm = document.querySelector(`form#login`);
    loginForm.addEventListener(`submit`, (e) => {
        e.preventDefault();
        let dataForm = new FormData(loginForm);
        let email = dataForm.get(`email`);
        let password = dataForm.get(`password`);
        loginReq(email, password);
    })
}
export function loginReq(email, password) {
    let data = {
        email,
        password,
    }
    let options = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }
    // console.log(data);
    fetch(`http://localhost:3030/users/login`, options).then(res => {
        res.json().then(anth => {
            console.log(anth);
            let nameEmail = anth.email
            console.log(nameEmail);
            if (nameEmail !== undefined) {
                window.localStorage.setItem(`username`, (nameEmail));
                auth(nameEmail);
            } else {
                alert(anth.message)
            }
        })
    })
}