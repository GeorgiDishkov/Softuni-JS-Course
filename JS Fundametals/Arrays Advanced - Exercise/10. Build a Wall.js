function buildingWall(workers) {
    let resultConcrete = []
    let totalCost = 0;
    while (workers.find(a => a >= 30)) {
        let index = workers.indexOf(workers.find(a => a >= 30));
        workers.splice(index, 1);
    }
    while (workers.length > 0) {
        let squats = workers.length
        let sum = 0;
        sum = squats * 195;
        resultConcrete.push(sum)
        totalCost += sum * 1900;

        workers = workers.map(a => a + 1);
        while (workers.includes(30)) {
            let index = workers.indexOf(30);
            workers.splice(index, 1);
        }
    }
    console.log(resultConcrete.join(`, `));
    console.log(`${totalCost} pesos`);
}