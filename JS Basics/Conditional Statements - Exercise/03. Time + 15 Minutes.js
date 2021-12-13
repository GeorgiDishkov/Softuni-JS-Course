function solve (input) {

    let hour = Number(input[0]);
    let min = Number(input[1]);
    let maxMin = hour *60 + min;
    maxMin = maxMin +15; 
    let totalHour = Math.floor(maxMin/60);
    let totalMin = maxMin%60;

    if (totalHour>=24){
        totalHour = 0;
    }
    if (totalMin < 10 ){
        console.log(`${totalHour}:0${totalMin}`);
    }
    else {
        console.log(`${totalHour}:${totalMin}`);
    }
}