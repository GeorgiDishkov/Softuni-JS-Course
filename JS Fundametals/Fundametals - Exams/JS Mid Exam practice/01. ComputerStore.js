function solve(input) {

    let type = input.pop();
    let sum = 0;
    let tax = 0;
    for (let i = 0; i < input.length; i++) {
        let currentNum = Number(input[i])
        if (currentNum > 0) {
            sum += currentNum;
        } else {
            console.log(`Invalid price!`);
        }
    }
    if (sum > 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        tax = sum * 0.20;
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        sum += tax;
        if (type === `special`) {
            sum -= sum * 0.10;
        }
        console.log(`-----------`);
        console.log(`Total price: ${sum.toFixed(2)}$`);
    } else {
        console.log(`Invalid order!`);
    }
}
solve(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
)

console.log(`========`);

solve(([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
)

console.log(`===============`);

solve(([
    'regular'
])
)