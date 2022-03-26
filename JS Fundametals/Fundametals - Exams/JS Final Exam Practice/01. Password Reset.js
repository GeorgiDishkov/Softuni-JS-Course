function solve(input) {
    let workedPassowrd = []
    let password = input.shift();
    let action = {
        TakeOdd() {
            password = password.split('');
            for (let i = 1; i < password.length; i += 2) {
                workedPassowrd.push(password[i]);
            }
            password = workedPassowrd.join('');
            console.log(password);
        },
        Cut(index, length) {
            index = +index;
            length = +length;
            let first = password.slice(0, index);
            let last = password.slice(index + length,);
            password = first + last;
            console.log(password);
        },
        Substitute(substring, sibstitute) {
            if (password.includes(substring)) {
                while (password.includes(substring)) {
                    password = password.replace(substring, sibstitute)
                }
                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }

        },
    }
    for (const line of input) {
        if (line === `Done`) {
            break;
        }
        [comand, ...itams] = line.split(` `)

        action[comand](...itams);
    }
    console.log(`Your password is: ${password}`);
}

solve(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]);
