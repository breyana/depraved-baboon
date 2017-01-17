const {telephoneCheck} = require("../algorithms/phone_number_validation.js");
const {expect} = require('chai');

describe('US Phone Number Validation', function() {
  describe('Check if telephone number has required format', function() {
    it('Accept valid US telephone numbers without country code prefix',
    function() {
      expect(telephoneCheck("555-555-5555")).to.be.true;
    });
    it('Accept valid US telephone numbers with a valid country code prefix',
    function() {
      expect(telephoneCheck("1 555-555-5555")).to.be.true;
    });
    it('Accept valid US number with parentheses and country code prefix',
    function() {
      expect(telephoneCheck("1 (555) 555-5555")).to.be.true;
    });
    it('Accept valid US number without parentheses or country code prefix',
    function() {
      expect(telephoneCheck("5555555555")).to.be.true;
    });
    it('Accept valid US number without parentheses and country code prefix but with hyphens',
    function() {
      expect(telephoneCheck("555-555-5555")).to.be.true;
    });
    it('Valid US number with parentheses and hyphens but without country code prefix',
    function() {
      expect(telephoneCheck("(555)555-5555")).to.be.true;
    });
    it('Valid US number with parentheses and hyphens with country code prefix but no spaces',
    function() {
      expect(telephoneCheck("1(555)555-5555")).to.be.true;
    });


  });
  describe('Check if telephone number fails to meet required format', function() {
    it('Accept valid US telephone numbers without country code prefix',
    function() {
      expect(telephoneCheck("555-555-5555")).to.be.true;
    });
  });
});
