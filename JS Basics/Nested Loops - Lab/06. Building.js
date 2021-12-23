function building (input) {
    let high = Number(input[0]);
    let rooms = Number(input[1]);
    let result = '';

    for (let i = high; i > 0; i--) {
        for (let j = 0; j < rooms; j++) {

            if(i === high){
                result += (`L${i}${j} `)
            }
            else if(i % 2 === 0){
                result += (`O${i}${j} `)
            }else if(i % 2 === 1) {
                result += (`A${i}${j} `)
            }
            
        }
        console.log(result);
        result = '';
    }
}