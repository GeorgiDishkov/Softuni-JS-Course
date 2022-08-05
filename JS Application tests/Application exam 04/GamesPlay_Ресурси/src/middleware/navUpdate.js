import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../service/api.js';
const content = document.querySelector(`#box`);

const guest = () => html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`
const user = () => html`
<div id="user">
    <a href="/create">Create Game</a>
    <a href="/logout">Logout</a>
</div>
`

const navTemplate = (auth) => html`
<header>
    <h1><a class="home" href="/">GamesPlay</a></h1>
    <nav>
        <a href="/catalog">All games</a>
        ${auth ? user() : guest()}
    </nav>
</header>

<main id="main-content">
</main>
`


export async function navUpdate(ctx, next) {
    const auth = await getUserData();

    render(navTemplate(auth), content)

    next();
}