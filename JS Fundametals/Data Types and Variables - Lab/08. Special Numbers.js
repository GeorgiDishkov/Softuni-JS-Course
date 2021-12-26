function specialNumbers (number) {

    for (let  i = 1;  i <= number;  i++) {
        let newNum = '';
        let sum = 0;
        newNum = i + ``
        for (let index = 0; index < newNum.length; index++) {
            let lastNumber = Number(newNum[index])
            sum += lastNumber;
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }
    }
}