function solve(input) {
    let n1 = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= n1; i++) {
        if (input[i] < 200) {
            p1 = p1 + 1 
        } else if (input[i] >= 200 && input[i] <= 399) {
            p2 = p2 + 1
        } else if (input[i] >= 400 && input[i] <= 599) {
            p3 = p3 + 1
        } else if (input[i] >= 600 && input[i] <= 799) {
            p4 = p4 + 1
        } else if (input[i] >= 800) {
            p5 = p5 +1
        }
    }
    let p1Result = p1 / n1 * 100;
    let p2Result = p2 / n1 * 100;
    let p3Result = p3 / n1 * 100;
    let p4Result = p4 / n1 * 100;
    let p5Result = p5 / n1 * 100;

    console.log(`${p1Result.toFixed(2)}%`);
    console.log(`${p2Result.toFixed(2)}%`);
    console.log(`${p3Result.toFixed(2)}%`);
    console.log(`${p4Result.toFixed(2)}%`);
    console.log(`${p5Result.toFixed(2)}%`);
}