export function home() {
    let mainContnt = document.getElementById(`home-view`)
    mainContnt.style.display = `block`;
    let loadCathes = document.getElementById(`main`);
    loadCathes.innerHTML = ``;
    let loadBtn = mainContnt.querySelector(`.load`);
    loadBtn.addEventListener("click", (e) => {
        let options = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }
        fetch(`http://localhost:3030/data/catches`, options).then(res => res.json().then(data => {
            let fieldSetMain = document.createElement("fieldset");
            fieldSetMain.classList.add("main")
            //legend (Cathes)
            let legend = document.createElement(`legend`)
            legend.textContent = `Catches`;
            fieldSetMain.appendChild(legend);
            // container for all cathes
            let divCatchContent = document.createElement(`div`);
            data.forEach(e => {
                console.log(e.angler, e.weight,  e.species,e.location, e.bait, e.captureTime, e._id , e._ownerId);
                divCatchContent.appendChild(createCathes(e.angler, e.weight,  e.species,e.location, e.bait, e.captureTime, e._id , e._ownerId))
            })
            loadCathes.appendChild(divCatchContent);
        }))
    })

}
function createCathes(anglerValue, anglerWeight, anglerSpaces, anglerLocatinon, anglerBait, anglerCapture , id , ownerId) {
    // each content container
    let silgleCatchContent = document.createElement(`div`);
    //Angler 
    let labelElAngler = document.createElement(`label`);
    labelElAngler.textContent = `Angler`;
    silgleCatchContent.appendChild(labelElAngler);
    let inputElAngler = document.createElement(`input`);
    inputElAngler.value = anglerValue
    inputElAngler.classList.add("angler");
    inputElAngler.type = "text";
    silgleCatchContent.appendChild(inputElAngler);
    // Weight
    let labelElWeight = document.createElement(`label`);
    labelElWeight.textContent = `Weight`;
    silgleCatchContent.appendChild(labelElWeight);
    let inputElWeight = document.createElement(`input`);
    inputElWeight.value = anglerWeight
    inputElWeight.classList.add("weight");
    inputElWeight.type = "text";
    silgleCatchContent.appendChild(inputElWeight);
    // Spacies
    let labelElSpacies = document.createElement(`label`);
    labelElSpacies.textContent = `Spacies`;
    silgleCatchContent.appendChild(labelElSpacies);
    let inputElSpacies = document.createElement(`input`);
    inputElSpacies.value = anglerSpaces
    inputElSpacies.classList.add("spacies");
    inputElSpacies.type = "text";
    silgleCatchContent.appendChild(inputElSpacies);
    // Location
    let labelElLocation = document.createElement(`label`);
    labelElLocation.textContent = `Location`;
    silgleCatchContent.appendChild(labelElLocation);
    let inputElLocation = document.createElement(`input`);
    inputElLocation.value = anglerLocatinon
    inputElLocation.classList.add("location");
    inputElLocation.type = "text";
    silgleCatchContent.appendChild(inputElLocation);
    // Bait
    let labelElBait = document.createElement(`label`);
    labelElBait.textContent = `Bait`;
    silgleCatchContent.appendChild(labelElBait);
    let inputElBait = document.createElement(`input`);
    inputElBait.value = anglerBait;
    inputElBait.classList.add("bait");
    inputElBait.type = "text";
    silgleCatchContent.appendChild(inputElBait);
    // Capture
    let labelElCapture = document.createElement(`label`);
    labelElCapture.textContent = `Capture`;
    silgleCatchContent.appendChild(labelElCapture);
    let inputElCapture = document.createElement(`input`);
    inputElCapture.value = anglerCapture;
    inputElCapture.classList.add("capture");
    inputElCapture.type = "text";
    silgleCatchContent.appendChild(inputElCapture);
    let updateBtn = document.createElement(`button`);
    updateBtn.classList.add("update")
    updateBtn.id = id;
    update.addEventListener("click", ()=>{
        fetch(``)
    })


    return silgleCatchContent
}   