
function telephoneCheck(str) {

  // We added a scenario where a valid number may include a dash after the country code
var regex = /^(1\s?)?[\s\-]?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}



telephoneCheck("1-155-555-5555");

// module.exports(telephoneCheck); be able to export and reuse in the file
