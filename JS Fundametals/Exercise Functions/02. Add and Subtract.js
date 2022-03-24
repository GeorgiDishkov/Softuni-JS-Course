function addAndSubtract(first, second, third) {

    function sum (a , b){
        let result = a + b ;
        return result;
    }
    function subtract (a , b){
        let result = a - b;
        return result;
    }

    let sumResult = sum (first , second)
    let finalResult = subtract (sumResult , third)

    return finalResult;
}