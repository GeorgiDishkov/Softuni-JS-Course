function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherMans = Number(input[2]);

    switch (season) {
        case `Spring`:
            price = 3000; break;
        case `Summer`:
        case `Autumn`:
            price = 4200; break;
        case `Winter`:
            price = 2600; break;
    }
    if (fisherMans <= 6) {
        price = price * 0.90;
    }
    else if (fisherMans <= 11) {
        price = price * 0.85;
    }
    else if (fisherMans > 12) {
        price = price * 0.75;
    }
    if (fisherMans % 2 === 0 && season !== `Autumn`) {
        price = price * 0.95
    }

    let diff = Math.abs(budget - price);

    if (budget >= price) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}