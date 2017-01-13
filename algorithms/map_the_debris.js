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

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var constant = 2;
  var arrayofObjects = [];

  var finalObject = arr.reduce(function(accumulator, next){
    var objectSphere = {};
    objectSphere.name = next.name;
    objectSphere.orbitalPeriod = Math.round(constant*Math.PI*Math.pow( Math.pow( earthRadius + next.avgAlt , 3 ) / GM , 1/2 ));
    console.log(objectSphere);
    arrayofObjects.push(objectSphere);
  }, []);

  return arrayofObjects;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7},
{name: "moon", avgAlt: 378632.553}]);
