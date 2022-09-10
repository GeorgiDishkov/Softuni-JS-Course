import { viewHome } from './home.js'
import { login } from './login.js';
import { createView, naviUpdate } from './units.js';
let section = document.querySelector(`#form-sign-up`);
export function viewRegister() {
    createView(section);
}

let form = section.querySelector(`form`);
form.addEventListener(`submit`, onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let coPassword = formData.get(`repeatPassword`);
    if (email && password && coPassword) {
        if (password == coPassword) {
            console.log(email, password, coPassword);
            await register(email, password, coPassword);
            login(email, password);
            naviUpdate();
            viewHome();
        } else {
            alert('Please check the password and try again.');
        }
    } else {
        alert('Please enter all ur data')
    }
}

async function register(email, password, copassword) {
    let username = email.split('@')[0];
    let url = 'http://localhost:3030/users/register'
    // still can add more properties to account like username and etc
    let data = {
        email,
        password,
        username
    }
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }
    let res = await fetch(url, options)
    let user = await res.json();
    console.log(user);
}
