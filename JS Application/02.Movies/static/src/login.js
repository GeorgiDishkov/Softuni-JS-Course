import { viewHome } from './home.js';
import { createView, naviUpdate } from './units.js';
let section = document.querySelector(`#form-login`);
let form = section.querySelector(`form`)
form.addEventListener('submit', submit);

export function viewLogin() {
    createView(section);
}

 async function submit(e) {
    e.preventDefault();
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');

    await login(email, password);
    form.reset();
    naviUpdate();
    viewHome();
}

export async function login(email, password) {
    try {
        let data = {
            email,
            password,
        }
        let options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }
        const res = await fetch(`http://localhost:3030/users/login`, options)
        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.message)
        }
        let user = await res.json();
        window.accessToken = user.accessToken
        localStorage.setItem('accessToken',JSON.stringify(user.accessToken.value))
        localStorage.setItem('user', JSON.stringify(user))
    } catch (err) {
        alert('Error: ' + err.message);
        throw err;
    }
}

//user: "{\"email\":\"peter@abv.bg\",\"username\":\"Peter\",\"_id\":\"35c62d76-8152-4626-8712-eeb96381bea8\",\"accessToken\":\"388b13c2b590a5b96ed82b5882554943e80dca524280c12d12248f09db99669a\"}"
