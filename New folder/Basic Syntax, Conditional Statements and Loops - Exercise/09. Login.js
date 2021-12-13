function solve(input) {
    let user = input.shift()
    let flag = true;
    let count = 0;
    for (const line of input) {
        let current = line.split(``).reverse().join(``)
        
        if (user == current) {
            console.log(`User ${user} logged in.`);
            break;
        }
        count++
        if (count == 4) {
            console.log(`User ${user} blocked!`);
            break;
        }
         else {
            console.log(`Incorrect password. Try again.`);
        }
    }
}