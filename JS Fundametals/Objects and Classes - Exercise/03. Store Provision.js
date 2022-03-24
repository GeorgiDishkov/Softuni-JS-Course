function storeProvision(currentStocks , deliveryStocks) {
    let storeInventory = {};

    for (let i = 0; i < currentStocks.length; i+= 2) {
        let product = currentStocks[i];
        let tempCount = currentStocks[i+1]

        storeInventory[product] = Number(tempCount); 
    }
    for (let i = 0; i < deliveryStocks.length; i+=2) {
        let product = deliveryStocks[i];
        let tempCount = deliveryStocks[i+1]        
        
        if(!storeInventory.hasOwnProperty(product)){
            storeInventory[product] = 0
        }
        storeInventory[product] += Number(tempCount)
    }
    for (const product in storeInventory) {
        console.log(`${product} -> ${storeInventory[product]}`);
    }
}