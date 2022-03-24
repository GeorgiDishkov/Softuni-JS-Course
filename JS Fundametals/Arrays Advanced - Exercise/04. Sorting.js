function solve (input) {
    let tempArray = input;
    let ascending = tempArray.sort((a, b) => a - b).slice();
    let descenting = tempArray.sort((a, b) => b - a);
    let pointer = 0;
    let add = 0;
    let result = [];
    while (pointer < input.length) {
        result.push(descenting[add]);
        pointer ++;
        if (pointer >= input.length){
            break;
        }
        result.push(ascending[add]);
        pointer ++;
        add ++;
    }
    console.log(result.join(` `));
}

solve ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 12]);