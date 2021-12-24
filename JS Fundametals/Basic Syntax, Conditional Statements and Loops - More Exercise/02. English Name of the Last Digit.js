function solve(input) {
    let string = input.toString()
    let LastDigit = {
        0: `zero`,
        1: `one`,
        2: `two`,
        3: `three`,
        4: `four`,
        5: `five`,
        6: `six`,
        7: `seven`,
        8: `eigth`,
        9: `nine`,
    }

    let lastIndex = string.slice(-1)

    console.log(LastDigit[lastIndex]);
}