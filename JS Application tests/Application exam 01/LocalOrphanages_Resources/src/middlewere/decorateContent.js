import { render } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../unit.js';

export function decorateContent(ctx, next) {
        let root = document.querySelector(`main`);
        ctx.render = (content) => render(content, root);
        ctx.userData = getUserData();
        next();
}

