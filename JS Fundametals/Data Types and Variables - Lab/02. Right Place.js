function rightPlace (firstText , char , lastText) {

    let textWithCharIn = firstText.replace(`_` , char);

    let output = textWithCharIn === lastText ? `Matched` : `Not Matched`

    console.log(output);
}