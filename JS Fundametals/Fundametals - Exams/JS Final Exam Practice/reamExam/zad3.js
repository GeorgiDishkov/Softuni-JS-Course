function solve(input) {
    let heroes = {

    }
    let actions = {
        Enroll(heroName) {
            if (!heroes.hasOwnProperty(heroName)) {
                heroes[heroName] = {
                    spellBook: []
                }
            } else {
                console.log(`${heroName} is already enrolled.`);
            }
        },
        Learn(heroName, spellName) {
            if (heroes.hasOwnProperty(heroName)) {
                let currentSpellBook = heroes[heroName].spellBook
                if (!currentSpellBook.includes(spellName)) {
                    heroes[heroName].spellBook.push(spellName);
                } else {
                    console.log(`${heroName} has already learnt ${spellName}`);
                }
            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        },
        Unlearn(heroName, spellName) {
            if (heroes.hasOwnProperty(heroName)) {
                let currentSpellBook = heroes[heroName].spellBook;
                if (currentSpellBook.includes(spellName)) {
                    heroes[heroName].spellBook = [];
                    for (const line of currentSpellBook) {
                        if (line !== spellName) {
                            heroes[heroName].spellBook.push(line);
                        }
                    }
                } else {
                    console.log(`${heroName} doesn't know ${spellName}.`);
                }
            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        },
    }
    for (const line of input) {
        if (line === `End`) {
            console.log(`Heroes:`);
            Object.keys(heroes).forEach((e) => console.log(`== ${e}: ${heroes[e].spellBook.join(`, `)}`))
            break;
        }
        [command, ...itams] = line.split(` `);
        actions[command](...itams);
    }
}
solve((["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"])
);
console.log(`===========`);
solve((["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"])
)
console.log(`============`);
solve((["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"])
)