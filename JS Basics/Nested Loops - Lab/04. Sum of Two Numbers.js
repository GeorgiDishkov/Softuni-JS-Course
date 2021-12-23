function sumOfTwoNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let magicNumber = Number(input[2])
    let flag = false;

    let sum = 0;
    let pointer = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        for (let j = firstNumber; j <= secondNumber; j++) {
            sum = i + j
            pointer++;
            if (sum === magicNumber) {
                console.log(`Combination N:${pointer} (${i} + ${j} = ${magicNumber})`);
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
    } if (flag === false) {
        console.log(`${pointer} combinations - neither equals ${magicNumber}`);
    }
}