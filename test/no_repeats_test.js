const {permAlone} = require("../algorithms/no_repeats.js");
const {expect} = require('chai');

describe('No Repeats', function() {
  describe('Returns total permutations of a string that do not have repeated ' +
   'consecutive letters',
  function() {
    it('returns 0 when all letters in string are the same', function() {
      expect(permAlone("aaa"))
        .to.equal(0);
    });
    it('returns total permutations without repeats', function() {
      expect(permAlone("abcdefa"))
        .to.eql(3600);
    });
  });
});
