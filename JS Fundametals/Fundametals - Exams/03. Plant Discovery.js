function solve(input) {
    let lines = Number(input.shift());
    let Plants = {};
    let Actions = {
        Rate(currentPlant, currentRating) {
            if (Plants.hasOwnProperty(currentPlant)) {
                   Plants[currentPlant].rating.push(Number(currentRating))
                
            } else {
                console.log(`error`);
            }
        },
        Update(currentPlant, currentRarity) {
            if (Plants.hasOwnProprty(currentPlant)) {
                Plants.currentPlant.rarity = Number(currentRarity);
            } else {
                console.log(`error`);
            }
        },
        Reset(currentPlant) {
            if (Plants.hasOwnProprty(curr)) {
                delete Plants.currentPlant.rating;
            } else {
                console.log(`error`);
            }
        }
    };
    for (let i = 0; i < lines; i++) {
        let [currentPlant, currentRarity] = input[0].split(`<->`)
        Plants[currentPlant] = {
            rarity: Number(currentRarity),
            rating: []
         };
        input.shift();
    }
    for (let line of input) {
        let [command, ...items] = line.match(/\w*[^: -]/g)
        
        Actions[command](...items)
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
    "Exhibition"])
console.log(`-------`);
solve(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
