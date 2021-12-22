function solve (input) {
    let firstNumber = Number(input);
    let secondNumber = 0;

    while (secondNumber <= firstNumber) {
        secondNumber = secondNumber * 2 + 1;
        if(secondNumber > firstNumber){
            break;
        }
        console.log(secondNumber);
    }
}