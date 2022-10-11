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
  if (!date) return 'Unable to determine the time of year!';
  
  try {
    date.getTime();
  } catch (error) {
    throw new Error ('Invalid date!');
  }
 
  let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  let numberOfMonts = date.getMonth();
  return season[numberOfMonts];
}

module.exports = {
  getSeason
};
