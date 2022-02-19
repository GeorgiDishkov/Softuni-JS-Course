function solve(input) {

    let arr = input.shift().split(' ');
    let counter = 0;
    let win = false;
    for (let i = 0; i < input.length; i++) {
        counter++;
        if (input[i] === 'end') {
            break;
        }
        [first, second] = input[i].split(' ');
        first = Number(first);
        second = Number(second);
        if ((first == second) || ((first < 0 || first >= arr.length) || (second < 0 || second >= arr.length))) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let middle = arr.length / 2;
            arr.splice(middle, 0, `-${counter}a`, `-${counter}a`)
            continue;
        }
        if (arr[first] == arr[second]) {
            console.log(`Congrats! You have found matching elements - ${arr[first]}!`);
            if (first > second) {
                arr.splice(first, 1);
                arr.splice(second, 1);
            } else {
                arr.splice(second, 1);
                arr.splice(first, 1);
            }
        } else {
            console.log(`Try again!`);
        }
        if (arr.length == 0) {
            win = true;
            break;
        }
    }
    if (win) {
        console.log(`You have won in ${counter} turns!`);
    } else {
        console.log(`Sorry you lose :( 
${arr.join(' ')}`);
    }
}


solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])
console.log(`================================================================`);
solve([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
])
console.log(`==========================================================================================================)`)
solve([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
])