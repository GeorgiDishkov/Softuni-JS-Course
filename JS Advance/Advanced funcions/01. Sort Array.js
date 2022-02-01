function solve(numbers, way) {

    if (way == `asc`) {
        return numbers.sort((a, b) => a - b);
    } else if (way == `desc`) {
        return numbers.sort((a, b) => b - a);
    }
}
console.log(solve([14, 7, 17, 6, 8], 'desc'));