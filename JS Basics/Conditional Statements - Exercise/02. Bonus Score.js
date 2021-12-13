function solve (number){
    let input = Number(number[0])
    let bonus

    if (input <= 100){
        bonus = 5;
    }
    else if (input >100 && input <=1000){

        bonus = (input * 0.20);
    }
    else {
        bonus = (input * 0.10);
    }
    
    if (input % 2 == 0 ){

        bonus +=1;
    }
    else if (input %10 == 5)
    {
        bonus +=2;
    }

    console.log(bonus);
    console.log(input + bonus);


}