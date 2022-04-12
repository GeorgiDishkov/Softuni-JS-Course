function solution() {


    let main = document.querySelector(`#main`);
    let lsitUrl = `http://localhost:3030/jsonstore/advanced/articles/list`
    fetch(lsitUrl)
        .then(response => {
            response
                .json()
            .then(data => {
                for (const line of data) {
                    let acordeon = document.createElement(`div`);
                    acordeon.className = `accordion`;
                    let headDivEl = document.createElement(`div`);
                    headDivEl.className = `head`;
                    let span = document.createElement(`span`);
                    span.textContent = line.title;
                    headDivEl.appendChild(span);
                    let moreBtn = document.createElement(`button`);
                    moreBtn.textContent = `MORE`
                    moreBtn.className = `button`;
                    moreBtn.id = line._id;
                    moreBtn.addEventListener('click', onClick);
                    headDivEl.appendChild(moreBtn);
                    // Extra 
                    let extraDivEl = document.createElement(`div`);
                    extraDivEl.className = `extra`;
                    extraDivEl.style.display = `none`;
                    let paraEl = document.createElement(`p`);
                    let paraUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${line._id}`;
                    fetch(paraUrl)
                        .then(response => response.json().then(data => paraEl.textContent = data.content).catch(err => console(`Error`)))
                    .catch(err => console(`Error`))
                    extraDivEl.appendChild(paraEl);
                    acordeon.appendChild(headDivEl);
                    acordeon.appendChild(extraDivEl);
                    main.appendChild(acordeon);
                }
            }).catch(err => console(`Error`))
        }).catch(err => console(`Error`))
    function onClick(e) {
        let acordeon = e.target.parentNode.parentNode;
        if(e.target.textContent === `More`){
            acordeon.children[1].style.display = `block`;
            e.target.textContent = `Less`
        }else {
            acordeon.children[1].style.display = `none`;
            e.target.textContent = `More`
        }
        // let currentId = e.target.id;
    }
}

solution();