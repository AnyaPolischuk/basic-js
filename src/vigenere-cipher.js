const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }
  
  encrypt(message, key) {
    if (message == null || key == null) throw Error('Incorrect arguments!');
  
    let kf = Math.ceil(message.length / key.length);
    key = key.repeat(kf);
    
    message = message.toUpperCase();
    key = key.toUpperCase();
    let charCodeA = 'A'.charCodeAt(0);
    let arrShifred = [];
  
    let test = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        test.push(i);
      }
    }
  
   key = key.split('');
  for (let i = 0; i < test.length; i++) {
    key.splice(test[i], 0, ' ');
  }
  
  key = key.join('').slice(0, message.length); // SAME ENGTHK YSA
  //console.log(key);
  
  
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        arrShifred[i] = message[i];
      } else {
        let shift = key.charCodeAt(i) - charCodeA; //сдвиг
        let newChar = shift + message.charCodeAt(i); //новая буква
  
        if (newChar > 90) {
          newChar = newChar - 90 + 65 - 1;
          arrShifred[i] = String.fromCharCode(newChar);
          //console.log(newChar);
        } else {
          arrShifred[i] = String.fromCharCode(newChar);
          //console.log(newChar);
        }
      }
    }
    if (this.value === false) {
      return arrShifred.reverse().join('')
    } else
  return arrShifred.join('');
  
  }
  


  
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == null || key == null) throw Error('Incorrect arguments!');
  

  let kf = Math.ceil(encryptedMessage.length / key.length);
  key = key.repeat(kf);
  
  encryptedMessage = encryptedMessage.toUpperCase();
  key = key.toUpperCase();
  let charCodeA = 'A'.charCodeAt(0);
  let arrShifred = [];

  let test = [];
  for (let i = 0; i < encryptedMessage.length; i++) {
    if (encryptedMessage[i] === ' ') {
      test.push(i);
    }
  }


 key = key.split('');
for (let i = 0; i < test.length; i++) {
  key.splice(test[i], 0, ' ');
}

key = key.join('').slice(0, encryptedMessage.length); // SAME ENGTHK YSA
//console.log(key);


  for (let i = 0; i < encryptedMessage.length; i++) {
    if (encryptedMessage.charCodeAt(i) < 65 || encryptedMessage.charCodeAt(i) > 90) {
      arrShifred[i] = encryptedMessage[i];
    } else if (encryptedMessage[i] === key[i]) {
      arrShifred[i] = 'A';

    } else if (encryptedMessage.charCodeAt(i) > key.charCodeAt(i)) {
      let shift = key.charCodeAt(i) - charCodeA; //сдвиг
      arrShifred[i] = String.fromCharCode(encryptedMessage.charCodeAt(i) - shift);
    }  else {
      let shift = 90 - key.charCodeAt(i);
      arrShifred[i] = String.fromCharCode(shift + encryptedMessage.charCodeAt(i) + 1);
    }
  }
  if (this.value === false) {
    return arrShifred.reverse().join('');
  } else 
  return arrShifred.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
