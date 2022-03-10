function solve(input) {
    let friends = input.shift().split(', ');
    let blackListCount = 0;
    // let blackListArr = [];
    let lostNamesCount = 0;
    let actions = {
        Blacklist (name) {
            if(friends.includes(name)){
                let index = friends.indexOf(name);
                console.log(`${friends[index]} was blacklisted.`);
                friends[index] = `Blacklisted`;
                blackListCount++;
            }else {
                let index = friends.indexOf(name);
                console.log(`${name} was not found.`);
            }
        },
        Error (input) {
            let index = Number(input);
            if(index >= 0 && index < friends.length && friends[index] != `Blacklisted` && friends[index] != `Lost`){
                console.log(`${friends[index]} was lost due to an error.`);
                friends[index] = `Lost`;
                lostNamesCount ++;
            }
        },
        Change (index, newName) {
            index = Number(index);
            if(index >= 0 && index < friends.length){
                console.log(`${friends[index]} changed his username to ${newName}.`);
                friends[index] = newName;
            }
        },
    }
    for (const line of input) {
        if(line === `Report`){
            console.log(`Blacklisted names: ${blackListCount}`);
            console.log(`Lost names: ${lostNamesCount}`);
            console.log(friends.join(` `));
            break;
        }
        [command , ...item] = line.split(` `);
        actions[command](...item);
    }
}

// solve((["Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Report"]))
// console.log(`================================================================`);
// solve((["Mike, John, Eddie, William",
//     "Error 3",
//     "Error 3",
//     "Change 0 Mike123",
//     "Report"]))
// console.log(`================================================================`);
solve((["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"]))
console.log(`================================================================`);