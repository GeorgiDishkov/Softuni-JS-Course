let url = `http://localhost:3030/jsonstore/messenger`
const nameInput = document.getElementsByName('author')[0];
const messageInput = document.getElementsByName('content')[0];
const refreshBtn = document.getElementById(`refresh`);
const sendBtn = document.getElementById(`sendBtn`);
const textArea = document.getElementById(`messages`);

function attachEvents() {
    //eventLiseners
    refreshBtn.addEventListener(`click`, () => {
        refreshFn(url)
    })
    //eventLiseners
    sendBtn.addEventListener(`click`, () => {
        sendFn(url, nameInput.value, messageInput.value)
    })  
    //send req 
}
function sendFn(url, name, message) {
    let data = {
        author : name,
        content : message,
    }
    let options = {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(data)
    }

    let currentReq = fetch(url , options)
    currentReq.then(response => console.log(response))
}
// fetch get req 
function refreshFn(url) {
    fetch(url).then(res => {
        if (res.status === 200) {
            res.json().then(data => {
                let comments = Object.values(data);
                textArea.textContent = ``;
                comments.forEach(el => {
                    textArea.textContent += `${el.author}: ${el.content}\n`
                });
            })
        }
    })
}
attachEvents();

