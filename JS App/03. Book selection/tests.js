let bookSelection = require('./bookSelection.js');
const { expect } = require('chai');

describe("bookSelection", function () {
    describe("isGenreSuitable", function () {
        it('invalid input - age are lower then 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age');
        })
        it('invalid input - age are equal to 12', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        })
        it('valid input - age are bigger then 12', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal('Those books are suitable');
        })
        it('valid input - book are with unlocked genre and age over 12', () => {
            expect(bookSelection.isGenreSuitable('Romance', 13)).to.equal('Those books are suitable');
        })
        it('valid input - are with unlocked genre and lower then 12 age', () => {
            expect(bookSelection.isGenreSuitable('Romance', 11)).to.equal('Those books are suitable');
        })
    });
    describe("isItAffordable", function () {
        it('valid price and invalid budget', () => {
            expect(() => bookSelection.isItAffordable(12, '13')).to.throw(Error, 'Invalid input');
        })
        it('invalid price and valid budget', () => {
            expect(() => bookSelection.isItAffordable('12', 13)).to.throw(Error, `Invalid input`);
            expect(() => bookSelection.isItAffordable('12', `13`)).to.throw(Error, `Invalid input`);
        })
        it('valid price and budget with more then required monney', () => {
            expect(bookSelection.isItAffordable(11, 15)).to.equal(`Book bought. You have 4$ left`);
        })
        it('valid price and budget with enoght monney', () => {
            expect(bookSelection.isItAffordable(12, 12)).to.equal(`Book bought. You have 0$ left`);
        })
        it('valid price and budget result is lower then 0', () => {
            expect(bookSelection.isItAffordable(15, 12)).to.equal(`You don't have enough money`);
        })
    });
    describe("suitableTitles", function () {
        it('happy path , each match', () => {
            expect(bookSelection.suitableTitles([{
                title: 'aaa',
                genre: 'a'
            }], 'a')).to.deep.equal(['aaa'])
        })
        it('happy path , two matches', () => {
            expect(bookSelection.suitableTitles([{
                title: 'aaa',
                genre: 'a'
            }, {
                title: 'bbb',
                genre: 'a'
            }, {
                title: 'abb',
                genre: 'b'
            }], 'a')).to.deep.equal(['aaa' , 'bbb'])
        })
        it('throw errors , incorect input', () => {
            expect(() =>bookSelection.suitableTitles('aa', 'a')).to.throw('Invalid input')
            expect(() =>bookSelection.suitableTitles('aa', 5)).to.throw('Invalid input')
            expect(() =>bookSelection.suitableTitles({
                title: 'aaa',
                genre: '5'
            }, 5)).to.throw('Invalid input')
        })
    });
});