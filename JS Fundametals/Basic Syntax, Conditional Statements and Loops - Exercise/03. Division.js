function solve(number) {
    let division = 0;
    number = Number(number);
    if (number % 2 == 0) {
        division = 2
    } if (number % 3 == 0) {
        division = 3
    } if (number % 6 == 0) {
        division = 6
    } if (number % 7 == 0) {
        division = 7
    } if (number % 10 == 0) {
        division = 10
    }
    if (division >= 2 && division <= 10) {
        console.log("The number is divisible by " + division);
    }
    else {
        console.log("Not divisible");
    }
}