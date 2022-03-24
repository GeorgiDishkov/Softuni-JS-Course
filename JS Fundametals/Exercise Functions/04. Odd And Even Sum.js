function oddAndEvenSum (number) {
    let stringNumber = number.toString();
    stringNumber = stringNumber.split(``)
    let sumOfEven = 0;
    let sumOfOdd  = 0;
    for (let i = 0; i < stringNumber.length; i++) {
        let temp = Number(stringNumber[i]);

        if (temp % 2 === 0) {
            sumOfEven += temp;
        }else {
            sumOfOdd += temp;
        }
    }
    console.log(`Odd sum = ${sumOfOdd}, Even sum = ${sumOfEven}`);
}