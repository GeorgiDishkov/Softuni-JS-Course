function solve(first, operator, second) {
    switch (operator) {
        case `+`:
            console.log((first + second).toFixed(2));
            break;
        case `-`:
            console.log((first - second).toFixed(2));
            break;
        case `/`:
            console.log((first / second).toFixed(2));
            break;
        case `*`:
            console.log((first * second).toFixed(2));
            break;

        default:
            console.log(`Error`);
            break;
    }
}