function solve() {

    const departBtn = document.querySelector(`#depart`);
    const arriveBtn = document.querySelector(`#arrive`);
    let currentStop = {
        name: `depot`,
        next: `depot`
    }
    let info = document.querySelector(`#info`);

    function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${currentStop.next}`;
        let promisResult = fetch(url);
        // console.log(promisResult);
        promisResult
            .then(res => {
                console.log(res);
                res.json()
                    .then((e) => {
                        console.log(e);
                        info.textContent = `Next stop ${e.name}`;
                        currentStop.next = e.next;
                        currentStop.name = e.name;
                    })
            })
            .catch(err => { console.log(`Error`) })
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        info.textContent = `Arriving at ${currentStop.name}`
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();