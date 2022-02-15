function solve(input) {
    let targets = input.shift().split(' ').map(Number);
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if(input[i] === `End`){
            break;
        }
        let target = Number(input[i]);
        if (targets.length > target && target >= 0) {
            if(targets[target] !== -1){
                let currentNumber = targets[target];
                targets[target] = -1;
                count++;
                for (let z = 0; z < targets.length; z++) {
                    if(targets[z] !== -1){
                        if (currentNumber >= targets[z]) {
                            targets[z] += currentNumber;
                        }else if (currentNumber < targets[z]) {
                           targets[z] -= currentNumber;
                        }
                    }
                }
            }
        }
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}

solve((["24 50 36 70",
    "0",
    "4",
    "6",
    "3",
    "1",
    "End"])
)
console.log(`-----------`);
solve((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
)