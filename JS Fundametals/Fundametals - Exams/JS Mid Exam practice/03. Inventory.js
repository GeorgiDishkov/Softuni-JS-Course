function solve(input) {
    let items = input.shift().split(`, `);
    let actions = {
        Collect(material) {
            if (!items.includes(material)) {
                items.push(material);
            }
        },
        Drop(material) {
            if (items.includes(material)) {
                let posiotion = items.indexOf(material);
                items.splice(posiotion, 1);
            }
        },
        Combine(materialInput) {
            [oldItam, newItam] = materialInput.split(`:`);
            if (items.includes(oldItam)) {
                let posiotion = items.indexOf(oldItam);
                items.splice(posiotion+1, 0 , newItam);
            }
        },
        Renew(material) {
            if (items.includes(material)) {
                let posiotion = items.indexOf(material);
                items.splice(posiotion, 1);
                items.push(material);
            }
        },
    }

    for (const line of input) {
        if (line == `Craft!`) {
            break;
        }
        [comnad, material] = line.split(` - `)
        comnad = comnad.split(` `);
        actions[comnad[0]](material);
    }
    console.log(items.join(`, `));
}
solve([
    'Iron, Wood, Sword',
    'Collect - Iron',
    'Drop - Gold',
    'Craft!'
]
);
console.log(`================================`);
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
);
console.log(`================================`);