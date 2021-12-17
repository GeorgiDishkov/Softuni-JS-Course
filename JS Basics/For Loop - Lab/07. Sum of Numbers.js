function solve (input) {
    let n1 = (input[0]);
    let sum = 0;
    for (let index = 0; index < n1.length; index++) {
        sum = sum + Number(n1[index])
    }
    console.log(`The sum of the digits is:${sum}`);
}