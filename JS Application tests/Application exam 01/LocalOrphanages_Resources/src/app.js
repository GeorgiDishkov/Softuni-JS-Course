import page from '../node_modules/page/page.mjs';

import { decorateContent } from './middlewere/decorateContent.js';
import { navUpdate } from './middlewere/navUpdate.js';
import { createView } from './page/create.js';
import { dashboardView } from './page/dashboard.js';
import { deleteItam } from './page/delete.js';
import { detailsView } from './page/details.js';
import { donate } from './page/donate.js';
import { editView } from './page/edit.js';
import { loginView } from './page/login.js';
import { logoutView } from './page/logout.js';
import { myPostiew } from './page/myPosts.js';
import { registerView } from './page/register.js';
import * as services from './services/services.js';

window.services = services;

navUpdate();

page(decorateContent)
page('/', dashboardView)
page('/dashboard', dashboardView)
page('/myPosts', myPostiew)
page('/create', createView)
page('/logout', logoutView)
page('/login', loginView)
page('/register', registerView)
page('/details/:id', detailsView)
page('/edit/:id', editView)
page('/delete/:id', deleteItam)
page('/donate/:id', donate)

page.start();

