import page from '../node_modules/page/page.mjs';
import { decoration } from './middleware/decorator.js';
import { navUpdate } from './middleware/navUpdate.js';
import { logout } from './service/api.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { dellItem, detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

page(navUpdate)
page(decoration)
page(`/`, homeView)
page(`/login`, loginView)
page(`/logout`, onLogout)
page(`/register`, registerView)
page(`/catalog`, catalogView)
page(`/create`, createView)
page(`/details/:id`, detailsView)
page(`/edit/:id`, editView)
page(`/delete/:id`, dellItem)

page.start();

async function onLogout(ctx) {
    await logout();
    ctx.page.redirect(`/`);
}