const {orbitalPeriod} = require("../algorithms/map_the_debris.js");
const {expect} = require('chai');

describe('Map the Debris', function() {
  describe('Converts average altitude of space debris into their orbital period',
  function() {
    it('returns the name and the orbital period of one object', function() {
      expect( orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))
        .to.eql([{name: "sputnik", orbitalPeriod: 86400}]);
    });
    it('returns the names and orbital period of multiple objects', function() {
      expect(orbitalPeriod([{name: "iss", avgAlt: 413.6},
            {name: "hubble", avgAlt: 556.7},
            {name: "moon", avgAlt: 378632.553}]))
        .to.eql([{name : "iss", orbitalPeriod: 5557},
            {name: "hubble", orbitalPeriod: 5734},
            {name: "moon", orbitalPeriod: 2377399}]);
    });
  });
});
