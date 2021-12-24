function solve(day, age) {
    let sum = 0;
    let currentAge = Number(age);
    let flag = true;
    switch (day) {
        case `Weekday`:
            if (currentAge >= 0 && currentAge <= 18) {
                sum += 12;
            } else if (currentAge > 18 && currentAge <= 64) {
                sum += 18;
            } else if (currentAge > 64 && currentAge <= 122) {
                sum += 12;
            } else {
                console.log(`Error!`);
                flag=false;
            }
            break;
        case `Weekend`:
            if (currentAge >= 0 && currentAge <= 18) {
                sum += 15;
            } else if (currentAge > 18 && currentAge <= 64) {
                sum += 20;
            } else if (currentAge > 64 && currentAge <= 122) {
                sum += 15;
            } else {
                console.log(`Error!`);
                flag=false;
            }
            break;
        case `Holiday`:
            if (currentAge >= 0 && currentAge <= 18) {
                sum += 5;
            } else if (currentAge > 18 && currentAge <= 64) {
                sum += 12;
            } else if (currentAge > 64 && currentAge <= 122) {
                sum += 10;
            } else {
                console.log(`Error!`);
                flag=false;
            }
            break;
        default:
            console.log(`Error!`);
            flag=false;
            break;
    }
    if (flag) {
        console.log(`${sum}$`);
    }
}