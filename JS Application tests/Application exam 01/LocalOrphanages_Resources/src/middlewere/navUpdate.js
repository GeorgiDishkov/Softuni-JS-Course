import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../unit.js";

let root = document.querySelector(`#box`)

let userView = () => html`
<div id="user">
    <a href="/myPosts">My Posts</a>
    <a href="/create">Create Post</a>
    <a href="/logout">Logout</a>
</div>
`;

let guestView = () => html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;

let customTemplate = (user) => html`
<header>
    <h1><a href="/">Orphelp</a></h1>

    <nav>
        <a href="/dashboard">Dashboard</a>
        ${user ? userView() : guestView()}
    </nav>
</header>
`;
export function navUpdate() {
    let user = getUserData();
    render(customTemplate(user), root)

}