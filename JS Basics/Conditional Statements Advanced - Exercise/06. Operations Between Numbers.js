function solve(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = input[2];
    let evenOdd = ``
    let sum = 0;
    switch (op) {
        case `+`:
            sum = n1 + n2;
            if (sum % 2 === 0) {
                evenOdd = `even`
            } else {
                evenOdd = `odd`
            }
            console.log(`${n1} ${op} ${n2} = ${sum} - ${evenOdd}`); break;
        case `-`:
            sum = n1 - n2;
            if (sum % 2 === 0) {
                evenOdd = `even`
            } else {
                evenOdd = `odd`
            }
            console.log(`${n1} ${op} ${n2} = ${sum} - ${evenOdd}`); break;
        case `*`:
            sum = n1 * n2;
            if (sum % 2 === 0) {
                evenOdd = `even`
            } else {
                evenOdd = `odd`
            }
            console.log(`${n1} ${op} ${n2} = ${sum} - ${evenOdd}`); break;
        case `/`:
            if (n2 !== 0) {
                sum = n1 / n2;
                console.log(`${n1} ${op} ${n2} = ${sum.toFixed(2)}`)
            }else {
                console.log(`Cannot divide ${n1} by zero`);
            }; break;
        case `%`:if (n2 !== 0) {
            sum = n1 % n2;
            console.log(`${n1} ${op} ${n2} = ${sum}`)
        }else {
            console.log(`Cannot divide ${n1} by zero`);
        }; break;
    }
}