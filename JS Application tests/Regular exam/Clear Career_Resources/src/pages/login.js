import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../services/api.js";

const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onSubmit}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="#">Create an account</a>
            </p>
        </form>
    </div>
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