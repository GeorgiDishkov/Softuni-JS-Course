function solve(input) {

    let array = input.shift().split(` `);

    for (const line of input) {
        let [command, ...items] = line.split(` `)

        if (command === `swap`) {
            let firstIndex = Number(items[0]);
            let secondIndex = Number(items[1]);

            
            let firstNumber = array.slice(firstIndex, firstIndex + 1).toString()
            let secondNumber = array.slice(secondIndex, secondIndex + 1).toString()

            array.splice(firstIndex, 1, secondNumber)
            array.splice(secondIndex, 1, firstNumber)

        } else if (command === `multiply`) {
            let firstIndex = Number(items[0]);
            let secondIndex = Number(items[1]);

            let firstNumber = Number(array.slice(firstIndex, firstIndex + 1))
            let secondNumber = Number(array.slice(secondIndex, secondIndex + 1))

            let result = firstNumber * secondNumber;

            array.splice(firstIndex, 1, result)


        } else if (command === `decrease`) {
            array = array.map(Number).map(a => a-1)
        }
    }
    console.log(array.join(`, `));
}

solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'])