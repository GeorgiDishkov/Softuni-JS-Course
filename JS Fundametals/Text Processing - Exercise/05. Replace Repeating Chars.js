function solve (text) {
    let result = ``;

    for (let i = 0; i < text.length; i++) {
        let firstChar = text[i];
        let secondChar = text[i+1];

        if(firstChar !== secondChar){
            result += firstChar
        }
        
    }
    console.log(result);
}