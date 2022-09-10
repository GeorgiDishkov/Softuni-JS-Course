import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../service/api.js';
import { getAllComents, getItemById, postComment, removeItem } from '../service/services.js';

const coment = (e) => html`
<li class="comment">
    <p>${e.comment}</p>
</li>
`

const detailTemplate = (user, item, onSend, comments) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${item.imageUrl}" />
            <h1>${item.title}</h1>
            <span class="levels">MaxLevel: ${item.maxLevel}</span>
            <p class="type">${item.category}</p>
        </div>

        <p class="text">
            ${item.summary}
        </p>
        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments != 0 ? html`
            <ul>${comments.map((e) => coment(e))}</ul>`
            : html`
            <p class="no-comment">No comments.</p>`}
        </div>
        ${user == null ? html`` :
         user._id == item._ownerId ? html` <div class="buttons">
            <a href="/edit/${item._id}" class="button">Edit</a>
            <a href="/delete/${item._id}" class="button">Delete</a>
        </div>` : html``}
        ${user != null && user._id != item._ownerId ? html`<article class="create-comment">
            <label>Add new comment:</label>
            <form class="form" @submit=${onSend}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>`: html``}
    </div>
</section>
`

export async function detailsView(ctx) {
    const user = getUserData();
    const item = await getItemById(ctx.params.id);
    const comments = await getAllComents(ctx.params.id);
    console.log(comments);
    console.log(user, ` --- `, item);
    ctx.render(detailTemplate(user, item, onSend, comments))

    async function onSend(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = {
            gameId: ctx.params.id,
            comment: formData.get(`comment`),
        }
        e.currentTarget.reset();
        await postComment(data)
        ctx.page.redirect(`/details/${ctx.params.id}`)
    }
}

export async function dellItem(ctx) {
    const id = ctx.params.id;
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
        await removeItem(id);
        ctx.page.redirect(`/`);
    }
}