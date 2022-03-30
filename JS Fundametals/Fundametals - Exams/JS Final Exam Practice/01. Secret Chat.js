function solve(input) {
    let array = input.shift();
    let actions = {
        InsertSpace(index) {
            let first = array.slice(0, index);
            let second = array.slice(index);
            array = (`${first} ${second}`)
            console.log(array);
        },
        Reverse(substring) {
            if (array.includes(substring)) {
                let index = array.indexOf(substring);
                let firstSide = array.slice(0, index);
                let endSide = array.slice(index + substring.length,);
                let reverse = substring.split(``).reverse().join(``);
                array = (`${firstSide}${endSide}${reverse}`);
                console.log(array);
            }else {
                console.log(`error`);
            }
        },
        ChangeAll(substring, replacement) {
            while (array.includes(substring)) {
                array = array.replace(substring, replacement);
            }
            console.log(array);
        },
    }
    for (const line of input) {
        if (line === `Reveal`) {
            break;
        }
        [command, ...arguments] = line.split(`:|:`);
        actions[command](...arguments);
    }
    console.log(`You have a new text message: ${array}`);
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]
)
console.log(`-----------------`);
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:How',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal',
]
)