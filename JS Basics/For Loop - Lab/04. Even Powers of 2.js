function solve (input) {
    let n1 = Number(input[0]);

    for (let index = 0; index <= n1; index++) {
       
        if (index % 2 === 0) {
            console.log(Math.pow(2 , index));
        }
    }
}