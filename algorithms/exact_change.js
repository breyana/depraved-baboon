/*
https://www.freecodecamp.com/challenges/exact-change

Design a cash register drawer function checkCashRegister() that accepts purchase
 price as the first argument (price), payment as the second argument (cash), and
  cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change
 due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.


*/


// Create an object which hold the denominations and their values
const denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];


function checkCashRegister(price, cash, cid) {
  var change = cash - price;


  // Transform CID array into drawer object
  var register = cid.reduce(function(accumulator, current) {
    accumulator.total += current[1];
    accumulator[current[0]] = current[1];
    return accumulator;
  }, {total: 0});

  // Handle exact change
  if (register.total === change) {
    return 'Closed';
  }

  // Handle obvious insufficent funds
  if (register.total < change) {
    return 'Insufficient Funds';
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(accumulator, current) {
    var valueOfCurrentChange = 0;
    var moniesWorth = current.val;
    var moniesName = current.name;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change reminaing
    while (register[moniesName] > 0 && change >= moniesWorth) {
      change -= moniesWorth;
      register[moniesName] -= moniesWorth;
      valueOfCurrentChange += moniesWorth;
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (valueOfCurrentChange > 0) {
        accumulator.push([ moniesName, valueOfCurrentChange ]);
    }

    return accumulator; // Return the current Change Array
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  return change_arr;
}

module.exports = {checkCashRegister};

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
