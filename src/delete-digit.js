const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let str = String(n);
  let arr = [];
  let res;
  for (let item of str) {
    str = String(n);
    str = +str.replace(item, '');
    arr.push(str);
  }
  res = Math.max(...arr);
  return res;
}

module.exports = {
  deleteDigit
};
