function solve(input) {
    let activationKey = input.shift();
    let actions = {
        Contains(substring) {
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        },
        Flip(type, start, end) {
            let changed = activationKey.substring(Number(start), Number(end));
            if (type === 'Upper') {
                let upper = changed.toLocaleUpperCase();
               activationKey =  activationKey.replace(changed, upper);
            } else if (type === 'Lower') {
                let lower = changed.toLocaleLowerCase();
                activationKey = activationKey.replace(changed, lower);
            }
            console.log(activationKey);
        },
        Slice(start, end) {
            let changed = activationKey.slice(start , end);
            activationKey = activationKey.replace(changed, ``);
            console.log(activationKey);
        }
    }
    for (const line of input) {
        if (line === `Generate`) {
            break;
        }
        [comand, ...itams] = line.split(`>>>`)
        actions[comand](...itams);
    }
    console.log(`Your activation key is: ${activationKey}`);
}

solve([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log(`----------------------------------------------------------------`);
solve(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);
