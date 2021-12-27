function solve(input) {
    let lines = Number(input.shift());
    let Plants = {};
    let Actions = {
        Rate(currentPlant, currentRating) {
            if (Plants.hasOwnProperty(currentPlant)) {
                if (Plants[currentPlant].rating[0] == 0){
                    Plants[currentPlant].rating.shift();
                    Plants[currentPlant].rating.push(Number(currentRating));

                }
                Plants[currentPlant].rating.push(Number(currentRating));

            } else {
                console.log(`error`);
            }
        },
        Update(currentPlant, currentRarity) {
            if (Plants.hasOwnProperty(currentPlant)) {
                Plants[currentPlant].rarity = Number(currentRarity);
            } else {
                console.log(`error`);
            }
        },
        Reset(currentPlant) {
            if (Plants.hasOwnProperty(currentPlant)) {
                Plants[currentPlant].rating = [0];
            } else {
                console.log(`error`);
            }
        }
    };
    // sorted by desending rarity then rating
    function desendingSort(currentPlant) {
        for (const line of currentPlant) {
            let rating = Plants[line].rating
            let sumRating = 0;
            for (const line of rating) {
                sumRating += line
            }
            sumRating /= rating.length;
            Plants[line].rating = sumRating;
        }
        return currentPlant.sort((a, b) => Plants[b].rarity - Plants[a].rarity || Plants[b].rating - Plants[a].rating)
    }
    //take plants from input
    for (let i = 0; i < lines; i++) {
        let [currentPlant, currentRarity] = input[0].split(`<->`)
        if(!Plants.hasOwnProperty(currentPlant)){
            Plants[currentPlant] = {
            rarity: Number(currentRarity),
            rating: []
            };
        }
        input.shift();
    }
    //take comands and make fixes
    for (let line of input) {
        if (line == `Exhibition`) {
            break;
        }
        let [command, ...items] = line.match(/\w*[^: -]/g)
            Actions[command](...items)
    }
    let sorted = Object.keys(Plants);
    desendingSort(sorted)
    console.log(`Plants for the exhibition:`);
    for (const line of sorted) {
        console.log(`- ${line}; Rarity: ${Plants[line].rarity}; Rating: ${Plants[line].rating.toFixed(2)}`);
    }
}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Rate: Arnoldii - 3",
    "Exhibition"])
console.log(`-------`);
solve(["3",
    "Candelabra<->10",
    "Nowini<->10",
    "Oahu<->9",
    "Rate: Oahu - 7",
    "Rate: Nowini - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
