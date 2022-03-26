function solve (input) {
    let cities = Number(input.shift());
    let sum = 0;

    for (let day = 1; day <= cities; day++) {
        if(input.length == 0){
            break;
        }
        let cityName = input.shift();
        let ownerMonney = Number(input.shift());
        let ownerExpense = Number(input.shift());

        if(day % 3 === 0 && day % 5 != 0) {
            ownerExpense += ownerExpense* 0.50;
        }
        if(day % 5 === 0) {
            ownerMonney -= ownerMonney* 0.10;
        }
        let tempSum = ownerMonney - ownerExpense;
        sum += tempSum;
        console.log(`In ${cityName} Burger Bus earned ${tempSum.toFixed(2)} leva.`);
    }
    console.log(`Burger Bus total profit: ${sum.toFixed(2)} leva.`);
}

solve ((["15",
"Sofia",
"895.67",
"213.50",
"Plovdiv",
"2563.20",
"890.26",
"Burgas",
"2360.55",
"600.00"])
)
console.log(`================================================================`);
solve ((["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])
)
