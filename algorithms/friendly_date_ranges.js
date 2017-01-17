/* https://www.freecodecamp.com/challenges/friendly-date-ranges
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].


*/


function makeFriendlyDates(arr) {

  var arr1 = arr[0].split("-");
  var arr2 = arr[1].split("-");
  var newArr = arr1.concat(arr2);

  // combined both arrays (uncomment console log below to see output)
  // console.log("new combined array " + newArr)

  var arrIntegers = newArr.map(function (element) {
    return parseInt(element);
  });

  // Coverted each string element to integer (uncomment console log below to see output)
  // console.log("converted each string element to integer " + arrIntegers)

  var convertToMonth = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"};

  var convertToDay = {
            "1": "1st",
            "2": "2nd",
            "3": "3rd",
            "4": "4th",
            "5": "5th",
            "6": "6th",
            "7": "7th",
            "8": "8th",
            "9": "9th",
            "10": "10th",
            "11": "11th",
            "12": "12th",
            "13": "13th",
            "14": "14th",
            "15": "15th",
            "16": "16th",
            "17": "17th",
            "18": "18th",
            "19": "19th",
            "20": "20th",
            "21": "21st",
            "22": "22nd",
            "23": "23rd",
            "24": "24th",
            "25": "25th",
            "26": "26th",
            "27": "27th",
            "28": "28th",
            "29": "29th",
            "30": "30th",
            "31": "31st"};

  var year1 = arrIntegers[0];
  var month1 = convertToMonth[arrIntegers[1]];
  var day1 = convertToDay[arrIntegers[2]];
  // console.log("first array of dates " + month1 + " " + day1 + ", " + year1);


  var year2 = arrIntegers[3];
  var month2 = convertToMonth[arrIntegers[4]];
  var day2 = convertToDay[arrIntegers[5]];
  // console.log("Second array of dates " + month2 + " " + day2 + ", " + year2);


  // created if statements for conditions that remove redundant information

    if (year1 === year2 && month1 === month2 && day1 === day2) {
      return [month1 + " " + day1 + ", " + year1];

    } else if (year1 === year2 && month1 === month2) {
      return [month1 + " " + day1, day2];

    } else if (year1 === year2 && month1 !== month2) {
      return [month1 + ' ' + day1 + ', ' + year1,month2 + ' ' + day2];

    } else if (year1 === year2-1 && month1 !== month2) {
      return [month1 + ' ' + day1,month2 + ' ' + day2];

    } else if (year1 !== year2 && month1 === month2 && day1 > day2) {
      return [month1 + ' ' + day1 + ', ' + year1,month2 + ' ' + day2];

    } else {
      return [month1 + ' ' + day1 + ', ' + year1,month2 + ' ' + day2 + ', ' + year2];
    }

}

module.exports = {makeFriendlyDates};
