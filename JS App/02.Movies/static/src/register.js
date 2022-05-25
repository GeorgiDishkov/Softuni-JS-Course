import { createView } from './router.js';
let section = document.querySelector(`#edit-movie`);
export function viewRegister() {
    createView(section);
}   