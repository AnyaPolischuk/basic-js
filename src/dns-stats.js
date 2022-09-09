const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let resultObj = {};
  let sumOfDomain = 0;
  let domStr = '';
  let sum = 1;
  
 //каждый элемент массива разделяем на отдельный массив с помощью split
   domains.forEach(domain => {
   let domArr = domain.split('.'); // ['epam', 'com']  ['info', 'epam', 'com']
   domArr.reverse(); // переворачиваем каждый массив ['com', 'epam']  ['com', 'epam', 'info']
 
   for (let i = 0; i < domArr.length; i++) {
     domStr = domStr + `.${domArr[i]}`;
   
     if (!resultObj[domStr]) {
       resultObj[domStr] = 1;
     } else {
       resultObj[domStr] = sum + 1;
     }
   }
   
   domStr = '';
 
  })
  return resultObj;
 }

module.exports = {
  getDNSStats
};
