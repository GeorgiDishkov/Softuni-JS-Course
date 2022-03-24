function solve(word, text) {
    let words = word.split(`, `)
    let arr = text.split(` `)

    for (const line of words) {
        let tempChange = `*`.repeat(line.length)
        for (const arrLine of arr) {
            if (arrLine === tempChange){
                let index = arr.indexOf(arrLine)
                arr[index] = line;
            }
        }
    }
    console.log(arr.join(` `));
}