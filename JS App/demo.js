function numberChecker(input) {
    input = Number(input);
    if (isNaN(input)) {
        throw new Error('The input is not a number!');
    }

    if (input % 2 === 0) {
        return 'The number is even!';
    } else {
        return 'The number is odd!';
    }

}
console.log(numberChecker(!NaN));
