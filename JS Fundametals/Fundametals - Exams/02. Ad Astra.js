function solve(input) {

    let items = [];
    let callories = 0;

    let code = input[0];

    let pattern = /([|#])(?<food>[A-Za-z\s]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<callories>[0-9]{1,5})\1/g

    let match = pattern.exec(code)

    while (match !== null) {

        if (Number(match.groups.callories) <= 10000) {
            items.push({ item: match.groups.food, date:  match.groups.date, call: match.groups.callories  })

            callories += Number(match.groups.callories)
        }
        match = pattern.exec(code)
    }
    console.log(`You have food to last you for: ${Math.floor(callories / 2000)} days!`);
    for (let i = 0; i < items.length; i++) {
        console.log(`Item: ${items[i].item}, Best before: ${items[i].date}, Nutrition: ${items[i].call}`);
        
    }
}