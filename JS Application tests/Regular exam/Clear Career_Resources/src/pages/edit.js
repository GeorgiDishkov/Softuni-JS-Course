import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, updateItem } from "../services/services.js";

const editTemplate = (e, onSubmit) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Offer</h2>
            <form class="edit-form" @submit=${onSubmit}>
                <input type="text" name="title" id="job-title" placeholder="Title" value="${e.title}" />
                <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value="${e.imageUrl}" />
                <input type="text" name="category" id="job-category" placeholder="Category" value="${e.category}" />
                <textarea id="job-description" name="description" placeholder="Description" rows="4"
                    cols="50">${e.description}"</textarea>
                <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                    cols="50">${e.requirements}"</textarea>
                <input type="text" name="salary" id="job-salary" placeholder="Salary" value="${e.salary}" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`
export async function editView(ctx) {

    const id = ctx.params.id;

    const item = await getItemById(id);

    ctx.render(editTemplate(item, onSubmit))
    async function onSubmit(e) {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get(`title`);
        const imageUrl = formData.get(`imageUrl`);
        const category = formData.get(`category`);
        const description = formData.get(`description`);
        const requirements = formData.get(`requirements`);
        const salary = formData.get(`salary`);


        if (title, category, description, imageUrl, requirements, salary) {
            const data = {
                title,
                imageUrl,
                category,
                description,
                requirements,
                salary
            }
            await updateItem(id, data)
            ctx.page.redirect(`/details/${id}`);
        } else {
            alert(`fill all fields right!`)
        }
    }
}