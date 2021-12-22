
function solve(input) {
    let z = 0;
    let grupe = Number(input[z]);
    z++;
    let eachGrup
    let ppl
    let totalSum =0;
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;
    for (let i = 0; i < grupe; i++) {
        ppl = Number(input[z]);
        totalSum += ppl;
        if (ppl >=41) {
            let x = 0;
            sum5 += ppl;
        } else if (ppl >= 26) {
            let x = 0;
            sum4 += ppl;
        } else if (ppl >= 13) {
            let x = 0;
            sum3 += ppl;
        } else if (ppl >= 6) {
            let x = 0;
            sum2 += ppl;
        } else if (ppl <= 5) {
            let x = 0;
            sum1 += ppl;
        }
        z++
    }
    let answer1 = sum1 / totalSum * 100;
    let answer2 = sum2 / totalSum * 100;
    let answer3 = sum3 / totalSum * 100;
    let answer4 = sum4 / totalSum * 100;
    let answer5 = sum5 / totalSum * 100;
    console.log(`${answer1.toFixed(2)}%`);
    console.log(`${answer2.toFixed(2)}%`);
    console.log(`${answer3.toFixed(2)}%`);
    console.log(`${answer4.toFixed(2)}%`);
    console.log(`${answer5.toFixed(2)}%`);

}