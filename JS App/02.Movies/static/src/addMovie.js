import { createView } from './router.js';
let section = document.querySelector(`#add-movie`);
export function viewAddMovie (){
    createView(section);

}