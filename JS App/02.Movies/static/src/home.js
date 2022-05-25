import { createView} from './router.js';
let section = document.querySelector(`#edit-movie`);
section = document.querySelector("#home-page")
export function viewHome (){
    createView(section);
}