function solve (input) {
    let average = 0;
    let array = input.split(` `);
    let result = [];
    

    for (let i = 0; i < array.length; i++) {
        average += Number(array[i])
    }
    average = average/array.length;

    array = array.map(Number)
    array = array.sort((a, b) => b - a)
    
    for (let i = 0; i < 5; i++) {
        if(array[i] > average){
            result.push(array[i])
        }else{
            break;
        }   
    }
    if(result.length > 0){
        console.log(result.join(` `));
    }else {
        console.log(`No`);
    }
}
solve(`10 20 30 40 50`)
solve(`5 2 3 4 -10 30 40 50 20 50 60 60 51`)
solve(`1`)
solve(`-1 -2 -3 -4 -5 -6`)