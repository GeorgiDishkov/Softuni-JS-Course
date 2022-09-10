import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../services/services.js";

const eachOffer = (e) => html`
<div class="offer">
    <img src="${e.imageUrl}" alt="example1" />
    <p>
        <strong>Title: </strong><span class="title">${e.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${e.salary}</span></p>
    <a class="details-btn" href="/details/${e._id}">Details</a>
</div>
`

const dashboardTemplate = (offers) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${offers != 0 ? offers.map((e) => eachOffer(e)) : html`
    <h2>No offers yet.</h2>
    `}
</section>
`

export async function dashboardView(ctx) {
    const offers = await getAll();
    ctx.render(dashboardTemplate(offers))
}