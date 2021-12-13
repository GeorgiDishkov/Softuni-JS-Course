function suppliesforSchool (input){

    let packPens = Number(input[0]*5.80);
    let packMark = Number(input[1]*7.20);
    let litersPreparation = Number(input[2]*1.20);
    let percent = Number(input[3]/100);

    let fullSum = packPens + packMark +litersPreparation;
    let percentDiscont = fullSum - (fullSum* percent);

    console.log(percentDiscont);
}