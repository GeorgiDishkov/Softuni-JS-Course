import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../services/api.js";


const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit=${onSubmit}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
        </form>
    </div>
</section>

`

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get(`email`);
        let password = formData.get(`password`);
        let coPassword = formData.get(`re-password`);
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
