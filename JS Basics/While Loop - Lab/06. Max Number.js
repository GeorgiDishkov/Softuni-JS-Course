function solve (input) {
    let i = 0;
    let temp = 0
    let max = Number(input[0]);
        while (i < input.length) {
            if (input[i] === `Stop`){
                break;
            }
            temp = Number(input[i])
            i++;
            if (temp > max ){
                max = temp;
            }
        }console.log(max);
    }