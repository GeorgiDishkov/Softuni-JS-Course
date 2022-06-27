const { expect } = require(`chai`)
const carService = require(`./main.js`)

describe("carService", function () {
    describe("Fun_one", function () {
        it.skip("Happy path", function () {
            expect(carService.isItExpensive(`Engine`)).to.be.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive(`Transmission`)).to.be.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it.skip("edge cases", function () {
        });
        it.skip("invalid inputs", function () {
        });
    });
    describe("Fun_two", function () {
        it.skip("Happy path", function () {
        });
        it.skip("edge cases", function () {
        });
        it.skip("invalid inputs", function () {
        });
    });
    describe("Fun_three", function () {
        it.skip("Happy path", function () {
        });
        it.skip("edge cases", function () {
        });
        it.skip("invalid inputs", function () {
        });
    });
});
