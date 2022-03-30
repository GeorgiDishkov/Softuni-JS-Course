function solve(input) {
    let pattern = /(?<borders>[#]|[@])(?<firstWrd>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let mirrorCounter = 0;
    let validCounter = 0;
    let collections = pattern.exec(input);
    let result = [];
    while (collections !== null) {
        validCounter++;
        let firstWord = collections[2];
        let mirrored = collections[3].split(``).reverse().join(``);
        if (mirrored === firstWord) {
            mirrorCounter++;
            result.push(`${firstWord} <=> ${collections[3]}`);
        }
        collections = pattern.exec(input)
    }
    if (validCounter > 0) {
        console.log(`${validCounter} word pairs found!`);
        if (mirrorCounter > 0) {
            console.log(`The mirror words are:`);
            console.log(`${result.join(`, `)}`);
        } else {
            console.log(`No mirror words!`);
        }
    } else {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
    }
}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)