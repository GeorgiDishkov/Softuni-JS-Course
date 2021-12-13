function solve (input) { 
    let worldRecord = Number(input[0])
    let lenght = Number(input[1])
    let Meter = Number(input[2])
    
    let iwansTime = lenght * Meter;
    let slowTime = Math.floor(lenght / 15);
    slowTime = (slowTime * 12.5);
    let finalTime = (iwansTime + slowTime);

    if (worldRecord > finalTime){
        console.log(` Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    }
    else {
        finalTime = Math.abs(finalTime-worldRecord).toFixed(2)
        console.log(`No, he failed! He was ${finalTime} seconds slower.`);
    }
   }