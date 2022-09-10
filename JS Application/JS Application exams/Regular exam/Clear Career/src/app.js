import page from '../node_modules/page/page.mjs';
import { decorateContent } from './middleware/decorate.js';
import { updateNav } from './middleware/updateNav.js';
import { createView } from './pages/create.js';
import { dashboardView } from './pages/dashboard.js';
import { delItem, detailView, onAplay } from './pages/details.js';
import { editView } from './pages/edit.js';
import { homeView } from './pages/home.js';
import { loginView } from './pages/login.js';
import { registerView } from './pages/register.js';
import { logout } from './services/api.js';

page(updateNav);
page(decorateContent);
page(`/`, homeView);
page(`/login`, loginView);
page(`/register`, registerView);
page(`/logout`, onLogout);
page(`/dashboard`, dashboardView);
page(`/create`, createView);
page(`/details/:id`, detailView);
page(`/edit/:id`, editView);
page(`/delete/:id`, delItem)
page(`/aplay/:id`, onAplay)
page.start();

async function onLogout(ctx) {
    await logout();
    ctx.page.redirect(`/`)
}