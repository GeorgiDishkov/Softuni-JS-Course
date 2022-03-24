function solve(input) {
    let words = input.shift()
    words = words.split(` `)
    let result = {}

    for (const line of words) {
        result[line] = 0
    }
    for (const line of input) {
        
        if(result.hasOwnProperty(line)){
            result[line] += 1
        }
    }
    let sorted = Object.entries(result)
    sorted.sort(([wordA , amountA],[wordB ,amountB]) => amountB - amountA)

    for (const [word , amount] of sorted) {
        console.log(`${word} - ${amount}`);
    }
}