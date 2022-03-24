function solve(text) {
    let concatenated = text[0] + text[1]
    concatenated = concatenated.split(``)
    let keyWord = text[2]
    let pointerKey = 0;
    let changed = 0;

    for (let i = 0; i < concatenated.length; i++) {
        if (pointerKey == keyWord.length){
            pointerKey = 0;
        }
        let currentWord = concatenated[i]
        currentWord = currentWord.toUpperCase()
        currentWord = currentWord.charCodeAt()
        if (currentWord == 65 || currentWord == 69 || currentWord == 73
            || currentWord == 79 || /*currentWord == 89 ||*/ currentWord == 85){
                let temp = keyWord[pointerKey]
                temp = temp.toUpperCase();
                concatenated[i] = temp
                pointerKey ++;
            }
    }
    concatenated = concatenated.reverse().join(``);
    console.log(`Your generated password is ${concatenated}`);
}