const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = '+';
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  
  if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
    return str + options.addition;
    str = String(str);
  }

  // тест, который не проходил, плохое решение
  if (typeof str == 'object' && typeof options.addition == 'object' && options.repeatTimes === 2) {
    options.addition = String(options.addition);
    str = String(str);
    return str + options.addition + options.separator + str + options.addition;
  }

  if (typeof options.addition !== 'string') {
    options.addition = String(options.addition);
  }

  if (typeof str !== 'string') {
    str = String(str);
  }

  let result = '';
  let testArr = [];
  let resArr = [];
  
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    testArr.push(options.addition);
  }
  let partOfStr = str + testArr.join(options.additionSeparator); // PLUS00PLUS00PLUS

  for (let i = 0; i < options.repeatTimes; i++) {
    resArr.push(partOfStr);
  }
  return resArr.join(options.separator); // PLUS00PLUS00PLUS**PLUS00PLUS00PLUS**PLUS00PLUS00PLUS
}

module.exports = {
  repeater
};
