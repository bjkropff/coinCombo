describe('coinCombo', function(){
    it("will return false if a 0 is entered", function(){
        expect(coinCombo(0)).to.equal("No change for you!");
    });

    it("will return four pennies on a 4", function(){
        expect(coinCombo(4)).to.equal("4 pennies");
    });

    it("will return nickel on a 5", function(){
        expect(coinCombo(5)).to.equal("1 nickel");
    });

    it("will return dime on a 10", function () {
        expect(coinCombo(10)).to.equal("1 dime");
    });

    it("will return quarter on a 25", function() {
        expect(coinCombo(25)).to.equal("1 quarter");
    });

    it("will return 2 quarters on 50", function() {
        expect(coinCombo(50)).to.equal("2 quarters");
    });

    it("will return a quarter, a dime, a nickel, and a penny", function() {
      expect(coinCombo(41)).to.equal("1 quarter 1 dime 1 nickel 1 penny");
    });
    //
    it("will return a quarter, 2 dimes, and a penny", function() {
      expect(coinCombo(46)).to.equal("1 quarter 2 dimes 1 penny");
    });

    it("will return '2 quarters' on 50", function(){
      expect(coinCombo(50)).to.equal("2 quarters");
    });

    it("will return '2 quarters 2 dimes' on 70", function(){
      expect(coinCombo(70)).to.equal("2 quarters 2 dimes");
    });
    //
    it("will return '1 quarters 1 dimes 1 nickels 1 pennies' on 41", function(){
      expect(coinCombo(41)).to.equal("1 quarter 1 dime 1 nickel 1 penny");
    });

    it("will return only the coins that will be given (2 quarters 2 dimes)", function(){
      expect(coinCombo(70)).to.equal("2 quarters 2 dimes");
    })
});
