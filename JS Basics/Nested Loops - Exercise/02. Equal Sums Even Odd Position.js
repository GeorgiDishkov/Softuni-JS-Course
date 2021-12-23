function equalSumsEvenOddPosition(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
   
    let current = 0;
    let result = '';

    for (let i = start; i < end; i++) {

        let oddNumber = 0;
        let evenNumber = 0;
        let numberToString = "" + i;

        for (let j = 0; j < numberToString.length; j++) {


            if (j % 2 === 0) {
                evenNumber += Number(numberToString[j]);
            } else {
                oddNumber += Number(numberToString[j]);
            }

        } if (oddNumber == evenNumber) {
            result += i + " "
        }
       
    }
    console.log(result);
}