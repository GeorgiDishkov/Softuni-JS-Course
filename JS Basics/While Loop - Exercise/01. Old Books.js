function solve (input){
    let index = 0;
    let favoriteBook = input[index];
    index++;
    let NextBoock = input[index]
    let flag = false
    let count = 0;
    while (NextBoock !== `No More Books`) {
        if (NextBoock === favoriteBook){
            flag = true;
            break;
        }
        index ++;
        NextBoock = input[index];
        count ++;
    }
    if (flag === false){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`);
    }else {
        console.log(`You checked ${count} books and found it.`);
    }
}