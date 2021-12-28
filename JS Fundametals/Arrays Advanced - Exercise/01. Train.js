function train(arr) {
    let wagon = arr.shift();
    wagon = wagon.split(` `)
    let maxCapacy = Number(arr.shift());

    for (const wagons of arr) {
        let [firstArg, secondArg] = wagons.split(` `)
        if (firstArg === `Add`) {
            wagon.push(secondArg);
        } else {
            firstArg = Number(firstArg);
            for (let i = 0; i < wagon.length; i++) {
                let element = Number(wagon[i]);
                if (firstArg + element <= maxCapacy) {
                    wagon[i] = firstArg + element
                    break;
                } else {
                    continue;
                }
            }
        }
    }
    return (wagon.join(` `))
}