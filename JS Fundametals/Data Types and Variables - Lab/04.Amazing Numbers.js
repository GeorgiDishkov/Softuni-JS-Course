function amazingNumbers (number) {

    number = number.toString()
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    } if (sum % 10 === 9) {
            console.log(`${number} Amazing? True`);
        } else {
            console.log(`${number} Amazing? False`);
        }
}