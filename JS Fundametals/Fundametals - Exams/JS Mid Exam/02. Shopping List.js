function solve(input) {
    let list = input.shift().split('!');
    let commands = {
        Urgent(itam) {
            if (!list.includes(itam)) {
                list.unshift(itam);
            }
        },
        Unnecessary(itam) {
            if (list.includes(itam)) {
                let possitions = list.indexOf(itam);
                list.splice(possitions, 1);
            }
        },
        Correct(oldItam , newItam) {    
            if(list.includes(oldItam)) {
                let possitions = list.indexOf(oldItam);
                list[possitions] = newItam;
            }
         },
        Rearrange(itam) {
            if(list.includes(itam)) {
                let possitions = list.indexOf(itam);
                list.splice(possitions, 1);
                list.push(itam);
            }
         },
    }
    for (const line of input) {
        if (line == `Go Shopping!`) {

            break;
        }
        [command, ...item] = line.split(' ');

        commands[command](...item);
    }
    console.log(list.join(', '));
}
// solve((["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"])
// );
// console.log(`============================================================`);
solve((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Ssalt",
    "Unnecessary Salt",
    "Correct Pepper Onion",
    "Rearrange Banana",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
);
