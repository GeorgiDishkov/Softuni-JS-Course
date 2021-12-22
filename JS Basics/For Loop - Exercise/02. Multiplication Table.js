function solve (input) {
    let op = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        result = op * i;
        console.log(`${i} * ${op} = ${result}`);
    }
}