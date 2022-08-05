import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, updateItem } from '../service/services.js';


const editTemplate = (item, onSubmit) => html`
<section id="edit-page" class="auth">
    <form id="edit" @submit=${onSubmit}>
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="${item.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="${item.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="${item.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="${item.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${item.summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>
`

export async function editView(ctx) {
    const id = ctx.params.id
    const item = await getItemById(id);

    console.log(item);
    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get(`title`);
        const category = formData.get(`category`);
        const maxLevel = formData.get(`maxLevel`);
        const imageUrl = formData.get(`imageUrl`);
        const summary = formData.get(`summary`);

        if (title, category, maxLevel, imageUrl, summary) {
            const data = {
                title,
                category,
                maxLevel,
                imageUrl,
                summary
            }
            await updateItem(id, data)
            ctx.page.redirect(`/`);
        } else {
            alert(`fill all fields right!`)
        }
    }
}