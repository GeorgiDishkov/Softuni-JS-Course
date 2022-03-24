function solve(input) {
    let collector = {}
    let workedArr = input.split(` `)

    for (let line of workedArr) {
        line = line.toLowerCase()
        if (!collector.hasOwnProperty(line)) {
            collector[line] = 1;
        } else {
            collector[line] += 1
        }
    }
    let sorted = Object.entries(collector)
    sorted.sort(([firstA, secondA], [firstB, secondB]) => secondB - secondA)
    let result = []
    for (const [word , amount] of sorted) {
        if(amount % 2 !== 0){
            result.push(word)
        }
    }
    console.log(result.join(` `));
}