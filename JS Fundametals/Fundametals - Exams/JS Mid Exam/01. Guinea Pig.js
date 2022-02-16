function solve(inputFood) {
    food = Number(inputFood[0]) * 1000;
    hay = Number(inputFood[1]) * 1000;
    cover = Number(inputFood[2]) * 1000;
    guinea = Number(inputFood[3]) * 1000;
    let enough = true;
    for (let i = 1; i <= 30; i++) {
        food -= 300;
        if (i % 2 == 0) {
            hay -= food * 0.05;
        } if (i % 3 == 0) {
            cover -= guinea / 3
        }
        if (food <= 0 || hay <= 0 || guinea <= 0 || cover <= 0) {
            console.log(`Merry must go to the pet store!`);
            enough = false;
            break;
        }
    }
    if (enough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)},. `);
    }
}

solve(["10",
    "5",
    "5.2",
    "1"])
console.log(`------------`);
solve(["1",
    "1.5",
    "3",
    "1.5"
])
console.log(`------------`);
solve(["9",
    "5",
    "5.2",
    "1"])