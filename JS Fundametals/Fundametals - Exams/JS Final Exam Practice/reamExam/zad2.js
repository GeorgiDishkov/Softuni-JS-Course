function solve(input) {
    let number = Number(input.shift());
    let pattern = /(?<firstSymobls>[\w\W\s\S\d\D]+)[>](?<first>[0-9]{3})[|]{1}(?<second>[a-z]{3})[|]{1}(?<third>[A-Z]{3})[|](?<forth>[\w\W\s\S\d\D]{3})[<]{1}(?<secondSymbol>[\w\W\s\S\d\D]+)/g;

    for (let index = 0; index < number; index++) {
        const element = input[index];
        let result = pattern.exec(element);
        if (result !== null) {
            if (result[1] === result[6]) {
                if (!result[5].includes(`<`)) {
                    if (!result[5].includes(`>`)) {
                        console.log(`Password: ${result[2] + result[3] + result[4] + result[5]}`);
                    } else {
                        console.log(`Try another password!`);
                    }
                } else {
                    console.log(`Try another password!`);
                }
            } else {
                console.log(`Try another password!`);
            }
        }
        else {
            console.log(`Try another password!`);
        }
    }
}
// solve((["3",
//     "##>00|no|NO|!!!?<###",
//     "##>123|yes|YES|!!!<##",
//     "$$<111|noo|NOPE|<<>$$"])
// )
console.log(`---------`);
solve((["3",
    " >088|abc|AAA|asa< ",
    "asd>asd|asd|ASD|a d<asd",
    " >088|zzzz|ZzZ|123< "])
) 