function solve (input) {
    let places = input.shift().split('@').map(Number);
    let position = 0;
    let success = true;
    for (let i = 0; i < input.length; i++) {
        if(input[i] === 'Love!'){
            break;
        }
        [jump , count] = input[i].split(' ');
        position += Number(count);
        while (position >= places.length ) {
            position = 0;
        }
        if(places[position] > 0){
            places[position] -= 2;
            if(places[position] <= 0){
                places[position] = 0;
                console.log(`Place ${position} has Valentine's day.`);
            }
        }else {
            console.log(`Place ${position} already had Valentine's day.`);
        }
    }    
    let loveCounter = 0;
    for (const line of places) {
        if(!line == 0){
            loveCounter++;
            success = false;
        }
    }
    console.log(`Cupid's last position was ${position}.`);
    if(success){
        console.log(`Mission was successful.`);
    }else {
        console.log(`Cupid has failed ${loveCounter} places.`);
    }
}

solve ((["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
);
console.log(`================================================================`);
solve((((((["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
)))));