function solve (input) {
    let result = [];
    for (let i = 0; i < input; i++) {
        let tempResult =``
        for (let z = 0; z < input; z++) {
            for (let x = 0; x < input; x++) {
                tempResult = (`${String.fromCharCode(i+97)}${String.fromCharCode(z+97)}${String.fromCharCode(x+97)}`);
                result.push(tempResult);
            }
        }
    }
    console.log(result.join(`\n`));
}
solve(2)