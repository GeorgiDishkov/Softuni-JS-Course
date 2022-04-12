function attachEvents() {
    let viewBtn = document.querySelector('#btnViewPost');
    let select = document.getElementById('posts');
    let postUrl = `http://localhost:3030/jsonstore/blog/posts`;
    let commentsUlEl = document.getElementById('post-comments');
    let headOne = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    fetch(postUrl)
        .then(response => {
            response.json()
                .then(data => {
                    for (const line in data) {
                        // take data for dropdown manu
                        let opiton = document.createElement('option');
                        opiton.value = line
                        opiton.textContent = data[line].title;
                        select.appendChild(opiton);
                    }
                }
                )
        })
    viewBtn.addEventListener(`click`, e => {
        commentsUlEl.innerHTML = ``;
        let currentPostId = select.value;
        //create the current post 
        fetch(`http://localhost:3030/jsonstore/blog/posts/${currentPostId}`)
            .then(response => {
                response.json()
                    .then(data => {
                        console.log(data.title);
                        headOne.textContent = data.title
                        console.log(data.body);
                        postBody.textContent = data.body;
                    })

            })

        //take comments 
        fetch(`http://localhost:3030/jsonstore/blog/comments`)
            .then(response => {
                response.json()
                    .then(data => {
                        for (const key in data) {
                            if (currentPostId === data[key].postId) {
                                let currentComment = document.createElement(`li`);
                                currentComment.textContent = data[key].text;
                                commentsUlEl.appendChild(currentComment);
                            }
                        }
                    })
            })
    })
}

attachEvents();