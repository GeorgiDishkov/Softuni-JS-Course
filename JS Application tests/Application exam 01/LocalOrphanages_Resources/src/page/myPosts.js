import { html } from '../../node_modules/lit-html/lit-html.js';
import { myItams } from '../services/services.js';

const eachItam = (e) => html`
    <div class="post">
        <h2 class="post-title">${e.title}</h2>
        <img class="post-image" src="${e.imageUrl}">
        <div class="btn-wrapper">
            <a href="/details/${e._id}" class="details-btn btn">Details</a>
        </div>
    </div>
`

let customTemplate = (itams) => html`
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>

    <div class="my-posts">
        ${itams.map(e => eachItam(e))}
    </div>
    ${itams.length != 0 ? `` : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>
`

export async function myPostiew(ctx) {
    const userId = ctx.userData._id;
    const itams = await myItams(userId);
    ctx.render(customTemplate(itams))
}