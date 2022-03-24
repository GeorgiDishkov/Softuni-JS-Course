function solve(input, rotations) {
    let result = input.slice(0, input.length);
    for (let i = 0; i < rotations; i++) {
        let temp = result.shift();
        result.push(temp);
    }
    console.log(result.join(' '));
}

solve([51, 47, 32, 61, 21], 2)