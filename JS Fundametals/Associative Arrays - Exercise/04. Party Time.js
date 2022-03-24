function solve(input) {
    let party = {
        vip: [],
        guests: []
    }
    let flag = false;

    for (let line of input) {
        if(line === `PARTY`) {
            break;
        }
        while (line !== `PARTY`) {
            let vipChecker = line.charAt(0)
            vipChecker = Number(vipChecker)
            if (!isNaN(vipChecker)) {
                party[`vip`].push(line);
                break;
            } else {
                party.guests.push(line)
                break;
            }
        }
    }
    let indexOfParty = input.indexOf(`PARTY`);
    for (let index = indexOfParty; index < input.length; index++) {
        let line = input[index]
        if (party[`vip`].includes(line)) {
            let temp = party[`vip`].indexOf(line)
            party[`vip`].splice(temp, 1)
        }
        if (party[`guests`].includes(line)) {
            let temp = party[`guests`].indexOf(line)
            party[`guests`].splice(temp, 1)
        }
    }
    let numberOfAccepted = 0
    numberOfAccepted += party[`vip`].length + party[`guests`].length
    console.log(numberOfAccepted);
    for (let key in party) {
        if(!party[key].length == 0) {
            console.log(party[key].join(`\n`))
        }
    }
}