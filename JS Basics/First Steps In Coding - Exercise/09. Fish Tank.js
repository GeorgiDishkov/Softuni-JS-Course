function  fishTank (input) {

    let lenght = Number(input[0]);
    let wight = Number(input[1]);
    let hight = Number(input[2]);
    let percent = Number(input[3]/100);

    let tankValue = (lenght*wight*hight)*0.001;
    let finalValueOfTank = tankValue -(tankValue*percent);

    console.log(finalValueOfTank);
}