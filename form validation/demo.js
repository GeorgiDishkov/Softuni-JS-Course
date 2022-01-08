function numberValidation (number){
    let splitedNum = number.toString().split(``);
    let flag = true;
    for (const line of splitedNum) {
        let numCheck = Number(line).toString();
        if(numCheck == `NaN`) {
        flag = false;
        break;
        }
    }
    if(flag && number != ``){
        console.log(`true`);
        return true;
    }else {
        console.log(`false`);
        return false;
    }
}
numberValidation(3124123412)
