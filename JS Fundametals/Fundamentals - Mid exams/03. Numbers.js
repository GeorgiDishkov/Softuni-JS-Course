function solve(input) {
    let result = [];
    if (!input.length == 0 && input.length > 1) {
        let arr = input.split(' ').map(Number);
        let average = 0;

        for (let line of arr) {
            average += line;
        }
        average = average / arr.length;
        arr.sort((a, b) => b - a)
        for (let i = 0; i < 5; i++) {
            if (arr[i] > average) {
                result.push(arr[i]);
            }
        }
    };
    if (result.length == 0) {
        console.log(`No`);
    } else {
        console.log(result.join(' '));
    }
}
solve('10 20 30 40 50');

console.log(`================================================================`);

solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')

console.log(`================================================================`);

solve(['1'])

console.log(`============================`);

solve('-1 -2 -3 -4 -5 -6')