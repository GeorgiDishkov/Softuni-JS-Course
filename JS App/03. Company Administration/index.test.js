const companyAdministration = require('./index.js');
const { expect } = require('chai');

describe("companyAdministration", function () {
    describe("hiringEmployee", function () {
        it('happy path', () => {
            expect(companyAdministration.hiringEmployee('Georgi', 'Programmer', 2)).to.equal('Georgi is not approved for this position.');
            expect(companyAdministration.hiringEmployee('Georgi', 'Programmer', 0)).to.equal('Georgi is not approved for this position.');
            expect(companyAdministration.hiringEmployee('Georgi', 'Programmer', 3)).to.equal('Georgi was successfully hired for the position Programmer.');
        })
        it('throw error', () => {
            expect(() => companyAdministration.hiringEmployee('Georgi', 'Enginer', 2)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('Georgi', 'Enginer', 4)).to.throw('We are not looking for workers for this position.');
        })
    });
    describe("calculateSalary", function () {
        it('happy path', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
            expect(companyAdministration.calculateSalary(150)).to.equal(2250);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        })
        it('invalid inputs', () => {
            expect(() => companyAdministration.calculateSalary('150')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        })
    });
    describe("firedEmployee", function () {
        it('happy path', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.equal('Ivan, George');
            // expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George", "George", "George"], 2)).to.equal('Petar, Ivan, George, George');
            // expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
            expect(companyAdministration.firedEmployee(["Petar"], 0)).to.equal('');
        })
        it('invalid inputs', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 5)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], "3")).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(2, 3)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(3, "3")).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Peter'],1)).to.throw(`Invalid input`)
            expect(() => companyAdministration.firedEmployee(['Peter'],0.1)).to.throw(`Invalid input`)
            // expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw('Invalid input');
        })
    });
});
