function solve (input) {
     
    let price = Number(input[0])
    let puzzle = Number(input[1])
    let talkingDoll = Number(input[2])
    let stuffedBear = Number(input[3])
    let minion = Number(input[4])
    let truck = Number(input[5]) 

    let allToy = puzzle + talkingDoll + stuffedBear + minion +truck; 
    let allMoney = puzzle* 2.60 + talkingDoll * 3 + stuffedBear * 4.10 + 
    minion * 8.20 + truck * 2;
    if (allToy >= 50){
        allMoney = allMoney*0.75;
    }
    allMoney = allMoney *0.90;

    if(price <= allMoney){
        allMoney = Math.abs(allMoney - price) 
        console.log(`Yes! ${allMoney.toFixed(2)} lv left.`);
    }
    else { 
        allMoney = Math.abs(allMoney - price) 
        console.log(`Not enough money! ${allMoney.toFixed(2)} lv needed.`);
    }   
}