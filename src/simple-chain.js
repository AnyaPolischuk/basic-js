const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {

     if (typeof value == 'number' ||  value !== 0 || !Number.isInteger(value)) {
       this.array.push(`( ${value} )`);
     } else {
      this.array.push(value);
    }

    return this;
  },
  removeLink(position) {
     if (typeof position !== 'number' || position > this.array.length || position <= 0) {
      this.array = [];
      throw new Error("You can\'t remove incorrect link!");
    } else {
      this.array.splice(position - 1, 1);
    }
   
   return this;
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    let result = this.array.join('~~');
    this.array = [];

    return result; 
  }
};

module.exports = {
  chainMaker
};
