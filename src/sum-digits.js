const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let str = String(n);
  let arr = [];
  for (let item of str) {
    arr.push(+item);
  }
   let sum = arr.reduce(function(sum, i) {
      return sum + i;
    })
   if (String(sum).length >= 2) {
    return +str[str.length - 1];
   } else {
    return sum;
  }
}

module.exports = {
  getSumOfDigits
};
