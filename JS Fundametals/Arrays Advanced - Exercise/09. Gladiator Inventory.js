function gladiatorInventory(items) {
    let inventory = items.shift().split(` `)

    //loop for itams 
    for (let i = 0; i < items.length; i++) {
        let splitedItams = items[i].split(` `);
        let command = splitedItams.shift();
        let item = splitedItams.shift();
        // buy - added itam by right
        if (command === `Buy`) {
            if(inventory.includes(item)) {
                continue;
            }else {
                inventory.push(item)
            }
    //         // trash-delite item by possiton
        }else if(command === `Trash`) {
            if(inventory.includes(item)){
                let position = inventory.indexOf(item);
                inventory.splice(position, 1);
            }else {
                continue;
            }
        }else if (command === `Repair`) {
            if(inventory.includes(item)) {
                let position = inventory.indexOf(item);
                let temp = item;
                inventory.splice(position , 1);
                inventory.push(temp)
            }
        }else if (command === `Upgrade`) {
            let temp = item.split(`-`);
            let currentItam = temp[0];
            let upgrade = temp[1];
            if (inventory.includes(currentItam)){
            let index = inventory.indexOf(currentItam) +1;
            currentItam = currentItam + `:` + upgrade;   
            inventory.splice(index , 0 , currentItam);
            }else {
                continue;
            }
        }
     }
    console.log(inventory.join(` `));
}