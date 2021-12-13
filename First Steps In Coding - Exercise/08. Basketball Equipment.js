function basketballEquipment (input) {

    let yearTax = Number(input[0]);
    let kecove = yearTax *0.60;
    let ekip = kecove *0.80;
    let ball = ekip/4;
    let acc = ball/5;
    let finalCost = yearTax + kecove +ekip + ball + acc;
    console.log(finalCost);
}