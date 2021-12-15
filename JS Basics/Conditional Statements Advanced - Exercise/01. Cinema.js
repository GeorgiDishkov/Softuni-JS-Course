function solve(input) {
    let type = input[0];
    let colon = input[1];
    let redove = input[2];
    let allSides
    let sum

    allSides = colon * redove

    if (type === `Premiere`) {
        sum = allSides * 12
        console.log(sum.toFixed(2));
    } else if (type === `Normal`) {
        sum = allSides * 7.5
        console.log(sum.toFixed(2));
    } else if (type === `Discount`) {
        sum = allSides * 5
        console.log(sum.toFixed(2));
    }
}