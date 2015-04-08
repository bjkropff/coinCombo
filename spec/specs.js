describe('coinCombo', function(){
    it("will return false if a 0 is entered", function(){
        expect(coinCombo(0)).to.eql(["no change for you"]);
    });

    it("will return a penny on a one", function(){
        expect(coinCombo(1)).to.eql(["penny"]);
    });

    it("will return nickel on a 5", function(){
        expect(coinCombo(5)).to.eql(["nickel"]);
    });

    it("will return dime on a 10", function () {
        expect(coinCombo(10)).to.eql(["dime"]);
    });

    it("will return quarter on a 25", function() {
        expect(coinCombo(25)).to.eql(["quarter"]);
    });

    it("will return 2 quarters on 50", function() {
        expect(coinCombo(50)).to.eql(["quarter","quarter"]);
    });

    // it("will return a quarter, a dime, a nickel, and a penny", function() {
    //   expect(coinComber(50)).to.eql(["quarter",])
    // })
});
