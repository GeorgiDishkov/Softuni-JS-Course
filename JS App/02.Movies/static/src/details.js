import { createView } from './router.js';
let section = document.querySelector(`#movie-example`);
export function details (){
    createView(section);
}   