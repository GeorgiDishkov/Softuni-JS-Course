function specialNumber(input) {
    let rightNumber = Number(input[0]);
    let collector = '';
    let downStayrCollector = '';
    let flag = false;
    for (let i = 1111; i < 9999; i++) {
        flag = false;
        let numToString = i + ``;
        for (let j = 0; j < numToString.length; j++) {
            let temp = Number(numToString[j])
            if (rightNumber % temp !== 0) {
                downStayrCollector = ''
                flag = false
                break;
            }
            else if (rightNumber % temp === 0) {
                downStayrCollector += temp + ``
                flag = true;
            }
        } if (flag) {
            collector += downStayrCollector + ` `;
            downStayrCollector = '';
        }
    }
    console.log(collector);
}