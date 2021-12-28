function bombNumbers(game, rules) {
    // let [mainBomb , littleTickBomb] = rules.split(` `);
    let mainBomb = rules[0];
    let littleTickBomb = rules[1];
    let index = game.indexOf(mainBomb);
    let sum = 0;
    while (index != -1) {
        let start = Math.max(0, index - littleTickBomb);
        game.splice(start, 2 * littleTickBomb + 1);
        index = game.indexOf(mainBomb);
    }
    for (let i = 0; i < game.length; i++) {
        sum += game[i];
    }
    console.log(sum);
}