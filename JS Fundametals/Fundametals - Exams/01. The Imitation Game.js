function solve(input) {
    let actions = {
        Move(code, number) {

            let first = code.slice(0, number);
            let second = code.slice(number);

            return second + first;
        },

        ChangeAll(code, sub, rep) {
            let replacedCode = code;
            while (replacedCode.includes(sub)) {
                replacedCode = replacedCode.replace(sub, rep)
            }
            return replacedCode;
        },

        Insert(code, index, value) {
            let first = code.slice(0, Number(index));
            let second = code.slice(Number(index));

            return first + value + second;
        }
    }
    let code = input.shift()
    let command;

    while ((command = input.shift()) !== `Decode`) {

        let [action, ...parse] = command.split("|");

        code = actions[action](code ,...parse);

    }

    console.log(`The decrypted message is: ${code}`);
}