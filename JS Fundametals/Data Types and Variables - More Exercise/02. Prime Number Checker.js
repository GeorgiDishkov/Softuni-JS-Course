    function solve (input) {
        let flag = true;
        if(input % 1 === 0){
            for (let i = 2; i < input; i++) {
                if (input % i === 0){
                    flag = false
                    break;
                }
            }
            console.log(flag);
        }
    }
solve (12)