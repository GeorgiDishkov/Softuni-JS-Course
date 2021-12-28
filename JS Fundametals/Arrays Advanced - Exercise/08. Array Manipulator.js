function arrayManipulator(workedArr, comands) {

    for (let index = 0; index < comands.length; index++) {
        let splitedArr = comands[index].split(` `)
        let comand = splitedArr.shift();

        if (comand === `add` || comand === `addMany`) {
            let index = Number(splitedArr.shift())
            let numbers = [...splitedArr].map(Number);
            workedArr.splice(index, 0, ...numbers)
        } else if (comand === `contains`) {
            let element = Number(splitedArr.shift())
            let result = workedArr.indexOf(element);
            console.log(result);
        } else if (comand === `remove`) {
            let removed = Number(splitedArr.shift());
            workedArr.splice(removed, 1);
        } else if (comand === `shift`) {
            let rotations = Number(splitedArr.shift());
            rotations = rotations % workedArr.length;
            let temp = workedArr.splice(0 , rotations);
            workedArr.push(...temp);
        } else if (comand === `sumPairs`) {
            for (let i = 0; i < workedArr.length; i++) {
                let second = workedArr[i + 1] ? workedArr[i + 1] : 0;
                workedArr[i] += second;
                workedArr.splice(i + 1, 1);
            }
        }else if (comand === `print`) {
            console.log(`[ ${workedArr.join(`, `)} ]`);
        }
    }
}