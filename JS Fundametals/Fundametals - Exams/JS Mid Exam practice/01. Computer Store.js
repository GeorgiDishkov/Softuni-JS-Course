function computerStore(arr) {
    let sum = 0;
    let taxes = 0;
    let sumWithoutTaxes = 0;

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        if (temp === `regular` || temp === `special`) {
            if (temp === `regular`) {
                sumWithoutTaxes = sum;
                taxes += sum * 0.20;
                sum += taxes;
                break;
            } else {
                sumWithoutTaxes = sum;
                taxes += sum * 0.20;
                sum += taxes;
                sum -= sum * 0.10;
                break;
            }
        }
        temp = Number(temp);
        if (temp > 0) {
            sum += temp;
            continue;
        } else {
            console.log(`Invalid price!`);
            continue;
        }
    }
    if (sum > 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sumWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${sum.toFixed(2)}$`);
    } else {
        console.log(`Invalid order!`);
    }
}