function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    let prime = 0;
    let notPrime = 0;

    while (command !== `stop`) {
        let num = Number(input[index])
        if (command < 0) {
            console.log(`Number is negative.`);
            index++;
            command = input[index];
            continue;
        }

        if (num === 1) {
            prime += num;
            index++;
            command = input[index];
            continue;
        }

        let flag = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            prime += num;
        } else {
            notPrime += num
        }
        index++;
        command = input[index];
        
    }
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${notPrime}`);
}