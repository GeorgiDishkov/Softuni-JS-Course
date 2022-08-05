import { html } from '../../node_modules/lit-html/lit-html.js';
import { navUpdate } from '../middlewere/navUpdate.js';
import { login } from '../services/services.js';


let customTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
    <form id="login" @submit=${onSubmit}>
        <h1 class="title">Login</h1>

        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>

        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>

        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>
`

export async function loginView(ctx) {
    ctx.render(customTemplate(onSubmit));

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
            console.log(res);
            if (res) {
                navUpdate();
                ctx.page.redirect('/dashboard')
            }
        }
    }
}
