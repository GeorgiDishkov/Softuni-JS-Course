import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItam } from '../services/services.js';

let customTemplate = (onCreate) => html`
<section id="create-page" class="auth">
    <form id="create" @submit=${onCreate}>
        <h1 class="title">Create Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="text" name="title" id="title">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone">
        </article>

        <input type="submit" class="btn submit" value="Create Post">
    </form>
</section>
`

export function createView(ctx) {
    ctx.render(customTemplate(onCreate));
    async function onCreate(e) {
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
        let res = await createItam(post);
        ctx.page.redirect(`/dashboard`)
    }
}