describe("dealership", function() {
    describe("dealership", function() {
        it("Happy path", function() {   
            expect(dealership.newCarCost('Audi A4 B8' , 15001)).to.equal(1);
            expect(dealership.newCarCost('Audi A6 4K' , 20001)).to.equal(1);
            expect(dealership.newCarCost('Audi A8 D5' , 25001)).to.equal(1);
            expect(dealership.newCarCost('Audi TT 8J' , 14001)).to.equal(1);
            expect(dealership.newCarCost('Audi TT 8J' , 13999)).to.equal(-1);
        });
        it("Happy path without disount", function() {
            expect(dealership.newCarCost('BMW' , 14001)).to.equal(14001);
        });
     });
     describe("carEquipment", function() {
        it("Happy path", function() {
            expect(dealership.carEquipment(['1','2','3','4'],[1])).to.deep.equal(['2']);
            expect(dealership.carEquipment(['1','2','3','4'],[1,2])).to.deep.equal(['2','3']);
            expect(dealership.carEquipment(['1','2','3','4'],[])).to.deep.equal([]);
            expect(dealership.carEquipment(['1','2'],[0,1])).to.deep.equal(['1','2']);
        });
     });
     describe("euroCategory", function() {
        it("Happy path", function() {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.')
        });
     });
});