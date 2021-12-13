function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapiz = 0;
    let gold = 0;
    let pointer = 1;
    if (base % 2 == 0) {
        for (let i = base; i > 2; i -= 2) {
            gold = 4;
            let tempStone = 0;
            let tempMarble = 0;
            if (pointer % 5 == 0) {
                let tempLapiz = 0;
                tempStone = (i - 2) * (i - 2);
                tempLapiz = i * i - tempStone;
                stone += tempStone;
                lapiz += tempLapiz;
            } else {
                tempStone = (i - 2) * (i - 2);
                tempMarble = i * i - tempStone;
                stone += tempStone;
                marble += tempMarble;
            }
            pointer++;
        }
    } else {
        for (let i = base; i > 1; i -= 2) {
            gold = 1;
            let tempStone = 0;
            let tempMarble = 0;
            if (pointer % 5 == 0) {
                let tempLapiz = 0;
                tempStone = (i - 2) * (i - 2);
                tempLapiz = i * i - tempStone;
                stone += tempStone;
                lapiz += tempLapiz;
            } else {
                tempStone = (i - 2) * (i - 2);
                tempMarble = i * i - tempStone;
                stone += tempStone;
                marble += tempMarble;
            }
            pointer++;
        }
    }
    console.log(`Stone required: ${Math.round(stone * increment)}`);
    console.log(`Marble required: ${Math.round(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.round(lapiz * increment)}`);
    console.log(`Gold required: ${Math.round(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(pointer * increment)}`);
}