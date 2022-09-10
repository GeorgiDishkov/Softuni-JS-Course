import { render } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../services/api.js';

export function decorate(ctx, next) {
    const content = document.querySelector(`main`);
    ctx.render = (template) => render(template, content);
    ctx.userData = getUserData();
    next();
}