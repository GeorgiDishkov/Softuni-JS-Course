function solve(text) {
    let patternEmoji = /(?<dotsOrStar>[\::]{2}|[**]{2})(?<Words>[A-Z]{1}[a-z]{2,})\1/g;
    let patternDigits = /\d/g;
    let coolestFactor = 0;
    let patternResult = patternDigits.exec(text)
    coolestFactor = patternResult
    while (patternResult !== null) {
        patternResult = patternDigits.exec(text);
        if (patternResult !== null) {
            coolestFactor = coolestFactor * Number(patternResult)
        }
    }
    let result = [];
    let names = [];
    let emoji = patternEmoji.exec(text);
    //get all the emoji
    while (emoji !== null) {
        result.push(emoji[0].trim())
        names.push(emoji[2]);
        emoji = patternEmoji.exec(text);
    }
    let emojiManipulator = {};


    for (let index = 0; index < result.length; index++) {
        let tempStat = 0;
        for (let i = 0; i < names[index].length; i++) {
            tempStat += names[index].charCodeAt(i);
        }
        emojiManipulator[result[index]] = tempStat;
    }
    console.log(`Cool threshold: ${coolestFactor}`);
    let coolestEmoji = Object.keys(emojiManipulator)
    console.log(`${coolestEmoji.length} emojis found in the text. The cool ones are:`);
    result = [];
    coolestEmoji.forEach(e => {
        if (emojiManipulator[e] > coolestFactor) {
            result.push(e);
        }
    })
    console.log(result.join(`\n`));
}


solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
console.log(`-------`);
solve((["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]))
console.log(`-------`);
solve((["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]))