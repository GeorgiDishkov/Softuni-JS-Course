function solve (input) {
    let sum = 0;
    let i = 0
    let temp = 0;
    while (i <= input.length) {
        if (input[i] === `NoMoreMoney`){
            break;
        }if(input[i] <= 0){
            console.log(`Invalid operation!`);
            break;
        }
        temp = 0
        temp = Number(input[i])
        console.log(`Increase: ${temp.toFixed(2)}`);
        sum = sum + temp;
        i++
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}