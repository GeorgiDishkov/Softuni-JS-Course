function solve(totlaLosts, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    let shieldPointer = 0;
    let helmetBreak = false;
    let swordBreak = false;
    for (let i = 1; i <= totlaLosts; i++) {
        helmetBreak = false;
        swordBreak = false;

        if (i % 2 === 0) {
            helmetBreak = true;
            sum += helmPrice;
        } if (i % 3 === 0) {
            swordBreak = true;
            sum += swordPrice;
        } if (helmetBreak && swordBreak) {
            shieldPointer++;
            sum += shieldPrice;
        } if (shieldPointer == 2) {
            sum += armorPrice;
            shieldPointer = 0;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

solve(23,
    12.50,
    21.50,
    40,
    200
)