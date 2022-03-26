function solve(input) {
    let students = Number(input.shift());
    let lecture = Number(input.shift());
    let aditionalBonus = Number(input.shift());
    let maxBonus = 0;
    let studentAttended = 0;
    for (let i = 0; i < students; i++) {
        let attendances = Number(input[i]);
        let currentBonus = attendances / lecture *(5 + aditionalBonus); 
        if (currentBonus > maxBonus){
            maxBonus = currentBonus;
            studentAttended = attendances;
        }
    }
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${studentAttended} lectures.`);
}

solve([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]
);
console.log(`=========================`);
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
);
console.log(`=========================`);