function cinemaTickets(input) {
    let index = 0;
    let students = 0;
    let kid = 0;
    let standart = 0;
    let pointer = 0;
    let sum = 0;

    while (input[index] !== `Finish`) {
        let tempName = input[index];
        index++;
        let places = Number(input[index]);
        index++;
        let tempPointer = 0;

        for (let i = 0; i < places; i++) {
            if (input[index] === `End`) {
                index++;
                break;
            }
            switch (input[index]) {
                case `standard`:
                    standart++;
                    tempPointer++;
                    index++;
                    break;
                case `kid`:
                    kid++;
                    tempPointer++;
                    index++;
                    break;
                case `student`:
                    students++;
                    tempPointer++;
                    index++;
                    break;
            }
            if (tempPointer >= places) {
                break;
            }

        } pointer += tempPointer;
        sum = (tempPointer / places) * 100
        console.log(`${tempName} - ${sum.toFixed(2)}% full.`)
    }
    console.log(`Total tickets: ${pointer}`);
    sum = (students / pointer) * 100
    console.log(`${sum.toFixed(2)}% student tickets.`);
    sum = (standart / pointer) * 100
    console.log(`${sum.toFixed(2)}% standard tickets.`);
    sum = (kid / pointer) * 100
    console.log(`${sum.toFixed(2)}% kids tickets.`);
}