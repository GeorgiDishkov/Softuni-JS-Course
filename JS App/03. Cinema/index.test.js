const cinema = require('./index.js');
const { expect } = require('chai');

describe("cinema", function () {
    describe("showMovies", function () {
        it("happy path", function () {
            expect(cinema.showMovies(['1', '2', '3', '4'])).to.equal('1, 2, 3, 4');
            expect(cinema.showMovies(['1', '2'])).to.equal('1, 2');
        });
        it("invalid inputs", function () {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
    });
    describe("ticketPrice", function () {
        it("happy path", function () {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it("invalid inputs", function () {
            expect(() => cinema.ticketPrice('isDiscount')).to.throw('Invalid projection type.')
        });

    });
    describe("swapSeatsInHall", function () {
        it("happy path", function () {
            expect(cinema.swapSeatsInHall(19, 20)).to.equal('Successful change of seats in the hall.');
        });
        it("first input is valid", function () {
            expect(cinema.swapSeatsInHall(1, '2')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
        }); it("second input is valid", function () {
            expect(cinema.swapSeatsInHall('1', 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});
