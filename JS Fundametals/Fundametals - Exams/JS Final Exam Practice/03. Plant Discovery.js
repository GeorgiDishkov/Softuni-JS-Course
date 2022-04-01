function solve(input) {
    let number = Number(input.shift());
    let actions = {
        Rate(plant, currentRating) {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating.push(+currentRating);
            } else {
                console.log(`error`);
            }
        },
        Update(plant, currnentRarity) {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = Number(currnentRarity);
            } else {
                console.log(`error`);
            }
        },
        Reset(plant) {
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating = [];
            } else {
                console.log(`error`);
            }
        },
    }
    let plants = {};

    for (let i = 0; i < number; i++) {
        const element = input.shift();
        [currentPlant, rarity] = element.split('<->');
        plants[currentPlant] = {
            rarity: rarity,
            rating: [],
        }
    }
    for (const line of input) {
        if (line === `Exhibition`) {
            break;
        }
        let command = line.split(': ');
        [...items] = command[1].split(` - `);
        actions[command[0]](...items);
    }
    console.log(`Plants for the exhibition:`);
    Object.keys(plants).forEach((e) => {
        let currnteArray = plants[e].rating;
        if(currnteArray.length > 0){
            let currentRating = 0;
            let counter = 0;
            for (const line of currnteArray) {
                counter++;
                currentRating += +line;
            }
            console.log(`- ${e}; Rarity: ${plants[e].rarity}; Rating: ${(currentRating / counter).toFixed(2)}`);
        }else {
            console.log(`- ${e}; Rarity: ${plants[e].rarity}; Rating: 0.00`);
        }
    })
}
solve((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
);