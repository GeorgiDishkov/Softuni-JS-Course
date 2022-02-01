window.addEventListener('load', solve);
// window.addEventListener('onload', solve);

function solve(e) {
    window.removeEventListener('load', solve);
    console.log(`in load`);
    let body = document.getElementsByTagName(`BODY`);
    body[0].addEventListener(`click`, onClick);

    function onClick(e) {
        if (e.target.innerText.toLowerCase() == `add`) {
            const genre = document.getElementById(`genre`).value;
            const nameOfSong = document.getElementById(`name`).value;
            const nameOfAuthor = document.getElementById(`author`).value;
            let dateofSong =document.getElementById(`date`).value;
            let collection = document.getElementById(`all-hits`);

            // if (genre != `` && nameOfSong != `` && nameOfAuthor != `` && dateofSong > 1) {
                let thisContent = document.createElement(`div`);
                thisContent.className = "hits-info";
                let imgSorce = document.createElement(`img`);
                imgSorce.src = "./static/img/img.png";
                thisContent.appendChild(imgSorce);
                let h2Genre = document.createElement(`h2`);
                h2Genre.innerText = genre;
                thisContent.appendChild(h2Genre);
                let h2Name = document.createElement(`h2`);
                h2Name.innerText = nameOfSong;
                thisContent.appendChild(h2Name);
                let h2Author = document.createElement(`h2`);
                h2Author.innerText = nameOfAuthor;
                thisContent.appendChild(h2Author);
                let h2Date = document.createElement(`h2`);
                h2Date.innerText = dateofSong;
                thisContent.appendChild(h2Date);
                let buttonSave = document.createElement(`button`);
                buttonSave.className="save-btn"
                buttonSave.innerText = `Save song`;
                thisContent.appendChild(buttonSave);
                let buttonLike = document.createElement(`button`);
                buttonLike.className="like-btn"
                buttonLike.innerText = `Like song`;
                thisContent.appendChild(buttonLike);
                let buttonDel = document.createElement(`button`);
                buttonDel.className="delete-btn"
                buttonDel.innerText = `Dell song`;
                thisContent.appendChild(buttonDel);

                collection.appendChild(thisContent);
            // }
        }
    }
}


