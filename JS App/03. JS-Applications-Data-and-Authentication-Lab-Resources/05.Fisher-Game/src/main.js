import { routing } from './router.js'
import { auth } from './auth.js';
const  navigation = document.querySelector(`nav`);

function main () {
    auth(window.localStorage.username)
    navigation.addEventListener(`click` ,(e) => {
        e.preventDefault();
        if (e.target.tagName == `A`) {
            routing(e.target.textContent)
        }
    })
}
main ()