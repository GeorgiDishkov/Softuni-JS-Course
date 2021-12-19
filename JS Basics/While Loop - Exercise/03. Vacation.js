function vacantion(input) {
    let index = 0;
    let neededMonney = Number(input[index])
    index++;
    let allMoney = Number(input[index])
    index ++;

    let counter = 0;
    let counterSpend = 0;
    let flag = true;

    while (allMoney < neededMonney) {
        counter++;
        let type = input[index];
        index ++;
        let tempMoney = Number(input[index]);
        index ++;
        if (type === `save`) {
            counterSpend = 0;
            allMoney += tempMoney;
        } if (type === `spend`) {
            allMoney -= tempMoney
            counterSpend++;
            if (allMoney < 0) {
                allMoney = 0;
            }

        } if (counterSpend >= 5) {
            flag = false
            console.log(`You can't save the money.\n${counter}`);
            break;
        }
    }
    if (flag) {
        console.log(`You saved the money for ${counter} days.`);
    }
}