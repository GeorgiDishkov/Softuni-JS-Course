function solve(input) {
    let town = input[0]
    let cash = Number(input[1]);
    let sum
if (cash <=0){
    console.log(`error`);
}else{
    switch (town) {
        case `Sofia`:
            if (cash > 10000) {
                sum = cash * 0.12
                console.log(sum.toFixed(2));
            } else if (cash > 1000) {
                sum = cash * 0.08
                console.log(sum.toFixed(2));
            } else if (cash > 500) {
                sum = cash * 0.07
                console.log(sum.toFixed(2));
            } else if (cash >= 0) {
                sum = cash * 0.05
                console.log(sum.toFixed(2));
            }
            break;
        case `Varna`:
            if (cash > 10000) {
                sum = cash * 0.13
                console.log(sum.toFixed(2));
            } else if (cash > 1000) {
                sum = cash * 0.10
                console.log(sum.toFixed(2));
            } else if (cash > 500) {
                sum = cash * 0.075
                console.log(sum.toFixed(2));
            } else if (cash >= 0) {
                sum = cash * 0.045
                console.log(sum.toFixed(2));
            }
            break;
        case `Plovdiv`:
            if (cash > 10000) {
                sum = cash * 0.145
                console.log(sum.toFixed(2));
            } else if (cash > 1000) {
                sum = cash * 0.12
                console.log(sum.toFixed(2));
            } else if (cash > 500) {
                sum = cash * 0.08
                console.log(sum.toFixed(2));
            } else if (cash >= 0) {
                sum = cash * 0.055
                console.log(sum.toFixed(2));
            }
            break;
         default : 
         console.log(`error`);
         break;
    }

}
}