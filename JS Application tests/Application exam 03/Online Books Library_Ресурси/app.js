import page from './node_modules/page/page.mjs';
import { decorate } from './src/middleware/decorateContext.js';
import { navUpdate } from './src/middleware/navUpdate.js';
import { logout } from './src/services/api.js'
import { createView } from './src/Views/create.js';
import { dell, detailView } from './src/Views/details.js';
import { editView } from './src/Views/edit.js';
import { homeView } from './src/Views/home.js';
import { loginView } from './src/Views/login.js';
import { registerView } from './src/Views/register.js';
page(navUpdate)
page(decorate)
page(`/`, homeView)
page(`/login`, loginView)
page(`/logout`, onLogout)
page(`/register`, registerView)
page(`/create`, createView)
page(`/details/:id`, detailView)
page(`/edit/:id`, editView)
page(`/delete/:id`, dell)

async function onLogout(ctx) {
    await logout();
    ctx.page.redirect(`/`);
}

page.start();
