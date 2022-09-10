import { html } from "../../node_modules/lit-html/lit-html.js";
import { getDonateCount, getItamById, isDonated } from "../api/services.js";
import { getUserData } from "../units.js";

const detailTemplate = (e, access, donateCount) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${e.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${e.name}</h1>
                <h3>Breed: ${e.breed}</h3>
                <h4>Age: ${e.age}</h4>
                <h4>Weight: ${e.weight}</h4>
                <h4 class="donation">Donation: ${donateCount * 100}$ (temorary unavable) </h4>
            </div>
            <div class="actionBtn">
                ${access.author ? html`<a href="/edit/${e._id}" class="edit">Edit</a>
                <a href="/delete/${e._id}" class="remove">Delete</a>` : access.user ? html` <a href="/donate/${e._id}"
                    class="donate">Donate</a>` :
               html``}
            </div>
        </div>
    </div>
`

export async function detailView(ctx) {
    const itamId = ctx.params.itam
    const itam = await getItamById(itamId);

    let userId
    const user = getUserData();
    if (user != undefined) {
        userId = user._id
    }

    let access = {
    }

    let isDonate
    let donateCount = await getDonateCount(itamId);

    if (user != undefined) {
        isDonate = await isDonated(itamId, userId);
        if (userId == itam._ownerId) {
            access.author = true;
        } else if (isDonate == 0) {
            access.user = true;
        }
    }
    ctx.render(detailTemplate(itam, access, donateCount))
}