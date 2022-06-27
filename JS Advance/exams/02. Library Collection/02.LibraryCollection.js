class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error(`Not enough space in the collection.`);
        }
        this.books.push({
            bookName,
            bookAuthor,
            payed: false,
        })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        let findBook = this.books.find(e => e.bookName == bookName);
        if (!findBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (findBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        } else {
            findBook.payed = true;
            return `${findBook.bookName} has been successfully paid.`;
        }
    }
    removeBook(bookName) {
        const findBook = this.books.find(e => e.bookName == bookName);

        if (!findBook) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (!findBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        const position = this.books.indexOf(findBook);
        this.books.splice(position, 1);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            let result = []

            result.push([`The book collection has ${this.capacity - this.books.length} empty spots left.`]);
            sorted.forEach((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`);
            });
            return result.join(`\n`).trim();
        } else {
            let findedBooks = this.books.find(e => e.bookAuthor == bookAuthor);

            if (findedBooks) {
                let result = [];
                let paid = findedBooks.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${findedBooks.bookName} == ${findedBooks.bookAuthor} - ${paid}.`);
                return result.join(`\n`).trim();
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }
    }
}