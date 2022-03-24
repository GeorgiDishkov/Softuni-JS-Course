function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let forwardRead = element;
        element = element.toString()
        element = element.split(``)
        let backward = element.reverse();
        let backwardRead = ``
        for (let i = 0; i < backward.length; i++) {
            backwardRead += backward[i]
        }
        backwardRead = Number(backwardRead)

        if (forwardRead === backwardRead) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }
}