import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, update } from "../services/services.js";


const editTemplate = (item, onSubmit) => html` 
<section id="edit-page" class="edit">
    <form id="edit-form" @submit=${onSubmit}>
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value="${item.title}">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${item.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value="${item.imageUrl}">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value="${item.type}">
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`

export async function editView(ctx) {
    const item = await getItemById(ctx.params.id);

    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(e) {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get(`title`).trim();
        const description = formData.get(`description`).trim();
        const imageUrl = formData.get(`imageUrl`).trim();
        const type = formData.get(`type`).trim();

        console.log(title, ` - `, description, ` - `, imageUrl, ` - `, type);
        if (title, description, imageUrl, type) {
            const data = {
                title,
                description,
                imageUrl,
                type
            }
            await update(ctx.params.id, data)
            ctx.page.redirect(`/`);
        }
    }
}