import { html } from "../../node_modules/lit-html/lit-html.js";
import { createItem } from "../services/services.js";

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Create Offer</h2>
        <form class="create-form" @submit=${onSubmit}>
            <input type="text" name="title" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" />
            <button type="submit">post</button>
        </form>
    </div>
</section>
`

export function createView(ctx) {
    ctx.render(createTemplate(onSubmit))

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
            await createItem(data)
            ctx.page.redirect(`/dashboard`);
        } else {
            alert(`fill all fields right!`)
        }
    }
}