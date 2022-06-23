let container = document.querySelector(`.topic-container`);

export function refresh() {
    fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`)
        .then(response => response.json()
            .then(data => {
                let postDiv = document.createElement('div');
                postDiv.ClassName = 'commnet';
                for (const line in data) {
                    let headerDiv = document.createElement('div');
                    headerDiv.className = 'header';
                    headerDiv.id = data[line]._id;
                    let img = document.createElement('img');
                    img.src = ('./static/profile.png');
                    img.alt = `avatar`; 
                    let para = document.createElement('p');
                    let span = document.createElement('span');
                    span.textContent = `${data[line].username}`;
                    para.appendChild(span);
                    para.textContent = `posted on `;
                    let currentTime = document.createElement('time');
                    currentTime.textContent = `${data[line].currentTime}`;
                    para.appendChild(currentTime);
                    let paraPostCont = document.createElement(`p`);
                    paraPostCont.textContent = `${data[line].comment}`;
                    headerDiv.appendChild(img);
                    headerDiv.appendChild(para);
                    headerDiv.appendChild(paraPostCont);
                    postDiv.appendChild(headerDiv);
                }
                container.appendChild(postDiv);
            }));
}

export function submit(title, username, comment) {
    let rightTime = new Date();
    let currentTime = `${rightTime.toLocaleString()}`;
    console.log(currentTime);
    let data = {
        title: title,
        username: username,
        comment: comment,
        currentTime
    }

    let options = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }
    fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, options)
        .catch(err => logger.error(`error`))
}