const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let res = [];
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if (sum !== 0) {
        res.push(sum + 1);
        res.push(str[i]);
      } else res.push(str[i]);
      sum = 0;
    }
    if (str[i] === str[i + 1]) {
      sum++;
    }
  }
  return res.join('');
}

module.exports = {
  encodeLine
};
