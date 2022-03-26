function theLift(arr) {
    let totalPPL = arr.shift();
    let liftSpace = arr.shift();
    liftSpace = liftSpace.split(` `);
    let lenthOfLift = liftSpace.length

    for (let i = 0; i < liftSpace.length; i++) {
        let currentWagon = Number(liftSpace[i]);
        while (currentWagon < 4 && totalPPL > 0) {
            currentWagon++;
            totalPPL--;
            liftSpace[i] = currentWagon;
        }
    } if (totalPPL > 0) {
        console.log(`There isn't enough space! ${totalPPL} people in a queue!`);
        console.log(liftSpace.join(` `));
    } else if (liftSpace[lenthOfLift - 1] == 4) {
        console.log(liftSpace.join(` `));
    } else {
        console.log(`The lift has empty spots!`);
        console.log(liftSpace.join(` `));
    }
}