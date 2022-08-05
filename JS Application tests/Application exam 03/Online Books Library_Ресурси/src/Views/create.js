import { html } from '../../node_modules/lit-html/lit-html.js';
import { creatPost } from '../services/services.js';


const templateCreate = (onCreate) => html`
<section id="create-page" class="create">
    <form id="create-form" @submit=${onCreate}>
        <fieldset>
            <legend>Add new Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" placeholder="Title">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type">
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Book">
        </fieldset>
    </form>
</section>
`

export function createView(ctx) {
    ctx.render(templateCreate(onCreate));

    async function onCreate(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get(`title`);
        const discription = formData.get(`description`);
        const image = formData.get(`imageUrl`);
        const type = formData.get(`type`);

        if (title, discription, image, type) {
            const data = {
                title,
                discription,
                image,
                type
            }
            await creatPost(data);
            ctx.page.redirect(`/`);
        }
    }
}