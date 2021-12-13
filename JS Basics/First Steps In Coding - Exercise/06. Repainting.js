function repainting (input) {

    let plasitc = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]*5.00);
    let hours = Number(input[3]);

    let forSure1 = (plasitc+2)*1.50;
    let forSure2 = (paint+(paint*0.10))*14.50;
    let sum = (forSure1 + forSure2 + thinner + 0.40);
    let masterRreward = (sum*0.30)*hours;
    let finalSum = masterRreward+sum;
    console.log(finalSum);        
}