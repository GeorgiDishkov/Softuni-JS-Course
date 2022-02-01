function solution() {
    let success = `Success`
    let error;
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
    let actuions = {
        restock(stock, quality) {
            microelements[stock] += Number(quality);
            return success;
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
                    error = (`Error: not enough ${micro} in stock`);
                    return error;
                }
            }
            if (make) {
                for (const micro of needed) {
                    let curentQuality = microelements[micro];
                    let neededQuality = products[recept][micro];
                    neededQuality = neededQuality * Number(quality)
                    microelements[micro] -= neededQuality;
                } 
                return success;
            }
        },
        report() {
            let result = ``;
            Object.keys(microelements).forEach(key => result += (`${key}=${microelements[key]} `));
            return result;
        }
    }
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    return (input) => {
        let [comand, type, quality] = input.split(' ');
        return (actuions[comand](type, quality));
    }
}

let manager = solution();
console.log(manager('restock flavour 10')); 
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare apple 1')); 
console.log(manager('restock fat 10')); 
console.log(manager('prepare burger 1')); 
console.log(manager('report')); 