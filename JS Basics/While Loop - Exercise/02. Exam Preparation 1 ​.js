function examPreparation(input) {
    let index = 0;
    let badResult = Number(input[index])
    index++;
    let exam = input[index]
    let badResultCount = 0;
    let sum = 0;
    let temp = 0;
    let count = 0;

    while (input[index] !== `Enough`) {
        exam = input[index];
        index++
        temp = Number(input[index])
        if (temp <= 4) {
            badResultCount++;
        } if (input[index] === `Enough` || badResultCount >= badResult) {
            break;
        }
        sum = sum + temp
        index++;
        count++;

    } if (badResultCount == badResult) {
        console.log(`You need a break, ${badResult} poor grades.`);
    } else {
        sum = sum / count;
        console.log(`Average score: ${sum.toFixed(2)}\nNumber of problems: ${count}\nLast problem: ${exam}`);
    }
}