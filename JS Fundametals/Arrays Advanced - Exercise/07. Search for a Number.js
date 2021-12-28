function searchForANumber (firstArr , secondArr) {
    let countForNewArr = Number(secondArr[0]);
    let repeatForDelite = Number(secondArr[1]);
    let numberForSearch = Number(secondArr[2]);
    let result = firstArr.slice(0 , countForNewArr)
    result.splice(0 , repeatForDelite)
    let findNumbers = 0
    for (let i = 0; i < result.length; i++) {
        let current = result[i];
        if (current === numberForSearch){
            findNumbers ++;
        }else {
            continue;
        }
    }
    console.log(`Number ${numberForSearch} occurs ${findNumbers} times.`);
}