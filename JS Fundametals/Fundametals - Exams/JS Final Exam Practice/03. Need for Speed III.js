function solve(input) {
    let number = Number(input.shift());
    let action = {
        Drive(car, distance, fuel) {
            if (autoCars[car].fuel >= +fuel) {
                autoCars[car].fuel -= +fuel;
                autoCars[car].mileage += +distance;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (autoCars[car].mileage >= 100000) {
                    delete autoCars[car];
                    console.log(`Time to sell the ${car}!`);
                }
            } else {
                console.log(`Not enough fuel to make that ride`);
            }
        },
        Refuel(car, fuel) {
            if (autoCars[car].fuel + +fuel <= 75) {
                autoCars[car].fuel += +fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            } else {
                console.log(`${car} refueled with ${75 - autoCars[car].fuel} liters`);
                autoCars[car].fuel = 75;
            }
        },
        Revert(car, kilometers) {
            if (autoCars[car].mileage - +kilometers < 10000) {
                autoCars[car].mileage = 10000;
            } else {
                autoCars[car].mileage -= +kilometers
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        },
    }
    let autoCars = {};
    for (let i = 0; i < number; i++) {
        let currentCar = input.shift();
        [car, mileage, fuel] = currentCar.split(`|`);
        autoCars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel),
        }
    }
    for (const line of input) {
        if (line === `Stop`) {
            break;
        }
        [command, ...atributes] = line.split(` : `)
        action[command](...atributes);
    }
    Object.keys(autoCars).forEach((e) => console.log(`${e} -> Mileage: ${autoCars[e].mileage} kms, Fuel in the tank: ${autoCars[e].fuel} lt.`));
}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
)


