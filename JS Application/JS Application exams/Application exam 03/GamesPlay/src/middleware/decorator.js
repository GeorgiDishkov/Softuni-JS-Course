import { render } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../service/api.js';

export function decoration(ctx, next) {
    const content = document.querySelector(`#main-content`);
    ctx.render = (template) => render(template, content);
    ctx.userData = getUserData();
    next();
}   