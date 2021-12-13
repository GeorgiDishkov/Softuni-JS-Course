function foodDelivery (input){

    let chickenMenu = Number(input[0]*10.35);
    let fishMenu = Number(input[1]*12.40);
    let veganMenu = Number(input[2]*8.15);

    let sum = chickenMenu+fishMenu+veganMenu;
    let des = sum*0.20;
    let finalCost = sum+des+2.50;

    console.log(finalCost);
}