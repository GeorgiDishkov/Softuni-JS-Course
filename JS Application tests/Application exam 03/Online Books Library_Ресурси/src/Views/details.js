import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../services/api.js";
import { getItemById, dellPost } from "../services/services.js";

const detailTemplate = (user, item) => html` 
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${item.title}</h3>
        <p class="type">Type: ${item.type}</p>
        <p class="img"><img src="${item.imageUrl}"></p>
        <div class="actions">

            ${user == null ? html`` : user._id == item._ownerId ? html`<a class="button"
                href="/edit/${item._id}">Edit</a>
            <a class="button" href="/delete/${item._id}">Delete</a>`
            : (user !== null && user._id != item._ownerId) ? html`<a class="button" href="/like">Like</a>` : html``
            }
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${item.description}</p>
    </div>
</section>

    `

export async function detailView(ctx) {
    const id = ctx.params.id;

    const item = await getItemById(id);
    const user = getUserData();

    ctx.render(detailTemplate(user, item));
}

export async function dell(ctx) {
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
        await dellPost(ctx.params.id);
        ctx.page.redirect(`/`)
    }
}