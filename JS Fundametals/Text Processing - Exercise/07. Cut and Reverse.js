function solve (text) {
    let firstHalf = text.slice(0,text.length/2);
    let secondHalf = text.slice(text.length/2);

    firstHalf = firstHalf.split(``).reverse().join(``)
    secondHalf = secondHalf.split(``).reverse().join(``)

    console.log(firstHalf);
    console.log(secondHalf);

}