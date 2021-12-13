function depositCalculator (input) {

    let deposit = Number(input[0]);
    let date = Number(input[1]);
    let yearPercent = Number(input[2]);

    let fullPercent = deposit * (yearPercent/100);
    let percentPerDay = fullPercent/12;
    let sum = deposit + date * percentPerDay;

    console.log(sum);
}