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

    it("will return a quarter, a dime, a nickel, and a penny", function() {
      expect(coinCombo(41)).to.eql(["quarter", "dime", "nickel", "penny"]);
    });

    it("will return a quarter, 2 dimes, and a penny", function() {
      expect(coinCombo(46)).to.eql(["quarter", "dime", "dime", "penny"]);
    });

    //coinCombo2
    it("will return '2 quarters' on 50", function(){
      expect(coinCombo2(50)).to.eql("2 quarters 0 dimes 0 nickels 0 pennies");
    });

    it("will return '2 quarters 2 dimes' on 70", function(){
      expect(coinCombo2(70)).to.equal("2 quarters 2 dimes 0 nickels 0 pennies");
    });

    it("will return '1 quarters 1 dimes 1 nickels 1 pennies' on 41", function(){
      expect(coinCombo2(41)).to.equal("1 quarters 1 dimes 1 nickels 1 pennies");
    });

    //coinCombo3
    it("will return only the coins that will be given (2 quarters 2 dimes)", function(){
      expect(coinCombo3(70)).to.equal("2 quarters 2 dimes");
    })
});
