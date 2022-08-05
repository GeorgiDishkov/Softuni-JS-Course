import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../services/api.js';

const container = document.querySelector(`#container`);

const user = (auth) => html`
<div id="user">
    <span>Welcome, ${auth.email}</span>
    <a class="button" href="#">My Books</a>
    <a class="button" href="/create">Add Book</a>
    <a class="button" href="/logout">Logout</a>
</div>
`

const ghost = () => html`
<div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
</div>
`

const navTemplate = (auth) => html` 
<header id="site-header">
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="/">Dashboard</a>
            ${auth ? user(auth) : ghost()}
        </section>
    </nav>
</header>
<main id="site-content"></main>
`
export function navUpdate(ctx, next) {
    const auth = getUserData()
    render(navTemplate(auth), container);

    next();
}