function main() {
    let inputArea = document.createElement('input');
    let infoBtn = document.createElement(`button`);
    let infoArea = document.createElement(`textarea`);
    let submitBtn = document.createElement('button');
    let para = document.createElement('p')
    let mainDiv = document.getElementById('serverMainDiv');
    infoBtn.textContent = `Info`;
    infoBtn.id = `info`;
    submitBtn.id = `submit`;
    submitBtn.textContent = `Submit`;
    para.textContent = `Whats ur mood ?`;
    mainDiv.appendChild(para);
    mainDiv.appendChild(submitBtn);
    mainDiv.appendChild(inputArea);
    mainDiv.appendChild(infoBtn);
    mainDiv.appendChild(infoArea);
    if (`geolocation` in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            let latitude = position.coords.latitude;
            document.getElementById(`latitude`).textContent = latitude
            let longitude = position.coords.longitude;
            document.getElementById(`longitude`).textContent = longitude
            //send location to server 

            let data = { latitude, longitude };
            let sub = document.getElementById(`serverMainDiv`)
            sub.addEventListener('click', (e) => {
                if (e.target.textContent == `Submit`) {
                    data.mood = inputArea.value;
                    onClickSub({
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    onClickGet({ method: 'GET' });
                } if (e.target.textContent == `Info`) {
                    onClickGet({ method: 'GET' });
                }
            })

        })
    } else {
        console.log(`geolocation not availble`);
    }
    function onClickSub(options) {
        if (inputArea.value != ``) {
            fetch('/api', options).then(response => response.json().then(data => console.log(data)))
        } else {
            alert('What type is ur current mood ? ')
        }
    }
    //get function
    function onClickGet(options) {
        fetch(`/api`, options)
            .then(response => {
                response.json()
                .then(data => {
                    infoArea.textContent = '';
                    data.forEach((el) => {
                        console.log(el.mood);
                        infoArea.textContent += `Peter said : ${el.mood}\n`
                    })
                })
            })
    }
}
//post function
main();