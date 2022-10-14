const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    let arrDepth = 1;
    let maxDepth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let childArrDepth = this.calculateDepth(arr[i]);
        if (childArrDepth > maxDepth) {
          maxDepth = childArrDepth;
        }
      }
    }
    return arrDepth + maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
