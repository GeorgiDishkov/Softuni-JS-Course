function solve(text) {
    let currectedText = text[0];
    currectedText = currectedText.split(` `)
    let words = text[1];

    for (let i = 0; i < currectedText.length ; i++){
        let pointer = 1;
        let endElement = ``;
        let line = currectedText[i];
        if(line.includes(`_`)) {
                if(line[0] === line[line.length-1]){
                    pointer = line.length;
                }else { 
                    pointer = line.length-1;
                    endElement = line[line.length-1]
                }
            for (const line of words) {
                if (pointer === line.length)
                currectedText[i] = line+endElement
            }
        }
    }
    console.log(currectedText.join(` `));
}