function solve(input) {
    let result = input.shift();
    let action = {
        Translate (char , replacement) {{
                while(result.includes(char)){
                    result = result.replace(char, replacement);
                }
            console.log(result);
            }
        },
        Includes (substring) {
            if(result.includes(substring)){
                console.log(`True`);
            }else {
                console.log(`False`);
            }
        },
        Start (substring) {
            let substringLenght = substring.length;
            let resultStart = result.slice(0, substringLenght);
            if(resultStart === substring){
                console.log(`True`);
            }else {
                console.log(`False`);
            }
        },
        Lowercase () {
            result = result.toLowerCase();
            console.log(result);
        },
        FindIndex (char) {
          let lastIndex =  result.lastIndexOf(char);
          console.log(lastIndex);
        },
        Remove (startIndex  , count) {
            startIndex =  +startIndex;
            count = +count;
            let firstHalf = result.slice(0, +startIndex);
            let secondHalf = result.slice(startIndex + count, );
            result = firstHalf + secondHalf;
            console.log(result);
        },
    }

    for (const line of input) {
        if(line  === `End`){
            

            break;
        }
        [command , ...items] = line.split(` `)
        action[command](...items)
    }

}

solve(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"]);
    console.log(`---------`);
solve((["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])
)

