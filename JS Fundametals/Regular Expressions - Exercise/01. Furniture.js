function solve (input) {
    let sum = 0;
    let pattern = new RegExp (`>>([A-Za-z]+)<<(\\d+.\\d*)!(\\d+)`)
    let result = pattern.exec(input[0])
    console.log(`Bought furniture:`);
   for (let index = 1; index < input.length; index++)  {
        if(result !== null){
            console.log(result[1]);
            sum += Number(result[2]) * Number(result[3])
        }
        result = pattern.exec(input[index])
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}