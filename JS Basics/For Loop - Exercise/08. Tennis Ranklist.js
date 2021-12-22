function solve(input) {
    let index = 0;
    let tournamets = Number(input[index])
    index++;
    let startSeasonPoints = Number(input[index])
    index++;
    let position;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < tournamets; i++) {
        position = input[index];
        switch (position) {
            case `W`:
                count++;
                sum += 2000;
                index++;
                break;
            case `F`:
                sum += 1200;
                index++;
                break;
            case `SF`:
                sum += 720;
                index++;
                break;

        }
    }

    let average = Math.floor(sum / tournamets);
    let winPercent = count / tournamets * 100;
    sum = sum + startSeasonPoints;
    console.log(`Final points: ${sum}`);
    console.log(`Average points: ${average}`);
    console.log(`${winPercent.toFixed(2)}%`);
}