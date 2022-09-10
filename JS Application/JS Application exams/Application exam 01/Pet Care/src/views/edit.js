import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItamById, replacePost } from "../api/services.js";

const editTempalate = (onSubmit, e) => html`
<section id="editPage">
    <form class="editForm" @submit=${onSubmit}>
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" .value=${e.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" .value=${e.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" .value=${e.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" .value=${e.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" .value=${e.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>
`

export async function editView(ctx) {


    const itamId = ctx.params.id;
    const itam = await getItamById(itamId);
    ctx.render(editTempalate(onSubmit, itam));

    async function onSubmit(e) {
        e.preventDefault();
        const { name, breed, age, weight, image } = Object.fromEntries(new FormData(e.currentTarget));

        if (name != `` && breed != `` && age != `` && weight != `` && image != ``) {
            const data = {
                name,
                breed,
                age,
                weight,
                image
            }
            await replacePost(itamId, data);
            ctx.page.redirect(`/`);

        } else {
            alert(`missing input fields`);
        }
    }
}