const {updateInventory} = require("../algorithms/inventory_update.js");
const {expect} = require('chai');

describe('Update Inventory', function() {
  describe('Combines two arrays containing inventory data and sorts it alphabetically',
  function() {
    it('Adds quantity to existing inventory items',
    function() {
      expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])).to.eql([[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]);
    });
    it('Does not change the array if nothing is added', function() {
      expect(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])).to.eql([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]);
    });
  });
});
