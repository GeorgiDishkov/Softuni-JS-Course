import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllForCatalog } from "../service/services.js"

const eachCatTemplate = (e) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src="${e.imageUrl}">
        <h6>${e.category}</h6>
        <h2>${e.title}</h2>
        <a href="/details/${e._id}" class="details-button">Details</a>
    </div>
</div>
`

const catalogTemplate = (data) => html` 
<section id="catalog-page">
    <h1>All Games</h1>
    ${data.length > 0 ? data.map((e) => eachCatTemplate(e)) 
    : html`
    <h3 class="no-articles">No articles yet</h3>
    `}
</section>
`

export async function catalogView(ctx) {
    const data = await getAllForCatalog();
    console.log(data);
    ctx.render(catalogTemplate(data))
}