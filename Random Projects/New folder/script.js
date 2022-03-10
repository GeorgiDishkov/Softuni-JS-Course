
function planeMove(currentKey) {
    console.log(r);
    if (currentKey == `a`) {
        let rs = getComputedStyle(r);
        console.log(rs.left = );
    }
    if (currentKey == `d`) {
        console.log(`key is -d-`);
    }
    if (currentKey == `s`) {
        console.log(`key is -s-`);
    }
    if (currentKey == `w`) {
        console.log(`key is -w-`);
    }
}

let r = document.querySelector(':root');
let mainBody = document.getElementById('mainDivv-background');
let plane = document.getElementById("plane");

window.addEventListener("keydown", function (event) {
    planeMove(event.key);
}, true);


// main.addEventListener(`keypress` , b) {
//     console.log(`key - a pressed`);
