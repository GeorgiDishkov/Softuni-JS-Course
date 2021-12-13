function solve(input) {
    //array of days 
    let pointer = 0;
    let sumOfMoney = 0;
    let bitcoins = 0;
    let firstBitcoin = ``
    for (let line of input) {
        pointer++;
        let tempSum = 0;
        if (pointer % 3 == 0) {
            tempSum = (line * 0.70) * 67.51
        }else {
            tempSum = (line * 67.51)
        }
        sumOfMoney += tempSum;

        while (sumOfMoney >= 11949.16) {
            if (bitcoins == 0){
                firstBitcoin += (`Day of the first purchased bitcoin: ${pointer}`)
                bitcoins++;
                sumOfMoney -= 11949.16;
            }else {
                bitcoins++;
                sumOfMoney -= 11949.16;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (firstBitcoin !== ``) {
        console.log(firstBitcoin);
    }
    console.log(`Left money: ${sumOfMoney.toFixed(2)} lv.`);

}
solve([100, 200, 300])
solve([50, 100])
solve([3124.15, 504.212, 2511.124])