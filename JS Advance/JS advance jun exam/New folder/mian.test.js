const { expect } = require(`chai`)
const carService = require(`./main.js`)

describe("carService", function () {
    describe("Fun_one", function () {
        it("Happy path", function () {
            expect(carService.isItExpensive(`Engine`)).to.be.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive(`Transmission`)).to.be.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("invalid inputs", function () {
            expect(carService.isItExpensive(`notTransmition`)).to.be.equal(`The overall price will be a bit cheaper`);
            expect(carService.isItExpensive(`notEnginer`)).to.be.equal(`The overall price will be a bit cheaper`);
        });
    });
    describe("Fun_two", function () {
        it("Happy path", function () {
            expect(carService.discount(2, 50)).to.equal(`You cannot apply a discount`);
            expect(carService.discount(1, 50)).to.equal(`You cannot apply a discount`);

            expect(carService.discount(3, 10)).to.equal(`Discount applied! You saved 1.5$`);
            expect(carService.discount(7, 10)).to.equal(`Discount applied! You saved 1.5$`);
            expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved 3$`);

        });
        it("invalid inputs", function () {
            expect(() => carService.discount(8, `10`)).to.throw(`Invalid input`);
            expect(() => carService.discount(`8`, 10)).to.throw(`Invalid input`);
            expect(() => carService.discount(`8`, `10`)).to.throw(`Invalid input`);
            expect(() => carService.discount(10)).to.throw(`Invalid input`);
            expect(() => carService.discount(`10`)).to.throw(`Invalid input`);
        });
    });
    describe("Fun_three", function () {
        it("Happy path", function () {
            expect(carService.partsToBuy([], [{ part: `prat1`, part: `prat2`, part: `prat3`, part: `prat4` }])).to.equal(0);
            expect(carService.partsToBuy([], [])).to.equal(0);
            expect(carService.partsToBuy([{ part: "part1", price: 145 }, { part: "part2", price: 145 }, { part: "part3", price: 145 }], [`part1`, `part4`])).to.equal(145);
            expect(carService.partsToBuy([{ part: "part1", price: 145 }, { part: "part2", price: 145 }, { part: "part3", price: 145 }], [`part1`, `part3`])).to.equal(290);
            expect(carService.partsToBuy([{ part: "part1", price: 145 }, { part: "part2", price: 145 }, { part: "part3", price: 145 }], [`part1`, `part3`, `part5`])).to.equal(290);
            // expect(carService.partsToBuy(([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }] ,["blowoff valve", "injectors"]).to.equal();
            // expect(carService.partsToBuy(([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }] ,["blowoff valve", "injectors"]).to.equal();
            // expect(carService.partsToBuy(([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }] ,["blowoff valve", "injectors"]).to.equal();
        });
        it("invalid inputs", function () {
            expect(() => carService.partsToBuy({}, [{ part: `prat1`, part: `prat2`, part: `prat3`, part: `prat4` }])).to.throw(`Invalid input`);
            expect(() => carService.partsToBuy({}, { part: `prat1`, part: `prat2`, part: `prat3`, part: `prat4` })).to.throw(`Invalid input`);
            expect(() => carService.partsToBuy({},)).to.throw(`Invalid input`);
            expect(() => carService.partsToBuy([])).to.throw(`Invalid input`);
        });
    });
});
