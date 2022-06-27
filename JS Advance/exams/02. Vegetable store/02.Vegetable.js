class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        let result = [];

        for (const veg of vegetables) {
            let [type, quantity, price] = veg.split(` `);
            quantity = Number(quantity);
            price = Number(price)
            let findVeg = this.availableProducts.find(e => e.type == type);

            if (findVeg == undefined) {
                this.availableProducts.push({ type, quantity, price })
                result.push(type);
            } else {
                findVeg.quantity += quantity;
                if (findVeg.price < price) {
                    findVeg.price = price;
                }
            }
        }
        return `Successfully added ${result.join(`, `)}`
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const prod of selectedProducts) {
            let [type, quantity] = prod.split(` `);
            quantity = Number(quantity)

            let findVeg = this.availableProducts.find((e) => e.type == type);

            if (findVeg == undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            if (quantity > findVeg.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            let price = findVeg.price * quantity
            findVeg.quantity -= quantity;
            totalPrice += price;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {
        quantity = Number(quantity)
        let findVeg = this.availableProducts.find(e => e.type == type);

        if (findVeg == undefined) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > findVeg.quantity) {
            findVeg.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            findVeg.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }
    revision() {
        let result = [`Available vegetables:`];
        this.availableProducts.sort((a, b) => a.price - b.price);
        this.availableProducts.forEach((v) => result.push(`${v.type}-${v.quantity}-$${v.price}`))
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return result.join(`\n`).trim();
    }
}