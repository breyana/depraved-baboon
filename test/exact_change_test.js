const {checkCashRegister} = require("../algorithms/exact_change.js");
const {expect} = require('chai');

describe('Exact Change', function() {
  describe('Getting the change from the drawer', function() {
    it('should return Insufficient Funds if cash-in-drawer is less than change due',
    function() {
      expect(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0],
      ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
      ["TWENTY", 0], ["ONE HUNDRED", 0]])).to.equal("Insufficient Funds");
    });
    it('should return Closed if cash-in-drawer is equal to the change due',
    function() {
      expect(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0],
      ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
      ["TWENTY", 0], ["ONE HUNDRED", 0]])).to.equal("Closed");
    })
    it('should return change and denominations',
    function() {
      expect(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05],
      ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN"
      , 20.00], ["TWENTY", 60.00],["ONE HUNDRED", 100.00]])).to.eql(
        [["QUARTER", 0.50]]);
    })

  });
});
