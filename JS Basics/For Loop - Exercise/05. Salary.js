function solve (input) {
    let tabs = Number(input[0]);
    let zaplata = Number(input[1]);
    let sum =0;
    
    for (let i = 2; i <tabs +2; i++) {
       if (input[i] === `Facebook`) {
           zaplata = zaplata - 150;
        }else if (input[i] === `Instagram`){
            zaplata -= 100;
        }else if(input[i] === `Reddit`) {
            zaplata -= 50;
        }
        if (zaplata <= 0) {
            console.log(`You have lost your salary.`);
            break;
    }
    }
    if(zaplata > 0){
    console.log(zaplata);
    }
    }