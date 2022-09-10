import { page, render } from './lib.js';
import { catalogPage } from './views/catalog.js'
import { createPage } from './views/crearte.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { myPublicationsPage } from './views/myPublications.js';
import { registerPage } from './views/register.js';

import * as api from './api/data.js'
window.api = api


page(`/`, catalogPage);
page(`/details/:id`, detailsPage);
page(`/create`, createPage);
page(`/edit/:id`, editPage);
page(`/login`, loginPage);
page(`/register`, registerPage);
page(`/my-furniture`, myPublicationsPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);

    next();
}

