function solve(book, pagesPerHour, days) {
    let result = 0;

    result = book / pagesPerHour;
    result = result / days;

    console.log(result);
}

solve(212,
    20,
    2)
solve(432,
    15,
    4)