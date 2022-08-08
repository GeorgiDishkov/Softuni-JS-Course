import { render } from '../../node_modules/lit-html/lit-html.js';

export function decorateContent(ctx, next) {
    const mainContent = document.querySelector(`main`);
    ctx.render = (template) => render(template, mainContent);
    next();
}