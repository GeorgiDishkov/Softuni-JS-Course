class CarDealership {

    constructor(name) {
        this.name = name
        this.availableCars = []
        this.soldCars = []
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        horsepower = Math.round(Number(horsepower));
        price = Number(price);
        mileage = Number(mileage);
        if (model !== '' && horsepower >= 0 && price >= 0 && mileage >= 0) {
            // validate 
            let car = {
                model,
                horsepower,
                price,
                mileage
            }
            this.availableCars.push(car);
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        }
        else {
            throw new Error('Invalid input!');
        }
    }

    sellCar(model, desiredMileage) {
        desiredMileage = Number(desiredMileage);

        let match = this.availableCars.find(e => e.model == model);

        if (match == undefined) {
            throw new Error(`${model} was not found!`)
        }
        let price = Number(match.price);

        if (match.mileage > desiredMileage) {
            let deference = match.mileage - desiredMileage;
            console.log(deference);
            if (deference <= 40000) {
                price *= 0.95;
            } else {
                price *= 0.90;
            }
        }
        this.soldCars.push({
            model: match.model,
            horsepower: match.horsepower,
            soldPrice: price
        })
        let position = this.availableCars.findIndex(e => e.model == model);
        this.availableCars.splice(position, 1);
        this.totalIncome += price;
        return `${model} was sold for ${price.toFixed(2)}$`
    }

    currentCar() {

        if (this.availableCars.length <= 0) {
            return `There are no available cars`;
        }

        let result = [];
        this.availableCars.forEach((e) => result.push(`---${e.model} - ${e.horsepower} HP - ${e.mileage.toFixed(2)} km - ${e.price.toFixed(2)}$`));
        return `-Available cars:\n${result.join(`\n`)}`;



        // if (this.availableCars.length > 0) {
        //     let returned = []
        //     returned.push(`-Available cars:`)
        //     this.availableCars.map((e) => returned.push(`---${e.model} - ${e.horsepower} HP - ${e.mileage.toFixed(2)} km - ${e.price.toFixed(2)}$`));
        //     return returned.join(`\n`);
        // } else {
        //     throw new Error('There are no available cars');
        // }
    }

    salesReport(criteria) {
        if (criteria == 'horsepower' || criteria == 'model') {
            let sorted = [];
            if (criteria == 'horsepower') {
                sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
                // let returned = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
                // sorted.map(e => returned += `---${e.model} - ${e.horsepower} HP - ${e.price}$\n`);
                // return returned;
            } else if (criteria == 'model') {
                sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
            }
            let returned = []
            returned.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
            returned.push(`-${sorted.length} cars sold:`);
            sorted.map(e => returned.push(`---${e.model} - ${e.horsepower} HP - ${e.soldPrice.toFixed(2)}$`));
            return returned.join(`\n`);
        } else {
            throw new Error(`Invalid criteria!`);
        }
    }
}


let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', '300', '29000', '187000'));
console.log(dealership.addCar('', 120, 4900, 240000));
