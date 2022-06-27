describe("flowerShop", function () {
    describe("calcPriceOfFlowers", function () {
        it("happy Path", function () {
            expect(flowerShop.calcPriceOfFlowers('Roza', 1, 2)).to.equal('You need $2.00 to buy Roza!')
        });
        it("invalid inputs", function () {
            expect(() => flowerShop.calcPriceOfFlowers('Roza', 1, [1])).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers('Roza', '1', 1)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw('Invalid input!')
            expect(() => flowerShop.calcPriceOfFlowers(['Roza'], '1', '1')).to.throw('Invalid input!')

        });
    });
    describe("checkFlowersAvailable", function () {
        it("happy Path", function () {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal('The Rose are available!');
        });
        it("throw Errors", function () {
            expect(flowerShop.checkFlowersAvailable('Rosa', ["Rose", "Lily", "Orchid"])).to.equal('The Rosa are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('Rosa', [])).to.equal('The Rosa are sold! You need to purchase more!');
        });
    });
    describe("sellFlowers", function () {
        it("happy Path", function () {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid", "Orchid"], 3)).to.equal('Rose / Lily / Orchid');
        })
        it("invalid inputs", function () {
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid", "Orchid"], 4)).to.throw('Invalid input!');
            expect(()=>flowerShop.sellFlowers(1, 3)).to.throw('Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid", "Orchid"], '3')).to.throw('Invalid input!');
            expect(()=>flowerShop.sellFlowers(["Rose", "Lily", "Orchid", "Orchid"], -1)).to.throw('Invalid input!');
        });
    });
});