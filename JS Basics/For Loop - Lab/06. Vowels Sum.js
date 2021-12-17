function solve(input) {
    let word = input[0];
    let sum = 0

    for (let i = 0; i < word.length; i++) {
        const element = word[i];
        if (element === `a`) {
            sum = sum + 1
        } else if (element === `e`) {
            sum = sum + 2
        } else if (element === `i`) {
            sum = sum + 3
        } else if (element === `o`) {
            sum = sum + 4
        } else if (element === `u`) {
            sum = sum + 5
        }
    }
    console.log(sum);
}