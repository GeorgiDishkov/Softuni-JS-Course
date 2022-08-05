import page from '../node_modules/page/page.mjs';
import { post } from './api/api.js';
import { deletePost, getDonateCount, logout, putDonate } from './api/services.js';

import { decorateContext } from './middleware/renderMiddleware.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboardView.js';
import { detailView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { navigationView } from './views/navigationView.js';
import { registerView } from './views/registerView.js';

page(navigationView)
page(decorateContext)
page(`/`, homeView);
page(`/login`, loginView)
page(`/register`, registerView)
page(`/logout`, onLogout)
page(`/dashboard`, dashboardView)
page(`/details/:itam`, detailView)
page(`/create`, createView)
page(`/edit/:id`, editView)
page(`/delete/:id`, onDelete)
page(`/donate/:id`, onDonate)

page.start();

async function onLogout(ctx) {
    await logout();
    ctx.page.redirect(`/`)
}

async function onDelete(ctx) {
    const confirmed = confirm(`Are u sure wanan delete this one ? y/n`)

    if (confirmed) {
        const itamId = ctx.params.id
        await deletePost(itamId);
        ctx.page.redirect(`/`)
    }
}

async function onDonate(ctx) {
    const postId = ctx.params.id;
    await putDonate({ petId: postId })

    ctx.page.redirect(`/details/${postId}`)
}