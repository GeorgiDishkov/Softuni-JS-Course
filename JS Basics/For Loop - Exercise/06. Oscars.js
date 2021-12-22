function solve(input) {
    let name = input.shift();
    let startPoints = Number(input.shift());
    let evaluators = Number(input.shift());
    let nominated = false;
    let pointer = 0;

    for (let index = 0; index < evaluators; index++) {
        let namePoint = input[pointer];
        pointer++;
        let tempPoint = Number(input[pointer]);
        pointer++;

        if (!namePoint || !tempPoint) {
            break;
        }
        startPoints += (tempPoint * namePoint.length) / 2

        if (startPoints > 1250.5) {
            nominated = true;
            break;
        }

    }
    if (nominated) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${startPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${(Math.abs(startPoints - 1250.5).toFixed(1))} more!`);
    }
}
solve(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
console.log(`-----`);
solve(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])
