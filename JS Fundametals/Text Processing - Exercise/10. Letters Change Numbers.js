function solve(input) {
    let sum = 0;
    let allSums = []
    let arr = input.split(` `)
    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        //check for empty arrays 
        if (temp.length === 0) {
            let empty = arr.splice(i, 1)
            i--;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        let current = arr[i];
        current = current.split(``);

        let firstEl = current.shift();
        let lastEl = current.pop();

        let numbers = current.join(``)
        numbers = Number(numbers)
        if (sum == 0) {
            sum = numbers
        }
        if (firstEl == firstEl.toUpperCase()) {
            let alphabetNumber = firstEl.charCodeAt();
            alphabetNumber = alphabetNumber - 64
            sum /= alphabetNumber
        } if (firstEl == firstEl.toLowerCase()) {
            let alphabetNumber = firstEl.charCodeAt();
            alphabetNumber = alphabetNumber - 96
            sum *= alphabetNumber
        } if (lastEl == lastEl.toUpperCase()) {
            let alphabetNumber = lastEl.charCodeAt();
            alphabetNumber = alphabetNumber - 64
            sum -= alphabetNumber
        } if (lastEl == lastEl.toLowerCase()) {
            let alphabetNumber = lastEl.charCodeAt();
            alphabetNumber = alphabetNumber - 96
            sum += alphabetNumber
        }
        allSums.push(sum);
    }
    for (const count of allSums) {
        totalSum += count
    }
    console.log(totalSum.toFixed(2));

}