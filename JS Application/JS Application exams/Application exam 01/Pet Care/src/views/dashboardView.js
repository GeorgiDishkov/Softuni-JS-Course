import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api/services.js";

const eachPetTemplate = (pet) => html`
<div class="animals-board">
    <article class="service-img">
        <img class="animal-image-cover" src="${pet.image}">
    </article>
    <h2 class="name">${pet.name}</h2>
    <h3 class="breed">${pet.breed}</h3>
    <div class="action">
        <a class="btn" href="/details/${pet._id}">Details</a>
    </div>
</div>

`

const dastboardTemplate = (pets) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${pets.map((e) => eachPetTemplate(e))}
    </div>
    ${pets.length > 0 ? `` : html` <div>
        <p class="no-pets">No pets in dashboard</p>
    </div>`}
    </div>
</section>
`

export function dashboardView(ctx) {
    getAll()
        .then((data) => {
            ctx.render(dastboardTemplate(data))
        });
}