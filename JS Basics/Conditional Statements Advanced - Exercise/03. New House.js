function solve(input) {
    let type = input[0];
    let flowers = Number(input[1]);
    let budget = Number(input[2]);
    let sum
    switch (type) {
        case `Roses`:
            sum = flowers * 5;
            if (flowers > 80) {
                sum = sum * 0.90;
            } break;
        case `Dahlias`:
            sum = flowers * 3.80;
            if (flowers > 90) {
                sum = sum * 0.85;
            } break;
        case `Tulips`:
            sum = flowers * 2.80;
            if (flowers > 80) {
                sum = sum * 0.85;
            } break;
        case `Narcissus`:
            sum = flowers * 3; 
            if (flowers < 120) {
                sum = sum + sum * 0.15;
            }break;
        case `Gladiolus`:
            sum = flowers * 2.50; 
            if (flowers < 80) {
                sum = sum + sum*0.20;
            }break;
    }
    if (budget >= sum) {
        sum = budget - sum;
        console.log(`Hey, you have a great garden with ${flowers} ${type} and ${sum.toFixed(2)} leva left.`);
    }else {
        sum = Math.abs(budget - sum)
        console.log(`Not enough money, you need ${sum.toFixed(2)} leva more.`);
    }
}