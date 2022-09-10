import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { getUserData } from '../services/api.js';

const container = document.querySelector(`#wrapper`);

const user = () => html`
<div class="user">
    <a href="/create">Create Offer</a>
    <a href="/logout">Logout</a>
</div>
`

const guest = () => html`
<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`

const navTemplate = (auth) => html`
<header>
    <!-- Navigation -->
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>

    <nav>
        <div>
            <a href="/dashboard">Dashboard</a>
        </div>
        ${auth ? user() : guest()}
    </nav>
</header>

<main></main>
<footer>
    <p>@ClearCareer</p>
</footer>
`

export function updateNav(ctx, next) {
    const auth = getUserData();
    ctx.getUserData = getUserData();
    render(navTemplate(auth), container);
    next();
}