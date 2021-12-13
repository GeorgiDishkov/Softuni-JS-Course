function solve (input){
    let collector = ``;
    for (let i = 1; i <= input; i++) {
        let collector = ``;
        for (let z = 1; z <= i; z++) {
            collector += (`${i} `)
        }        
        console.log(collector);
    }
}