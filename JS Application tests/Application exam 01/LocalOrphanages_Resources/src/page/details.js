import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllDonatesById, getItamById, isDonated } from '../services/services.js';
import { getUserData } from '../unit.js';

let custtomTemplate = (i, details, id, countDonates) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${i.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${i.title}</h2>
                <p class="post-description">Description: ${i.description}</p>
                <p class="post-address">Address: ${i.address}</p>
                <p class="post-number">Phone number: ${i.phone}</p>
                <p class="donate-Item">Donate Materials: ${countDonates}</p>

                ${details.author ? html` <div class="btns">
                    <a href="/edit/${id}" class="edit-btn btn">Edit</a>
                    <a href="/delete/${id}" class="delete-btn btn">Delete</a>
                </div>` : html``}
                ${details.user ? html` <div class="btns"><a href="/donate/${id}" class="donate-btn btn">Donate</a></div>
                ` : html``}
            </div>
        </div>
    </div>
</section>
`

export async function detailsView(ctx) {
    let details = {
        author: false,
        user: false,
    }

    let postId = ctx.params.id
    let itam = await getItamById(postId);
    let userInfo = getUserData();
    const countDonates = await getAllDonatesById(postId);
    const result = await isDonated(postId, userInfo._id);
    if (userInfo != null) {
        if (itam._ownerId == userInfo._id) {
            details.author = true;
        } else if (userInfo !== null && result == 0) {
            details.user = true;
        }
    }
    if (itam) {
        ctx.render(custtomTemplate(itam, details, postId, countDonates))
    }

}