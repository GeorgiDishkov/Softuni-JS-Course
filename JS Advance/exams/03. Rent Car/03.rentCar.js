describe("RentCar", function () {
    describe("searchCar", function () {
        it("happy path validation", function () {
            expect(rentCar.searchCar(['audi', 'BMW', 'VW'], 'VW')).to.equal('There is 1 car of model VW in the catalog!')
            expect(rentCar.searchCar(['audi', 'BMW', 'VW', 'VW', 'VW'], 'VW')).to.equal('There is 3 car of model VW in the catalog!')
        });
        it('edge cases', () => {
            expect(() => rentCar.searchCar(['audi', 'BMW'], 'VW')).to.throw(Error, 'There are no such models in the catalog!');
        })
        it('incorect input', () => {
            expect(() => rentCar.searchCar({ audi: VW }, 'VW').to.throw(Error, `Invalid input!`));
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 5).to.throw(Error, `Invalid input!`));
            expect(() => rentCar.searchCar({ audi: VW }, ['VW']).to.throw(Error, `Invalid input!`));
        })
    });
    describe("calculatePriceOfCar ", function () {
        it("happy path", function () {
            expect(rentCar.calculatePriceOfCar('Volkswagen', 3)).to.equal('You choose Volkswagen and it will cost $60!');
        });
        it('out of catalog', () => {
            expect(() => rentCar.calculatePriceOfCar('Shkoda', 3)).to.throw(Error, 'No such model in the catalog!');
        });
        it('incorect input', () => {
            expect(() => rentCar.calculatePriceOfCar([], 3)).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('BMW', '3')).to.throw(Error, 'Invalid input!');
            expect(() => rentCar.calculatePriceOfCar({}, [3])).to.throw(Error, 'Invalid input!');
        });
    });
    describe("checkBudget", function () {
        it("Happy path", function () {
            expect(rentCar.checkBudget(1, 1, 1)).to.equal('You rent a car!');
            expect(rentCar.checkBudget(1, 2, 4)).to.equal('You rent a car!');
        });
        it('throw Error', () => {
            expect(rentCar.checkBudget(1, 3, 1)).to.equal('You need a bigger budget!');
        })
        it('invalid inputs', () => {
            expect(() => rentCar.checkBudget('1', 1, 1)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, '1', 1)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 1, 0.1)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, ['1'], '1')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('1', 1, '1')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('1', {1:1}, 1)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('1', '1', '1')).to.throw('Invalid input!');
        })
    });
});