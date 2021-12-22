function solve(input) {
    let index = 0;
    const firstNumber = Number(input[index]);
    index++;
    let sum = 0;
    while (index < input.length) {
        if (sum > firstNumber) {
            break;
        }
        sum += Number(input[index]);
        index++
    }
    console.log(sum);
}