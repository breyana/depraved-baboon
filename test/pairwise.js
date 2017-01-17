const {pairwise} = require("../algorithms/pairwise.js");
const {expect} = require('chai');

describe('Pairwise', function() {
  describe('Find the pair and sum the indices', function() {
    it('Pairwaise returns the sum of the indices of unique pairs of elements' +
          'which sum to an argument'
        +'sum the indices',
    function() {
      expect(pairwise([1, 4, 2, 3, 0, 5], 7)).to.equal(11);
    });
  });
  describe('Find the pair and sum the indices', function() {
    it('Evaluate an array with 4 elements and find the pairs that equal 4, then'
        +'sum the indices',
    function() {
      expect(pairwise([1, 3, 2, 4], 4)).to.equal(4);
    });
  });
  describe('Find the pair and sum the indices', function() {
    it('Evaluate an array with 4 elements and find the pairs that equal 4, then'
        +'sum the indices',
    function() {
      expect(pairwise([1, 1, 1], 2)).to.equal(1);
    });
  });
  describe('Find the pair and sum the indices', function() {
    it('Evaluate an array with 4 elements and find the pairs that equal 4, then'
        +'sum the indices',
    function() {
      expect(pairwise([0, 0, 0, 0, 1, 1], 1)).to.equal(10);
    });
  });
  describe('Find the pair and sum the indices', function() {
    it('Evaluate an array with 4 elements and find the pairs that equal 4, then'
        +'sum the indices',
    function() {
      expect(pairwise([], 100)).to.equal(0);
    });
  });
});
