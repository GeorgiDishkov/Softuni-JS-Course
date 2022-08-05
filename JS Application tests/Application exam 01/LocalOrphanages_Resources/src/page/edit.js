import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItamById, replaceById } from "../services/services.js";

const customTemplate = (data, onSubmit) => html`
<section id="edit-page" class="auth">
    <form id="edit" @submit=${onSubmit}>
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title"></label>
            <input type="text" name="title" id="title" .value="${data.title}">
        </article>

        <article class="input-group">
            <label for="description"></label>
            <input type="text" name="description" id="description" .value="${data.description}">
        </article>

        <article class="input-group">
            <label for="imageUrl"></label>
            <input type="text" name="imageUrl" id="imageUrl" .value="${data.imageUrl}">
        </article>

        <article class="input-group">
            <label for="address"></label>
            <input type="text" name="address" id="address" value="${data.address}">
        </article>

        <article class="input-group">
            <label for="phone"></label>
            <input type="text" name="phone" id="phone" value="${data.phone}">
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>
`

export async function editView(ctx) {
    let itam = await getItamById(ctx.params.id);
    ctx.render(customTemplate(itam, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const post = {
            title: formData.get('title').trim(),
            description: formData.get('description').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            address: formData.get('address').trim(),
            phone: formData.get('phone').trim(),
        }
        if (Object.values(post).some(x => !x)) {
            return alert('All fields are required!')
        };
        await replaceById(ctx.params.id, post);
        ctx.page.redirect(`/dashboard`)
    }
}