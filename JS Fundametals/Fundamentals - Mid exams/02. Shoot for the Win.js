function solve(input) {
    let arr = input.shift().split(` `).map(Number);
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == `End`) {
            console.log(`Shot targets: ${counter} -> ${arr.join(` `)}`);
            break;
        }
        let index = Number(input[i]);
        if (index < arr.length && index >= 0 && arr[index] != -1) {
            let shot = arr[index];
            arr[index] = -1;
            counter++;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != -1) {
                    if (shot >= arr[i]) {
                        arr[i] += shot;
                    } else {
                        arr[i] -= shot;
                    }
                }
            }
        }
    }
}

// solve((["24 50 36 70",
//     "0",
//     "4",
//     "3",
//     "1",
//     "End"])
// )

// console.log(`========`);

solve((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])
)