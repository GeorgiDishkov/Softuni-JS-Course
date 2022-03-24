function perfectNumber (number) {
    let allPossitiveDevisors = [];
    let sumOfDevisors = 0;

    for (let i = 0; i < number-1 ; i++) {
        const element = i;
        if (number % element === 0){
            allPossitiveDevisors.push(element);
        }
    }
    for (let i = 0; i < allPossitiveDevisors.length; i++) {
        const element = Number(allPossitiveDevisors[i]);
        sumOfDevisors += element;
    }
    if (sumOfDevisors === number) {
        console.log(`We have a perfect number!`);
    }else {
        console.log(`It's not so perfect.`);
    }
}