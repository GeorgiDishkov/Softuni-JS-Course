import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../services/services.js';

let eachTemplate = (receip) => html`
<div class="all-posts">
    <div class="post">
        <h2 class="post-title">${receip.title}</h2>
        <img class="post-image" src="${receip.imageUrl}">
        <div class="btn-wrapper">
            <a href="/details/${receip._id}" class="details-btn btn">Details</a>
        </div>
    </div>
</div>
//`

let customTemplate = (receips) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    ${receips <= 0 ?  html`<h1> class="title no-posts-title"No posts yet!</h1>` : receips.map(e => eachTemplate(e))}
</section>
`

export async function dashboardView(ctx) {
    let receips = await getAll();
    ctx.render(customTemplate(receips))
}