class Garden {

    constructor(spaceAviable) {
        this.spaceAviable = spaceAviable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAviable >= spaceRequired) {
            let plant = {
                name: plantName,
                ripe: false,
                quantity: 0,
                space:spaceRequired,
            }
            this.plants.push(plant);
            this.spaceAviable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`

        } else {
            throw new Error(`Not enough space in the garden.`)
        }
    }

    ripenPlant(plantName, quantity) {
        let currentPlant = this.plants.find(e => e.name == plantName);
        if (!this.plants.some(x => x.name == plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        } if (currentPlant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`)
        } if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        } else {
            currentPlant.quantity += quantity;
            currentPlant.ripe = true;
            if (quantity == 1) {
                return `${quantity} ${plantName} has successfully ripened.`;
            } else {
                return `${quantity} ${plantName}s have successfully ripened.`;
            }
        }
    }

    harvestPlant(plantName) {
        let currentPlant = this.plants.find(e => e.name == plantName);
        if (!this.plants.some(x => x.name == plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`)
        } if (currentPlant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        } else {
            let currentPosition = this.plants.findIndex(e => e.name == plantName);
            let cuttedPlant = this.plants.splice(currentPosition, 1);
            delete cuttedPlant[0].ripe;
            this.spaceAviable += cuttedPlant[0].space;
            this.storage.push(cuttedPlant[0]);
            return `The ${plantName} has been successfully harvested.`
        }
    }

    generateReport() {
        let returnValue = `The garden has ${this.spaceAviable} free space left.\n`;
        let sortedPlants = this.plants.sort((a, b) => a.name.localeCompare(b.name));
        returnValue += `Plants in the garden: `;
        let garden = []
        sortedPlants.forEach(e => {
            garden.push(`${e.name}`)
        });
        returnValue += `${garden.join(`, `)}\n`;
        if (this.storage.length == 0) {
            returnValue += `Plants in storage: The storage is empty.`;
        } else {
            returnValue += `Plants in storage: `;
            let array = []
            this.storage.forEach(e => array.push(`${e.name} (${e.quantity})`))
            console.log(array);
            returnValue += `${array.join(`, `)}`
        }
        return returnValue;
    }
}

const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// console.log(`//////////////////`);

// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// console.log(`///////////////`);

// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// console.log(`/////////////////////`);

// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// console.log(`/////////////////////`);

// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// console.log(`/////////////////////`);

// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

// console.log(`/////////////////////`);

console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());


// assert.equal(myGarden.addPlant("apple", 20), "The apple has been successfully planted in the garden.");
// assert.equal(myGarden.addPlant("orange", 200), "The orange has been successfully planted in the garden.");
// assert.equal(myGarden.addPlant("raspberry", 10), "The raspberry has been successfully planted in the garden.");
// assert.equal(myGarden.ripenPlant("apple", 10), "10 apples have successfully ripened.");
// assert.equal(myGarden.ripenPlant("orange", 1), "1 orange has successfully ripened.");
// assert.equal(myGarden.harvestPlant("orange"), "The orange has been successfully harvested.");

// assert.equal(myGarden.generateReport(), "The garden has 220 free space left.
// \nPlants in the garden: apple, raspberry
// \nPlants in storage: orange (1)");