function NxNMatrix (number) {
    let result = ``
    let toString = number.toString()
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            result += (`${number} `)
        }
        console.log(result);
        result = ``
    }
}