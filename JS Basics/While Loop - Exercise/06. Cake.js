function cake(input) {
    let index = 0;
    let high = Number(input[index]);
    index ++;
    let whight = Number(input[index])
    index ++
    let pices = high * whight;

    while (pices > 0) {
        if (input[index] === `STOP`) {
            break;
        }
        let tempPices = 0 
        tempPices = Number(input[index]);
        pices -= tempPices;
        index++;
    }
    if (pices > 0) {
        console.log(`${pices} pieces are left.`);
    }else {
        console.log(`No more cake left! You need ${Math.abs(pices)} pieces more.`);
    }
}