const {updateRecords, collection} = require("../algorithms/record_collection.js");
// const {collection} = require("../algorithms/record_collection.js")
const {expect} = require('chai');

describe.only('Record Collection', function() {
  describe('Manipulates a record collection with given values',
  function() {
    it('Adds the key "artist" and value "ABBA" to ID 5439', function() {
      updateRecords(5439, "artist", "ABBA");
      expect(collection[5439])
        .to.contain.any.keys({artist: "ABBA"});
    });
    it('Removes the key if the value set is empty', function() {
      updateRecords(2548, "tracks", "");;
      expect(collection[2548])
        .to.not.contain.any.keys('tracks');
    });
  });
});
