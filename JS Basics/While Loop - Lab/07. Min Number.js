function solve (input) {
    let i = 0;
    let temp = 0
    let min = Number(input[0]);
        while (i < input.length) {
            if (input[i] === `Stop`){
                break;
            }
            temp = Number(input[i])
            i++;
            if (temp < min ){
                min = temp;
            }
        }console.log(min);
    }