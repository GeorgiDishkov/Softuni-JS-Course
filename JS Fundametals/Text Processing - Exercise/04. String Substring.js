function solve (word , text) {
    let arr = text.toLowerCase()
    arr = arr.split(` `)
    let checkWord = word.toLowerCase()
    let flag = true;

    if(arr.includes(checkWord)){
        console.log(word);
    }else {
        console.log(`${word} not found!`);
    }
}