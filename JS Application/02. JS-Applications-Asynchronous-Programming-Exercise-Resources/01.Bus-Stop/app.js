function getInfo() {
    let stopId = document.getElementById(`stopId`).value;
    let ulBuses = document.getElementById(`buses`);
    let stopName = document.getElementById(`stopName`);
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    let promiseResult = fetch(url);
    promiseResult
        .then(response => {
            
            if (response.status == 200) {
                ulBuses.innerHTML = ``;
                response.json()
                .then(result => {
                        stopName.textContent = result.name;
                        Object.entries(result.buses).forEach((element) => {
                            let liElement = document.createElement('li');
                            liElement.textContent = `Bus ${element[0]} arrives in ${element[1]} minutes`;

                            ulBuses.appendChild(liElement);
                        })
                    })
            }
        })
        .catch(error => {
            stopName.textContent = `Error`;
        });
}   