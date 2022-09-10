import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../service/api.js';

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
    <form id="register" @submit=${onSubmit}>
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="#">here</a></span>
            </p>
        </div>
    </form>
</section>
`

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get(`email`);
        let password = formData.get(`password`);
        let coPassword = formData.get(`confirm-password`);
        if (email && password == coPassword) {
            let data = {
                email, password
            }
            await register(data);
            ctx.page.redirect('/')
        } else {
            alert(`fill all fields`)
        }
    }
}
