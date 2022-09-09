const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (arguments.length ===  0) return 'Unable to determine the time of year!';
  if (!(date.getTime)) return 'Invalid date!';
  if (!(date instanceof Date)) return 'Invalid date!';
  //if (!(Object.prototype.toString.call(date) === '[object Date]')) return 'Invalid date!';
  //if (!(date.hasOwnProperty("getMonth"))) return 'Invalid date!';
  
  let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  let numberOfMonts = date.getMonth();
  return season[numberOfMonts];
}

module.exports = {
  getSeason
};
