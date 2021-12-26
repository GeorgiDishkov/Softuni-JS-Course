function solve (input) {
    let arr = input.toString()
    .split(``);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempNum = Number(arr[i])
        sum+= tempNum;
    }
    console.log(sum);
}
