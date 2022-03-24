function minerTask (input) {

    let minerList = {}

    for (let i = 0; i < input.length; i+=2) {
        let mine = input[i];
        let quantity = Number(input[i+1])
        
        if (minerList.hasOwnProperty(mine)){
            minerList[mine] += quantity;
        }else { 
            minerList[mine] = quantity;
        }
    }
    for (let key in minerList) {
        console.log(`${key} -> ${minerList[key]}`);
        }
}