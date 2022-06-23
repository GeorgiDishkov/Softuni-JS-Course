import { details } from './details.js'
import { createView } from './units.js';
let section = document.querySelector("#home-page")
export function viewHome() {
    createView(section);
    updateMovie();
}

function movies() {

}
let movieContainer = section.querySelector("div div div ");
function updateMovie() {
    movieContainer.innerHTML = ``;
    fetch(`http://localhost:3030/data/movies`)
        .then(res => res.json()
            .then(data => {
                data.forEach((e) => {
                    let div = document.createElement('div');
                    div.classList = `card mb-4`;
                    div.id = e._ownerId;
                    div.innerHTML = `<img class="card-img-top" src="${e.img}"
                    alt="Card image cap" width="400">
                    <div class="card-body">
                    <h4 class="card-title">${e.title}</h4>
                    </div>
                    <div class="card-footer">
                    <a href="/details/${e._id}">
                    <button type="button" class="btn btn-info">Details</button>
                    </a>
                    </div>`
                    movieContainer.appendChild(div);
                    movieContainer.addEventListener('click',details)
                });
            })
        )
}



// description: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him."
// img: "https://i.pinimg.com/originals/f2/a4/58/f2a458048757bc6914d559c9e4dc962a.jpg"
// title: "Top Gun 2"
// _createdOn: 1614935268135
// _id: "a9bae6d8-793e-46c4-a9db-deb9e3484909"
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8"