import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../units.js';


const guestViews = () => html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>
`
const userViews = () => html`
<li><a href="/create">Create Postcard</a></li>
<li><a href="/logout">Logout</a></li>
`

const navigationTemplate = (user) => html`
<nav>
    <section class="logo">
        <img src="./images/logo.png" alt="logo">
    </section>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        ${user ? userViews() : guestViews()}
    </ul>
</nav>
`

const navRoot = document.querySelector(`header`)
export function navigationView(ctx, next) {


    const user = getUserData();
    render(navigationTemplate(user), navRoot);

    next();
}
