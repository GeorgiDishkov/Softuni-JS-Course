describe("numberOperations", function () {
    describe("powNumber", function () {
        it("Happy path", function () {
            expect(numberOperations.powNumber(5)).to.equal(25);
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber(-5)).to.equal(25);
        });
    });
    describe("numberChecker", function () {
        it("Happy path", function () {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker([1])).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('101')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker([101])).to.equal('The number is greater or equal to 100!');
        });
        it("throw errors", function () {
            expect(() => numberOperations.numberChecker('asdasd')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(['asdasd'])).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker([1, 1, 1, 1, 1])).to.throw('The input is not a number!');
        });
    });
    describe("sumArrays", function () {
        it("HappyPath", function () {
            expect(numberOperations.sumArrays([1, 1, 1, 1], [2, 2, 2, 2, 2, 2])).to.deep.equal([3, 3, 3, 3, 2, 2]);
            expect(numberOperations.sumArrays([1, 1], [2, 2, 2])).to.deep.equal([3, 3, 2]);
            expect(numberOperations.sumArrays([1], [2])).to.deep.equal([3]);
            expect(numberOperations.sumArrays([], [])).to.deep.equal([]);
            expect(numberOperations.sumArrays([-1, -1], [2, 2, 2])).to.deep.equal([1, 1, 2]);
            expect(numberOperations.sumArrays([-1, -1], [-2, -2, 2])).to.deep.equal([-3, -3, 2]);
            expect(numberOperations.sumArrays([1, 1], [-2, -2, 2])).to.deep.equal([-1, -1, 2]);

        });
    });
});