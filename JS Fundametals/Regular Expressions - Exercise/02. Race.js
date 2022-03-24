function solve(input) {
    let racers = {}
    let players = input.shift().split(`, `)
    for (const line of players) {
        racers[line] = 0;
    }
    for (const line of input) {
        nameSort = /[A-Za-z]/g;
        let name = line.match(nameSort);
        name = name.join(``);
        if (racers.hasOwnProperty(name)) {
            let points = /[0-9]/g;
            let result = line.match(points)
                .map(Number)
                .reduce((a, b) => a + b)
            racers[name] += result;
        }
    }
    sorted = Object.keys(racers)
    sorted.sort((a, b) => racers[b] - racers[a])
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);
}