function solve(input) {
    let type = input[0];
    let town = input[1];
    let parts = Number(input[2]);
    let totalPrice = 0 
    if (town === `Sofia`) {
        switch (type) {
            case `coffee`:
                totalPrice += parts * 0.50; break;
            case `water`:
                totalPrice += parts * 0.80; break;
            case `beer`:
                totalPrice += parts * 1.20; break;
            case `sweets`:
                totalPrice += parts * 1.45; break;
            case `peanuts`:
                totalPrice += parts * 1.60; break;
        }
    }
    if (town === `Plovdiv`) {
        switch (type) {
            case `coffee`:
                totalPrice += parts * 0.40; break;
            case `water`:
                totalPrice += parts * 0.70; break;
            case `beer`:
                totalPrice += parts * 1.15; break;
            case `sweets`:
                totalPrice += parts * 1.30; break;
            case `peanuts`:
                totalPrice += parts * 1.50; break;
        }
    }
    if (town === `Varna`) {
        switch (type) {
            case `coffee`:
                totalPrice += parts * 0.45; break;
            case `water`:
                totalPrice += parts * 0.70; break;
            case `beer`:
                totalPrice += parts * 1.10; break;
            case `sweets`:
                totalPrice += parts * 1.35; break;
            case `peanuts`:
                totalPrice += parts * 1.55; break;
        }
    }
    console.log(totalPrice.toFixed(2));
}