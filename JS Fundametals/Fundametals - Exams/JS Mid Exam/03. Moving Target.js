function solve(input){
    let result = input.shift().split(' ').map(Number);
    // let workedSpace = input.shift().split(' ');
    let comands = {
        Shoot (index,power){
            if(index <= result.length && index >= 0){
                result[index] -= power;
                if(result[index] <= 0){
                    result.splice(index,1);
                }
            }
        },
        Add (index , value){
            if(index <= result.length && index >= 0){
                result.splice(index,0,value);
            }else{
                console.log(`Invalid placement!`);
            }
        },
        Strike (index, redius){
            let minStrike = index-redius;
            let maxStrike = index+redius;

            if(result.length >= maxStrike && minStrike >= 0){
            result.splice(minStrike,(redius*2 +1));
            }else {
                console.log(`Strike missed!`);
            }
        },
        }
for (const line of input){
    if(line == `End`){
        break;
    }
    let [command , ...items] = line.split(` `);   
    items = items.map(Number);
    comands[command](...items);
}
console.log(result.join(`|`));
}

solve((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 2",
"End",
"Add 1 3",
]))
solve((["1 2 3 4 5",
"Strike 0 1",
"End"])
)