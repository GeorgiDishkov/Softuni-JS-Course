import { viewHome } from './home.js';
import { createView, naviUpdate } from './router.js';
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

async function login(email, password) {
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
        localStorage.setItem('user', JSON.stringify(user))
    } catch (err) {
        alert('Error: ' + err.message);
        throw err;
    }
}