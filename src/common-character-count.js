const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let sum = 0;

  for (let item of s2) {
    //console.log(item);
    if (s1.includes(item)) {
      s1 = s1.replace(item, '');
      //console.log(s1);
      sum++
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
