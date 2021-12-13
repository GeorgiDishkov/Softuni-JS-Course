function solve (input){

    let serialName = input[0]
    let serialTime = Number(input[1])
    let chill = Number(input[2])

    let launchTime = chill / 8 
    let chillTime = chill / 4

    let freeTime = chill - (launchTime + chillTime);

    if (serialTime <= freeTime){
        freeTime = Math.abs(freeTime - serialTime);
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(freeTime)} minutes free time.`);        
    }else{
        freeTime = Math.abs(freeTime - serialTime);        
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(freeTime)} more minutes.`);
    }

}