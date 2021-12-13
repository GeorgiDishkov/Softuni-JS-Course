function solve (input) {
    let budget = Number(input[0])
    let statists = Number(input[1])
    let eachStatPrice = Number(input[2])

    let decor = budget * 0.10;
    let fullPriceStat = statists * eachStatPrice;
    if (statists >= 150){
        fullPriceStat = fullPriceStat * 0.90
    }
    let allConsum = decor + fullPriceStat;
    if(budget >= (allConsum)){
        budget = Math.abs(budget - allConsum)
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${budget.toFixed(2)} leva left.`);
    }
    else {
        budget = Math.abs(budget - allConsum)
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${budget.toFixed(2)} leva more.`);
    }
}