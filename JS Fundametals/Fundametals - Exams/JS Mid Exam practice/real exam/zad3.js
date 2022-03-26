function solve (input) {
    let library = input.shift().split('&');
    let action = {
        Add (book){
            book = book.trim();
            if(!library.includes(book)){
                library.unshift(book.trim());
            }
        },
        Take (book){
            book = book.trim();
            if(library.includes(book)){
                let index = library.indexOf(book);
                library.splice(index, 1);
            }
        },
        Swap (firstBook , secondBook){
            firstBook = firstBook.trim();
            secondBook = secondBook.trim();
            if(library.includes(firstBook) && library.includes(secondBook)){
                let firstBookIndex = library.indexOf(firstBook);
                let secondBookIndex = library.indexOf(secondBook);
                library[firstBookIndex] = secondBook;
                library[secondBookIndex] = firstBook;
            }
        },
        Insert (book){
                 book = book.trim();
            if(!library.includes(book)){
                library.push(book.trim());
            }
        },
        Check (index){
            index = Number(index);
            if(index >= 0 && index < library.length){
                console.log(library[index]);
            }
        },
    }
    for (const line of input) {
        if(line === `Done`){
            //to do
            console.log(library.join(`, `));
            break;
        }
        [command , ...books]=line.split('|');
        command = command.split(` `);
        action[command[0]](...books);
    }
}

solve ((["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])
)
console.log(`================================================================`);
solve ((["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"])
)
console.log(`================================================================`);
solve ((["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])
)
console.log(`================================================================`);