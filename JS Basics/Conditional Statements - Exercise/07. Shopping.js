function solve (input){
    let budgetPeter = Number(input[0])
    let videoCard = Number(input[1])
    let processors = Number(input[2])
    let ramMemmory = Number(input[3])

    let videoCardPrice = videoCard * 250;
    let proccesorsPrice = videoCardPrice * 0.35;
        proccesorsPrice = proccesorsPrice * processors;
    let ramMemmoryPrice = videoCardPrice * 0.10;
    ramMemmoryPrice = ramMemmoryPrice * ramMemmory  ;
    let totalCost = ramMemmoryPrice + proccesorsPrice + videoCardPrice

    if (videoCard > processors)
        totalCost = totalCost * 0.85
    if (budgetPeter >= totalCost)
    {
        totalCost = Math.abs(totalCost-budgetPeter)
        console.log(`You have ${totalCost.toFixed(2)} leva left!`);
    }
    else {
        totalCost = Math.abs(totalCost-budgetPeter)
        console.log(`Not enough money! You need ${totalCost.toFixed(2)} leva more!`);
    }
}