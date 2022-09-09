const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  let index = 0.693;

  if (typeof sampleActivity !== 'string') return false;
  if (sampleActivity === undefined || sampleActivity == '') return false;

  for (let i = 0; i < sampleActivity.length; i++) {
   if (sampleActivity[i] < '0' || sampleActivity[i] > '9' || +sampleActivity <= 0 || +sampleActivity >=15) {
    return false;
   } else {
    let k = index / HALF_LIFE_PERIOD;
    let approximateAge = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
     return approximateAge;
   }
  }

}
dateSample();



module.exports = {
  dateSample
};
