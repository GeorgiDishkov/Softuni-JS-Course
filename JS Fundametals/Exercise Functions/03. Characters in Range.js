function charctersInRange (firstChar , secondChar) {
    let firstNum = firstChar.charCodeAt(0);
    let secondNum = secondChar.charCodeAt(0);
    let result = ``;

    if (firstNum > secondNum){
        let temp = firstNum;
        let secondTemp = secondNum
        firstNum = secondTemp;
        secondNum = temp;
    }
    for (let i = firstNum+1; i < secondNum; i++) {
        let temp = ``;
       temp += String.fromCharCode(i)
        result += (` ${temp}`)
    }
    return result;
}
