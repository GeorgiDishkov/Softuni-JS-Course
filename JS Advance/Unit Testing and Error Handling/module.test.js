const mathEnforcer = require('./module');
const { assert } = require('chai');

describe('shoud test mathEnforcer input', () => {
    describe('Should test addFive', () => {
        describe('Should test addFive input', () => {
            it('should return undefined when input is String', () => {
                assert(mathEnforcer.addFive(`1`) === undefined);
            });
            it('should return undefined when input is Object', () => {
                assert(mathEnforcer.addFive({}) === undefined);
            });
            it('should return undefined when input is Array', () => {
                assert(mathEnforcer.addFive([]) === undefined);
            });
            it('should return undefined when input is undefined', () => {
                assert(mathEnforcer.addFive(undefined) === undefined);
            });
        });
        describe('Should test addFive funcionality', () => {
            it('should return possitive input', () => {
                assert(mathEnforcer.addFive(5) === 10);
            });
            it('should return negative input', () => {
                assert(mathEnforcer.addFive(-5) === 0);
            });
            it('should return decimal input', () => {
                assert(mathEnforcer.addFive(5.5) === 10.5);
            });
        });
    });
    describe('Should test subtractTen', () => {
        describe('Should test subtractTen input', () => {
            it('should return undefined when input is String', () => {
                assert(mathEnforcer.subtractTen(`1`) === undefined);
            });
            it('should return undefined when input is Object', () => {
                assert(mathEnforcer.subtractTen({}) === undefined);
            });
            it('should return undefined when input is Array', () => {
                assert(mathEnforcer.subtractTen([]) === undefined);
            });
            it('should return undefined when input is undefined', () => {
                assert(mathEnforcer.subtractTen(undefined) === undefined);
            });
        });
        describe('Should test subtractTen funcionality', () => {
            it('should return possitive input', () => {
                assert(mathEnforcer.subtractTen(5) === -5);
            });
            it('should return negative input', () => {
                assert(mathEnforcer.subtractTen(-5) === -15);
            });
            it('should return decimal input', () => {
                assert(mathEnforcer.subtractTen(15.5) === 5.5);
            });
        });
    });
    describe('Should test sum', () => {
        describe('Should test sum input', () => {
            //check number 1
            it('should return undefined when input is String and Number', () => {
                assert(mathEnforcer.sum(`number` ,1) === undefined);
            });
            it('should return undefined when input is Object and Number', () => {
                assert(mathEnforcer.sum({},1) === undefined);
            });
            it('should return undefined when input is Array and Number', () => {
                assert(mathEnforcer.sum([],1) === undefined);
            });
            it('should return undefined when input is Number and undefined', () => {
                assert(mathEnforcer.sum(undefined,1) === undefined);
            });
            //Check number 2
            it('should return undefined when input is Number and String', () => {
                assert(mathEnforcer.sum(1,`1`) === undefined);
            });
            it('should return undefined when input is Number and Object', () => {
                assert(mathEnforcer.sum(1,{}) === undefined);
            });
            it('should return undefined when input is Number and Array', () => {
                assert(mathEnforcer.sum(1,[]) === undefined);
            });
            it('should return undefined when input is Number and undefined', () => {
                assert(mathEnforcer.sum(1,undefined) === undefined);
            });
        });
        describe('Should test sum funcionality', () => {
            it('should return possitive input', () => {
                assert(mathEnforcer.sum(5 , 4) === 9);
            });
            it('should return negative input', () => {
                assert(mathEnforcer.sum(-5 , -10) === -15);
            });
            it('should return negative and positive input', () => {
                assert(mathEnforcer.sum(-5 , 10) === 5);
            });
            it('should return decimal and positive input', () => {
                assert(mathEnforcer.sum(5.5 , 10) === 15.5);
            });
            it('should return negative and decimal input', () => {
                assert(mathEnforcer.sum(-5 , 5.5) === 0.5);
            });
        });
    });
});