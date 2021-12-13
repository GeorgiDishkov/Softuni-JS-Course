function vacationBooksList (input){

    let pageNumber = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalHours = pageNumber/pagesPerHour;
    let hoursPerDay = (totalHours/days);

    console.log(hoursPerDay);
}