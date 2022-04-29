const url = `http://localhost:3030/jsonstore/collections/books`
const tbodyEl = document.querySelector(`tbody`);
const loadBtn = document.querySelector(`#loadBooks`);
const formEl = document.querySelector(`form`)

function main() {
    tbodyEl.innerHTML = ``;
    loadBtn.addEventListener('click', () => {
        load(url)
    });
    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        tbodyEl.innerHTML = ``;
        let formData = new FormData(formEl);
        let formTitle = formData.get(`title`);
        let formAuthor = formData.get(`author`);
        submitNewData(url, formTitle, formAuthor);

    })
}

function load(url) {
    fetch(url)
        .then(response => response.json()
            .then(data => {
                tbodyEl.innerHTML = ``;
                Object.entries(data).forEach(el => {
                    let id = el[0];
                    let data = el[1];
                    if (data.author !== `` && data.title !== ``) {
                        let trEl = document.createElement('tr');
                        let nameTd = document.createElement(`td`);
                        nameTd.textContent = data.author;
                        let titleTd = document.createElement(`td`);
                        titleTd.textContent = data.title;
                        let buttons = document.createElement(`td`);
                        let editBtn = document.createElement(`button`);
                        editBtn.textContent = `Edit`;
                        editBtn.id = id;
                        editBtn.addEventListener('click', (e) => {
                            formEl.children[0].textContent = `Edit FORM`;
                            document.querySelector(`[name="author"]`).placeholder = data.author;
                            document.querySelector(`[name="title"]`).placeholder = data.title;
                            let currentId = e.target.id;
                            reqEdit(url, currentId);
                            document.querySelector(`[name="author"]`).value = ``;
                            document.querySelector(`[name="title"]`).value = ``;
                            load(url);
                        })
                        let delBtn = document.createElement(`button`);
                        delBtn.textContent = `Delete`;
                        delBtn.id = id;
                        delBtn.addEventListener('click', (e) => {
                            let currentId = e.target.id;
                            let currtentTr = e.target.parentNode.parentNode;
                            reqDelete(url, currentId);
                            currtentTr.innerHTML = ``;
                        })
                        buttons.appendChild(editBtn);
                        buttons.appendChild(delBtn);
                        trEl.appendChild(nameTd);
                        trEl.appendChild(titleTd);
                        trEl.appendChild(buttons);
                        tbodyEl.appendChild(trEl);
                    }
                })
            }))
}
function reqEdit(url, id) {
    currentUrl = `${url}/${id}`;
    let formData = new FormData(formEl);
    let formTitle = formData.get(`title`);
    let formAuthor = formData.get(`author`);
    if (formAuthor !== `` && formTitle !== ``) {
        let data = {
            author: formAuthor,
            title: formTitle,
        };
        let options = {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }
        fetch(currentUrl, options);
    }
}
function reqDelete(url, id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
    })
}
function submitNewData(url, title, author) {
    formEl.children[0].textContent = `FORM`;
    document.querySelector(`[name="author"]`).placeholder = `Author...`;
    document.querySelector(`[name="title"]`).placeholder = `Title...`;
    document.querySelector(`[name="author"]`).value = ``;
    document.querySelector(`[name="title"]`).value = ``;
    if (title !== `` && author !== ``) {
        let data = {
            author,
            title,
        }
        let options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }
        fetch(url, options);
    }
    load(url)
}

main();