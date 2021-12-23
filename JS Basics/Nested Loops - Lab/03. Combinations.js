function combination(input) {
    let combinatinoNumber = Number(input[0])
    let pointer = 0;

    for (let i = 0; i <= combinatinoNumber; i++) {
        for (let j = 0; j <= combinatinoNumber; j++) {
            for (let z = 0; z <= combinatinoNumber; z++) {
                let sum = i + j + z;
                if (sum === combinatinoNumber) {
                    pointer++;
                }
            }
        }
    }
    console.log(pointer);
}