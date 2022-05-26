import { viewHome } from './home.js';
import { createView } from './units.js';
let section = document.querySelector(`#add-movie`);
export function viewAddMovie() {
    createView(section);
}

let form = section.querySelector(`form`);
form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let title = formData.get(`title`);
    let movieDisc = formData.get(`description`);
    let imgUrl = formData.get(`imageUrl`);

    await addMovie(title, movieDisc, imgUrl);
    viewHome()
}

async function addMovie(title, movieDisc, imgUrl) {
    let url = `http://localhost:3030/data/movies`;
    let token = window.accessToken;
    let data = {
        title,
        description: movieDisc,
        img: imgUrl,
        
    }
    let options = {
        method: 'POST',
        headers: { "Content-Type": "application/json" ,
        'X-Authorization': token,
    },
        body: JSON.stringify(data),
    }
    let res = await fetch(url, options);
    let result = await res.json();
}