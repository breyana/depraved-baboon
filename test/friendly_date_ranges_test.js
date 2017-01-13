const {makeFriendlyDates} = require("../algorithms/friendly_date_ranges.js");
const {expect} = require('chai');

describe('Make Friendly Dates', function() {
  describe('Changes \"YYYY-MM-DD\" format to \"Month Day, Year\" while disregarding duplicate information',
    function() {
    it('should return only the month and day when given the same year',
    function() {
      expect(makeFriendlyDates(["2017-03-01", "2017-05-05"])).to.eql(["March 1st, 2017","May 5th"]);
    });
    it('should return only the day when given the same year and month', function() {
      expect(makeFriendlyDates(["2016-07-01", "2016-07-04"])).to.eql(["July 1st","4th"]);
    });
    it('should return full dates when given different year and month', function() {
      expect(makeFriendlyDates(["2016-07-01", "2018-07-04"])).to.eql(["July 1st, 2016", "July 4th, 2018"]);
    });
    it('should return only the month and day for the second date if the second date is less than a year away',
    function() {
      expect(makeFriendlyDates(["2022-09-05", "2023-09-04"])).to.eql(["September 5th, 2022","September 4th"]);
    })
  });
});
