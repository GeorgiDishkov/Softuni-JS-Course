function solve(input) {
    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            flavour: 3,
            fat: 7
        },
        eggs: {
            protein: 5,
            fat: 7,
            flavour: 3
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    let actuions = {
        restock(stock, quality) {
            microelements[stock] += Number(quality);
            console.log(`Success`);
        },
        prepare(recept, quality) {
            let make = true;
            let needed = Object.keys(products[recept]);

            for (const micro of needed) {
                let curentQuality = microelements[micro];
                let neededQuality = products[recept][micro];
                neededQuality = neededQuality * Number(quality)
                if (!(curentQuality >= neededQuality)) {
                    make = false;
                    console.log(`Error: not enough ${micro} in stock`);
                    break;
                }
            }
            if (make) {
                for (const micro of needed) {
                    let curentQuality = microelements[micro];
                    let neededQuality = products[recept][micro];
                    neededQuality = neededQuality * Number(quality)
                    microelements[micro] -= neededQuality;

                }
                console.log(`Success`);
            }
        },
        report() {
            let result = ``;
            Object.keys(microelements).forEach(key => result += (`${key}=${microelements[key]} `));
            console.log(result);
        }
    }
    for (const line of input) {
        let [comand, type, quality] = line.split(' ');
        actuions[comand](type, quality);
    }
}

solve([`prepare turkey 1`,
    `restock protein 10`,
    `prepare turkey 1`,
    `restock carbohydrate 10`,
    `prepare turkey 1`,
    `restock fat 10`,
    `prepare turkey 1`,
    `restock flavour 10`,
    `prepare turkey 1`,
    `report`
])