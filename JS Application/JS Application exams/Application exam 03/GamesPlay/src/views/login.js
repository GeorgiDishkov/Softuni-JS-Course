import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../service/api.js';

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
    <form id="login" @submit=${onSubmit}>

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="#">here</a></span>
            </p>
        </div>
    </form>
</section>
`

export function loginView(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get(`email`);
        let password = formData.get(`password`);

        if (email && password) {
            let data = {
                email, password
            }
            let res = await login(data);

            if (res) {
                ctx.page.redirect('/')
            }
        } else {
            alert(`fill all fields`)
        }
    }
}