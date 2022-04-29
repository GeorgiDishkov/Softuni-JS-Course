const url = `http://localhost:3030/jsonstore/phonebook`;
const loadBtn = document.getElementById(`btnLoad`);
const createBtn = document.getElementById(`btnCreate`);
const personInput = document.getElementById(`person`);
const phoneInput = document.getElementById(`phone`);
const ulElement = document.getElementById(`phonebook`);

function attachEvents() {
    // load 
    loadBtn.addEventListener("click", () => {
        loadReq(url);
    })
    // create
    createBtn.addEventListener("click", () => {
        createReq(url, personInput, phoneInput);
    })

}

attachEvents();

function loadReq(url) {
    fetch(url).then(response => {
        if (response.status === 200) {
            response.json().then(data => {
                ulElement.innerHTML = ``;
                Object.values(data).forEach(el => {
                    let liEl = document.createElement(`li`);
                    liEl.textContent = `${el.person}: ${el.phone} `;
                    // delete
                    let delBtn = document.createElement(`button`);
                    delBtn.textContent = `delete`;
                    delBtn.addEventListener(`click`, () => {
                        deleteReq(el._id, el.person, el.phone)
                        loadReq(url);
                    })
                    liEl.appendChild(delBtn);
                    ulElement.appendChild(liEl);
                })
            })
        }
    })
}
function createReq(url, person, phone) {
    currentPerson = person.value;
    currentPhone = phone.value;
    if (currentPerson !== `` && currentPhone !== ``) {
        let data = {
            person: currentPerson,
            phone: currentPhone,
        }
        let options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }

        fetch(url, options);
        loadReq(url);
    }
}
function deleteReq(id, person, phone) {
    let newUrl = url + `/` + id;
    let options = {
        method: 'DELETE',
    }
    fetch(newUrl, options)
}