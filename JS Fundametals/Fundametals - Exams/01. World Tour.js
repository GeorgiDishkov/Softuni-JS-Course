function solve(input) {
    let mainString = input.shift();

    let actuon = {
        Add(mainString, index, string) {

            if (index >= 0 && index <= (mainString.length + 1)) {
                let firstHalf = mainString.slice(0, index);
                let secondHalf = mainString.slice(index);

                return firstHalf + string + secondHalf;
            }

        },
        Remove(mainString, firstIndex, secondIndex) {

            let firstHalf = mainString.slice(0, firstIndex)
            let secondHalf = mainString.slice(Number(secondIndex) + 1)

            return firstHalf + secondHalf;
        },
        Switch(mainString, firstString, secondString) {

            let rgx = new RegExp(firstString, 'g');
            mainString = mainString.replace(rgx, secondString);
            return mainString;
        }
    };
    for (const line of input) {
        if (line === `Travel`) {
            break;
        }
        let [comand, ...items] = line.split(`:`);

        comand = comand.split(` `);
        mainString = actuon[comand[0]](mainString, ...items);
        console.log(mainString);
    }
    console.log(`Ready for world tour! Planned stops: ${mainString}`);
}

solve(["::Cyprys-Greece-",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])


solve([`Albania:Bulgaria:Cyprus:Deuchland`,
    `Add Stop:3:Nigeria`,
    `Remove Stop:1:8`,
    `Switch:Albania: Azərbaycan`,
    `Travel`])