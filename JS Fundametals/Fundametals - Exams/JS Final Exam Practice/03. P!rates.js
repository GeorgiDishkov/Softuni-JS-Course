function solve(information) {
    let actions = {
        Plunder(town, population, gold) {
            population = +population;
            gold = +gold;
            if (population < cities[town].population && gold < cities[town].gold) {
                cities[town].population -= population;
                cities[town].gold -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);
            } else {
                let grabbedGold = cities[town].gold - gold;
                let killedPopulation = cities[town].population - population;
                if (grabbedGold < 0) {
                    grabbedGold = cities[town].gold
                } else {
                    grabbedGold = gold;
                } if (killedPopulation < 0) {
                    killedPopulation = cities[town].population
                } else {
                    killedPopulation = population;
                }
                console.log(`${town} plundered! ${grabbedGold} gold stolen, ${killedPopulation} citizens killed.`);
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            }
        },
        Prosper(town, gold) {
            gold = +gold;
            if (gold > 0) {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }
    }
    let cities = {};

    let cityInfo = information.shift();
    while (cityInfo !== `Sail`) {
        [cityName, population, gold] = cityInfo.split(`||`)
        population = +population;
        gold = +gold;
        if (cities.hasOwnProperty(cityName)) {
            cities[cityName].population += population;
            cities[cityName].gold += gold;
        } else {
            cities[cityName] = {
                population: +population,
                gold: +gold
            }
        }
        cityInfo = information.shift();
    }
    cityInfo = information.shift();
    while (cityInfo !== `End`) {
        [comand, ...properties] = cityInfo.split(`=>`);
        actions[comand](...properties);
        cityInfo = information.shift();
    }
    let cityNames = Object.keys(cities);
    if (cityNames.length > 0) {
        console.log(`Ahoy, Captain! There are ${cityNames.length} wealthy settlements to go to:`);
        cityNames.forEach(e => console.log(`${e} -> Population: ${cities[e].population} citizens, Gold: ${cities[e].gold} kg`));
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
// solve((["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"])
// );
// console.log(`-----------------------------------------------------`);
solve((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
);