function factorialDivision (firstNumber , secondNumber) {

    function factrial (a){
        let sum = 1;
        for (let i = 1; i <= a; i++) {
            let temp = i;
            sum *= temp;
        }
        return sum;
    }
    let firstResult = factrial(firstNumber);
    let secondResult = factrial(secondNumber);
    console.log((firstResult / secondResult).toFixed(2));
}