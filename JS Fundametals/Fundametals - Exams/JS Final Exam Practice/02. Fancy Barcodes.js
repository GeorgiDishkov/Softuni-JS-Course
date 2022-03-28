function solve(input) {
    let patternBarcode = /[@]{1}[#]+[A-Z]{1}[a-zA-Z0-9]{4,}[A-Z]{1}[@]{1}[#]+/g;
    let number = Number(input.shift());
    let patternNumber = /[0-9]/g;
    let currnetNumber = ``;

    for (let i = 0; i < number; i++) {
        let currentBarcde = input.shift();
        let barcodes = currentBarcde.match(patternBarcode);
        let number = patternNumber.exec(barcodes);
        if (barcodes !== null) {
            if (number !== null) {
                while (number !== null) {
                    currnetNumber += number;
                    number = patternNumber.exec(barcodes);
                }
            } else {
                currnetNumber = `00`
            }
            console.log(`Product group: ${currnetNumber}`);
            currnetNumber = ``;
        } else {
            console.log(`Invalid barcode`);
        }
    }
}


solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);
console.log(`vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv`);
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);