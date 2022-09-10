function attachEvents() {
    let error = function () {
        contentDiv.style.display = 'block';
        upcoming.style.display = `none`;
        today.childNodes[1].textContent = `Error`
        today.removeChild(today.childNodes[3]);
    }
    let currentSymbol = function (time) {
        if (time === `Sunny`) {
            return `&#x2600;`;
        }
        if (time === `Partly sunny`) {
            return `&#x26C5;`;
        }
        if (time === `Overcast`) {
            return `&#x2601;`;
        }
        if (time === `Rain`) {
            return `&#x2614;`;
        }
        if (time === `Degrees`) {
            return `&#176;`;
        }
    }
    let today = document.getElementById('current');
    let upcoming = document.getElementById('upcoming');
    let contentDiv = document.getElementById(`forecast`);
    let locationText = document.querySelector(`#location`);
    let url = `http://localhost:3030/jsonstore/forecaster/locations`;
    let submintBtn = document.getElementById(`submit`);
    let todayDivContainer = document.createElement('div');
    let upcomingContainer = document.createElement(`div`);
    let errorFlag = true;


    submintBtn.addEventListener('click', () => {
        errorFlag = true;
        fetch(url)
            .then(data => {
                data.json()
                    .then(e => {
                        e.forEach(element => {
                            errorFlag = false;
                            if (element.name === locationText.value) {
                                fetch(`http://localhost:3030/jsonstore/forecaster/today/${element.code}`)
                                    .then(data => {
                                        if (data.status === 200) {
                                            data.json()
                                                .then(e => {
                                                    today.childNodes[1].textContent = `Current conditions`;
                                                    todayDivContainer.innerHTML = ``;
                                                    upcoming.style.display = `block`;
                                                    contentDiv.style.display = 'block';
                                                    //Div for today time
                                                    todayDivContainer.className = 'forecasts';
                                                    let spanSymbol = document.createElement('SPAN');
                                                    spanSymbol.className = `codition symbol`;
                                                    spanSymbol.innerHTML = currentSymbol(e.forecast.condition);
                                                    let spanMain = document.createElement('SPAN');
                                                    spanMain.className = `condition`;
                                                    let spanName = document.createElement('SPAN');
                                                    spanName.className = `forecast-data`;
                                                    spanName.textContent = e.name;
                                                    spanMain.appendChild(spanName);
                                                    let spanHigh = document.createElement('SPAN');
                                                    spanHigh.className = `forecast-data`;
                                                    spanHigh.textContent = `${e.forecast.high}°/${e.forecast.low}°`;
                                                    spanMain.appendChild(spanHigh);
                                                    let spanLow = document.createElement('SPAN');
                                                    spanLow.className = `forecast-data`;
                                                    spanLow.textContent = e.forecast.condition;
                                                    spanMain.appendChild(spanLow);

                                                    todayDivContainer.appendChild(spanSymbol);
                                                    todayDivContainer.appendChild(spanMain);
                                                    today.appendChild(todayDivContainer);
                                                })
                                                // .catch(() => console.log(`Error`))
                                        }
                                    })
                                    // .catch(() => console.log(`Error`))
                            }
                            // upcoming !
                            if (element.name === locationText.value) {
                                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${element.code}`)
                                    .then(e => {
                                        if (e.status === 200) {
                                            e.json()
                                                .then(data => {
                                                    // console.log(data);
                                                    upcomingContainer.innerHTML = ``;
                                                    upcomingContainer.className = `forecast-info`;
                                                    for (const line of data.forecast) {
                                                        let spanUpcoming = document.createElement(`span`)
                                                        spanUpcoming.className = `upcoming`;
                                                        let spanSymbol = document.createElement(`span`)
                                                        spanSymbol.className = `symbol`;
                                                        spanSymbol.innerHTML = currentSymbol(line.condition);
                                                        spanUpcoming.appendChild(spanSymbol);
                                                        let spanDegree = document.createElement(`span`)
                                                        spanDegree.className = `forecast-data`;
                                                        spanDegree.textContent = `${line.high}°/${line.low}°`;
                                                        spanUpcoming.appendChild(spanDegree);
                                                        let spanIsRain = document.createElement(`sapn`)
                                                        spanIsRain.className = `forecast-data`;
                                                        spanIsRain.textContent = line.condition;
                                                        spanUpcoming.appendChild(spanIsRain);
                                                        upcomingContainer.appendChild(spanUpcoming);
                                                    }
                                                    upcoming.appendChild(upcomingContainer);
                                                })
                                                // .catch(() => console.log(`Error`))
                                        }
                                    })
                                    // .catch(() => console.log(`Error`))
                            }
                        });
                    })
                    // .catch(() => console.log(`Error`));
                    if (errorFlag) {
                        throw new Error;
                    }
            })
            .catch(() => error());
    })
}

attachEvents();