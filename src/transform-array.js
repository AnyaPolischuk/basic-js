const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// Тупое решение 
 function transform(arr) {
  let resultArray = [];
 
  if (!(Array.isArray(arr))) throw new Error('\'arr\' parameter must be an instance of the Array!');


  let array = [...arr]; // заводим переменную, тк исходный массив не должен быть изменен

  for (let i = 0; i < array.length; i++) {

    //нашли условие и условие В НАЧАЛЕ массива
    if (array.indexOf('--discard-prev') == 0 || array.indexOf('--double-prev') == 0 ) {
      array.shift();
    }

    //нашли условие и условие В КОНЦЕ массива
     if (array.indexOf('--double-next') === (array.length - 1) || array.indexOf('--discard-next') === (array.length - 1)) {
      array.pop();
     }

    //нашли условие и через 1 после него еще одно условие
     if ((array[i] === '--discard-next' && array[i + 2] === '--double-prev') ||
     (array[i] === '--discard-next' && array[i + 2] === '--discard-prev')) {
      array.splice(i, 3);
     }

    //нашли условие и через 1 после него еще одно условие(double)
      if (array[i] === '--double-next' && array[i + 2] === '--double-prev') {
        array.splice(i, 1);
        array.splice(i + 1, 1);
        resultArray.push(array[i], array[i]);
       }

    //нашли условие и через 1 после него еще одно условие(discard)
       if (array[i] ==='--double-next' && array[i + 2] === '--discard-prev') {
        array.splice(i, 1);
        array.splice(i + 1, 1)
       }

    //нашли условие и условие не в начале массива
    if (array[i] === '--discard-prev' && array[i].indexOf('--discard-prev') !== 0) {
      resultArray.pop(array[i - 1]);
    } 
    
    //нашли условие и оно не в конце массива
    if (array[i] === '--double-next' && array[i].indexOf('--double-next') !== array.length - 1) {
       resultArray.push(array[i + 1]);
    } 
    
    //нашли условие и условие не в начале массива
    if (array[i] === '--double-prev' && array[i].indexOf('--double-prev') !== 0) {
      resultArray.push(array[i - 1]);
    }
    
    //нашли условие и оно не в конце массива
    if (array[i] === '--discard-next' && array[i].indexOf('--double-next') !== array.length - 1) {
      resultArray.pop(array[i + 1]);
    }
    
    resultArray.push(array[i]);

  }
  return resultArray;
}

module.exports = {
  transform
};
