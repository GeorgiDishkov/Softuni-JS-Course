describe("Library", function () {

    describe("calcPriceOfBook", function () {
        it("happy path", () => {
            expect(library.calcPriceOfBook('book', 1999)).to.equal('Price of book is 20.00');
            expect(library.calcPriceOfBook('book', 1980)).to.equal('Price of book is 10.00');
            expect(library.calcPriceOfBook('book', 1780)).to.equal('Price of book is 10.00');
        });
        it("wrong inputs", () => {
            expect(() => library.calcPriceOfBook('1','1')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(1,1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(1,'9318239')).to.throw('Invalid input');
        });
    });
    describe("findBook", function () {
        it("happy path", function () {
            expect(library.findBook(['book1', 'book2', 'book3', 'book4'], 'book1')).to.equal('We found the book you want.');
            expect(library.findBook(['book1', 'book1', 'book3', 'book4'], 'book1')).to.equal('We found the book you want.');
            expect(library.findBook(['book1', 'book1', 'book3', 'book4'], 'book5')).to.equal('The book you are looking for is not here!');
        });
        it("throw errors", function () {
            expect(() => library.findBook([], 'book1')).to.throw('No books currently available');
        });
    });
    describe("arrangeTheBooks", function () {
        it("happy path", function () {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it("throw errors", function () {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
        it("wrong inputs", function () {
            expect(() => library.arrangeTheBooks('39')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });
    });
});