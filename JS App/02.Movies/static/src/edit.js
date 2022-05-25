import { createView } from './router.js';
let section = document.querySelector(`#edit-movie`);
export function editMovie (){
    createView(section);
}   