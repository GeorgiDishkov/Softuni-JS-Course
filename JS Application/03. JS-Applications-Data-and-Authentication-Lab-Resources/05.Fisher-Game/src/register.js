import { loginReq } from "./login.js";

export function register() {
    let registerPage = document.getElementById(`register-view`)
    registerPage.style.display = `block`;
    let registerForm = registerPage.children[1];
    registerForm.addEventListener(`submit`, (e) => {
        e.preventDefault();
        let formData = new FormData(registerForm);
        let email = formData.get(`email`);
        let password = formData.get(`password`);
        let co_passowrd = formData.get(`rePass`);
        registerReq(email, password, co_passowrd);
        loginReq(email, password);
    })
}
function registerReq(email, password, co_passowrd) {
    if (password == co_passowrd) {
        let url = `http://localhost:3030/users/register`;
        let data = {
            email,
            password,
        }
        let options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        fetch(url, options)
            .then(response => response.json()
                .then(data => {
                    console.log(data);
                }))
    } else {
        alert(`Wrong data inputs`);
    }
}

