function trainTheTrainers(input) {
    let index = 0;
    let judge = Number(input[index]);
    index ++;
    let sum = 0;
    let presentSum=0;
    let pointer = 0;
    let totalPointer = 0;

    while (input[index] !== `Finish`){
        let tempName = input[index]
        index ++;
            for (let j = 0; j < judge; j++) {
                presentSum += Number(input[index]);
                sum += Number(input[index])
                pointer ++;
                index ++;
            }
            console.log(`${tempName} - ${(presentSum/pointer).toFixed(2)}.`);
            presentSum = 0;
            totalPointer += pointer;
            pointer = 0;
    }
    console.log(`Student's final assessment is ${(sum/totalPointer).toFixed(2)}.`);
}