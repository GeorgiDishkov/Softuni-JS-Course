function solve(input) {
    let index = 0;
    let student = input[index];
    index++;
    let i = 1
    let sum = 0;
    let count = 0;
    let flag = false;
    let graduateClass = 0

    while (i < input.length) {
        if (input[i] < 4) {
            flag = true;
            graduateClass = i;
            break;
        }
        sum = sum + Number(input[i]);
        i++;
        count++;
    }
    if (flag) {
        console.log(`${student} has been excluded at ${graduateClass} grade`);
    } else {
        sum = sum / count
        console.log(`${student} graduated. Average grade: ${sum.toFixed(2)}`);
    }
}