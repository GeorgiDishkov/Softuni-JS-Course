function solve(input, target) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        firstNumber = Number(input[i]);
        for (let q = i+1; q < input.length; q++) {
            secondNumber = Number(input[q]);
            if((firstNumber+secondNumber) == target) {
                console.log(`${firstNumber} ${secondNumber}`);
            }
        }
    }
}

solve([1, 2, 3, 4, 5, 6],
    6);