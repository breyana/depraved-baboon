/*
https://www.freecodecamp.com/challenges/map-the-debris
Return a new array that transforms the element's average altitude into their
orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited
 is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is
398600.4418 km3s-2.

*/

const GM = 398600.4418;
const EARTHRADIUS = 6367.4447;
const CONSTANT = 2;

function orbitalPeriod(arr) {
  var arrayofObjects = [];
  var finalObject = arr.reduce(function(accumulator, currentObject){
    var objectSphere = {};
    objectSphere.name = currentObject.name;
    objectSphere.orbitalPeriod = Math.round(CONSTANT*Math.PI*Math.pow( Math.pow( EARTHRADIUS + currentObject.avgAlt , 3 ) / GM , 1/2 ));
    arrayofObjects.push(objectSphere);
  }, []);

  return arrayofObjects;
}

module.exports = {orbitalPeriod};
