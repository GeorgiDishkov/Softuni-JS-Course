function solve (input){
    let sum = 0;
    let pointer = 0;
    for (let i = 1; ; i++) {
        if (i % 2 === 1) {
            console.log(i);
            sum += i;
            pointer ++ 
            if(pointer == input){
            break;
            }
        }
    }
    console.log(`Sum: ${sum}`);
}