import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../services/services.js";

const singleTemplate = (e) => html`
<li class="otherBooks">
    <h3>${e.title}</h3>
    <p>Type: ${e.type}</p>
    <p class="img"><img src="${e.imageUrl}"></p>
    <a class="button" href="/details/${e._id}">Details</a>
</li>
`

const homeTemplate = (data) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${data ? html`
    <ul class="other-books-list">
        ${data.map((e) => singleTemplate(e))}
    </ul>
    `
        : html`<p class="no-books">No books in database!</p>`}
</section>
`

export async function homeView(ctx) {
    const data = await getAll();
    ctx.render(homeTemplate(data));
}