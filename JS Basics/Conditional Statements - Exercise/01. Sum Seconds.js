function solve (input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
    let totalSecond =firstTime +secondTime +thirdTime;
    let minute;
    let seconds;
    minute = Math.floor(totalSecond/60); // закръгляме до по-ниското число , за да изкараме точните минути
    seconds = totalSecond % 60; // остатъка е = на секундите 
    if (seconds < 10){
        console.log(`${minute}:0${seconds}`);
    } else {
        console.log(`${minute}:${seconds}`);
    }
}