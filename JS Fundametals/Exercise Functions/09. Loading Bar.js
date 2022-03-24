function loadingBar(number) {
    let trueProcent = number
    let barProcent = Math.ceil(number / 10);
    let bar = [];

    for (let i = 0; i < 10; i++) {
        bar.push(`.`)

    }
    for (let i = 0; i < barProcent; i++) {
        bar.unshift(`%`)
        bar.pop()
    }
    if (number < 100) {
        bar = bar.join(``)
        console.log(`${number}% [${bar}]`);
        console.log(`Still loading...`);
    } else {
        bar = bar.join(``)
        console.log(`${number}% Complete!`);
        console.log(`[${bar}]`);
    }
}