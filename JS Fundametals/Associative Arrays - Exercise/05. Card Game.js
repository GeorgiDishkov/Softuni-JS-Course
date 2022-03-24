function solve (input){
    let game = {}

    for (const line of input) {
        let [name ,card] = line.split(`: `)
        card = card.split(`, `)
        if(!game.hasOwnProperty(name)){
            game[name] = [];
        }
        for (const line of card) {
            if(!game[name].includes(line))
            game[name].push(line);
        }
    }
    let playes= Object.entries(game)
    for (let name of playes) {
        let currentDeck = name[1];
        let tempResult = 0;
        for (let card of currentDeck) {
            let length = card.length;
            let value = 0;
            let power = ``
            if (length === 2){
                [value , power] = card.split(``)
            }else {
                value = 10;
                let temp = card.split(``)
                power = temp[length-1]
            }
            
            if(value === `J`){
                value = 11;
            }if(value === `Q`){
                value = 12;
            }if(value === `K`){
                value = 13;
            }if(value === `A`){
                value = 14;
            }
            value = Number(value);
            if(power === `S`){
                power = 4;
            }else if(power === `H`){
                power = 3;
            }else if(power === `D`){
                power = 2;
            }else if(power === `C`){
                power = 1;
            }
            tempResult += value*power;
        }
        console.log(`${name[0]}: ${tempResult}`);
    }
}