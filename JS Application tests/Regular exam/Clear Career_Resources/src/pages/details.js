import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../services/api.js";
import { getAplicatins, getItemById, isAplayed, removeItem, sendAplication } from "../services/services.js";

const detailTemplate = (item, user, aplications, aplay) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${item.imageUrl}" alt="example1" />
        <p id="details-title">${item.title}</p>
        <p id="details-category">
            Category: <span id="categories">${item.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${item.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${item.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${item.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${aplications}</strong></p>

        ${user != null && user._id == item._ownerId ? html` <div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a href="/delete/${item._id}" id="delete-btn">Delete</a> </div>` : user != null && user._id !=
        item._ownerId && aplay
            ? html`<div id="action-buttons">
            <a href="/aplay/${item._id}" id="apply-btn">Apply</a>
        </div>
        ` : html``}
    </div>
</section>
`

export async function detailView(ctx) {
    const id = ctx.params.id;

    const item = await getItemById(id)
    const user = getUserData();
    const aplications = await getAplicatins(id);
    let accessToAplay = undefined
    if (user) {
        const aplayedUser = await isAplayed(id, user._id);
        accessToAplay = aplayedUser == 1 ? false : true;
    }

    ctx.render(detailTemplate(item, user, aplications, accessToAplay))

}

export async function onAplay(ctx) {
    const offerId = ctx.params.id;

    await sendAplication({ offerId })
    ctx.page.redirect(`/details/${offerId}`)
}

export async function delItem(ctx) {
    const id = ctx.params.id;
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
        await removeItem(id);
        ctx.page.redirect(`/dashboard`);
    }
}