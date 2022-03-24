function solve(input) {
    let currentBest = [];
    let best = [];

    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        let next = input[i+1];
        if(current == next) {
            currentBest.push(current);
        }else{
            currentBest.push(current);
            if(currentBest.length > best.length) {
                best = currentBest;
            }
            currentBest = [];
        }
    }
    console.log(best.join(` `));
}

solve ([0, 1, 1, 5, 2, 2, 6, 3, 3]);