function solve(input) {
    let age = Number(input[0]);
    let price = Number(input[1]);
    let toyPrice = Number(input[2]);
    let monney = 0;
    let toyCount = 0;
    let plus =  10;
    for (let i = 1; i <= age; i++) {
        if (i % 2 !== 0) {
            toyCount++;
        } else {
            monney = monney + plus - 1
            plus = plus + 10;
        }
    }
    monney = monney + (toyCount * toyPrice);

        if (monney >= price) {
            let sum = Math.abs(monney - price)
            console.log(`Yes! ${sum.toFixed(2)}`);
        } else if (monney < price) {
            let sum = Math.abs(monney - price)
            console.log(`No! ${sum.toFixed(2)}`);
        }
}