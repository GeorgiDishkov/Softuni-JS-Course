function traveling (input){
    let index = 0;
    let component = input[index];
    let money = 0;
    while (input[index] !== `End`) {
        component = input[index];
        index ++;
        let price = Number(input[index]);
        index ++;
        let sum = 0;

        while (sum < price ) {
            money = Number(input[index]);
            sum += money
            index ++;
        }
        console.log(`Going to ${component}!`);
    }
}