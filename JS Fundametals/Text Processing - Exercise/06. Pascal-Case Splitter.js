function solve (text) {
    let arr = []
    let first = 0;
    for (let i = 1; i < text.length; i++) {
        let currentWord = text[i];
        if(currentWord == currentWord.toUpperCase()){
            arr.push(text.slice(first,i));
            first = i;
        }
    }
    arr.push(text.slice(first))
    console.log(arr.join(`, `));
}