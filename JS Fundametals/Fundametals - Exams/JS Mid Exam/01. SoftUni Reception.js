function solve (input) {
    let employersPerH = 0;
    let hours = 0;
    for (let i = 0; i < 3; i++) {  
        employersPerH += Number(input.shift());
    }
    let students = Number(input.shift());
    while (students > 0) {
        if (hours % 4 !== 0){
            students -= employersPerH;
        }if (students > 0){
            hours ++;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}