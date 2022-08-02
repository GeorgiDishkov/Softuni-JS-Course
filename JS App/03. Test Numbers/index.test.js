const testNumbers = require('./index.js');
const { expect } = require('chai');

describe("testNumbers ", function () {
    describe("sumNumbers", function () {
        it("Happy path", function () {
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
            expect(testNumbers.sumNumbers(1, 2.50)).to.equal('3.50');
            expect(testNumbers.sumNumbers(1.5, 0)).to.equal('1.50');
            expect(testNumbers.sumNumbers(1, 0)).to.equal('1.00');
            expect(testNumbers.sumNumbers(0, 2)).to.equal('2.00');
            expect(testNumbers.sumNumbers(1, 1.45)).to.equal('2.45');
            expect(testNumbers.sumNumbers(1.4533, 1)).to.equal('2.45');
            expect(testNumbers.sumNumbers(1.4563, 1)).to.equal('2.46');
            expect(testNumbers.sumNumbers(1.22222, 1.22222)).to.equal('2.44');
            expect(testNumbers.sumNumbers(1.5, 1.5)).to.equal('3.00');
            expect(testNumbers.sumNumbers(4.5, -1.5)).to.equal('3.00');
            expect(testNumbers.sumNumbers(4, -1.5)).to.equal('2.50');
            expect(testNumbers.sumNumbers(2, -1)).to.equal('1.00');
            expect(testNumbers.sumNumbers(-2, 1)).to.equal('-1.00');
            expect(testNumbers.sumNumbers(-2, -1)).to.equal('-3.00');
            expect(testNumbers.sumNumbers(-1, 1)).to.equal('0.00');
        });
        it("invalid inputs", function () {
            expect(testNumbers.sumNumbers()).to.equal(undefined);
            expect(testNumbers.sumNumbers([1, 2, 3])).to.equal(undefined);
            expect(testNumbers.sumNumbers([1], [2])).to.equal(undefined);
            expect(testNumbers.sumNumbers(1.45)).to.equal(undefined);
            expect(testNumbers.sumNumbers('1')).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '1.45')).to.equal(undefined);
            expect(testNumbers.sumNumbers(-1, '1.45')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 1.45)).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', -1.45)).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', '1.45')).to.equal(undefined);
        });
    });
    describe("numberChecker", function () {
        it("Happy path", function () {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(!NaN)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker([2])).to.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(-2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(5.6)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(2.4)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(5)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(2.5)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(5.5)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-1)).to.equal('The number is odd!');
        });
        it("incorect inout", function () {
            expect(() => testNumbers.numberChecker(1,2).to.throw('The input is not a number!'));
            expect(() => testNumbers.numberChecker('qweqweqw').to.throw('The input is not a number!'));
            expect(() => testNumbers.numberChecker(['qweqweqw']).to.throw('The input is not a number!'));
            expect(() => testNumbers.numberChecker([1, 2, 2, 2, 2]).to.throw('The input is not a number!'));
        });
    });
    describe("averageSumArray", function () {
        it("Happy path", function () {
            expect(testNumbers.averageSumArray([2, 2, 2, 2])).to.equal(2);
            expect(testNumbers.averageSumArray([2])).to.equal(2);
            expect(testNumbers.averageSumArray([0])).to.equal(0);
        });
        it("negative iputs", function () {
            expect(testNumbers.averageSumArray([-1, -1, -1, -1])).to.equal(-1);
            expect(testNumbers.averageSumArray([2, -2, -2, 2])).to.equal(0);
            expect(testNumbers.averageSumArray([0, 0, 0, 0])).to.equal(0);
            expect(testNumbers.averageSumArray([1.25, 1.25, 1.25, 1.25])).to.equal(1.25);
        });
    });
});



