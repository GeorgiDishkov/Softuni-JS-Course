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
            if (mainString.includes(firstString)) {
                if (!firstString.includes(secondString)) {
                    while (mainString.includes(firstString)) {
                        let firstIndex = mainString.indexOf(firstString[0])
                        let lastIndex = firstIndex + firstString.length - 1

                        let firstHalf = mainString.slice(0, firstIndex);
                        let secondHalf = mainString.slice(Number(lastIndex) + 1)
                        mainString = firstHalf + secondString + secondHalf;
                    }
                }
            }
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
solve((["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
);






/*
 if (start >= 0 && start <= text.length) {
 if (end >= 0 && end <= text.length) {

    ------------------

if (start < end && start >= 0 && start <= text.length) {
if (end > start && end < text.length) {
*/