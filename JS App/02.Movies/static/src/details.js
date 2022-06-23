import { createView } from './units.js';
let section = document.querySelector(`#movie-example`);
let containerDiv = section.querySelector(`.container`)
export async function details(e) {
    e.preventDefault();
    if (e.target.tagName == `BUTTON`) {
        e.target.parentNode
        let ownerID = undefined;
        if (localStorage.user) {
            ownerID = JSON.parse(localStorage.user);
        }

        let id = (e.target.parentNode.href).split('/details/')[1];
        let like = await takeLikes(id)
        let res = await fetch(`http://localhost:3030/data/movies`)
        let data = await res.json();

        for (const e of data) {
            if (e._id == id) {
                visualize(e, ownerID, like)
            }
        }
    }
    createView(section);
}

async function takeLikes(id) {
    let likeRes = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)
    let likes = await likeRes.json();
    console.log(likes);
    return likes
}


function visualize(e, ownerID, like) {
    containerDiv.innerHTML = ``;
    let div = document.createElement('div');
    div.classList = `row bg-light text-dark`;

    let blank = `<div class="row bg-light text-dark">
                <h1>Movie title: ${e.title}</h1>
                    <div class="col-md-8">
                        <img class="img-thumbnail" src=${e.img}
                            alt="Movie">
                    </div>
            <div class="col-md-4 texter"t-cen>
                <h3 class="my-3 ">Movie Description</h3>
                <p>${e.description}</p>`

    if (ownerID) {
        if (ownerID._id == e._ownerId) {
            let add = `<a class="btn btn-danger" href="/delete">Delete</a>
                                <a class="btn btn-warning" href="/edit">Edit</a>
                                <a class="btn btn-primary" href="/like">Like</a>
                                <span class="enrolled-span">Liked ${like}</span>
                                </div>
                                </div>`
            blank += add;
            div.innerHTML = blank;
        } else if (ownerID._id) {
            let add = `<a class="btn btn-primary" href="/like">Like</a>
                                <span class="enrolled-span">Liked ${like}</span>
                                </div>
                                </div>`
            blank += add;
            div.innerHTML = blank;
        }
    } else {
        let add = ` <span class="enrolled-span">Liked ${like}</span>
                                </div>
                                </div>`
        blank += add;
        div.innerHTML = blank;
    }
    containerDiv.appendChild(div);
}

