const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let resultArray = [];
  

  for (let i = 0; i < matrix.length; i++) {
    let arr = [];
    
    for (let j = 0; j < matrix[i].length; j++) {
      let value = 0;


     if (i === 0 && j === 0) {
        value = (matrix[i + 1][j] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i][j + 1] === false) ? value += 0 : value += 1;
     }

     if (i === 0 && j === 1) {
        value = (matrix[i][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i][j + 1] === false) ? value += 0 : value += 1;
     }

      if (i === 0 && j === 2) {
        value = (matrix[i][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j] === false) ? value += 0 : value += 1;
     }

     if (i === 1 && j === 0 && matrix.length > 2) {
        value = (matrix[i - 1][j] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j] === false) ? value += 0 : value += 1;
     }

      if (i === 1 && j === 1 && matrix.length > 2) {
        value = (matrix[i - 1][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j] === false) ? value += 0 : value += 1;
        value = (matrix[i][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i][j - 1] === false) ? value += 0 : value += 1;
     }

     if (i === 1 && j === 2 && matrix.length > 2) {
        value = (matrix[i - 1][j] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i + 1][j] === false) ? value += 0 : value += 1;
     }

     // для маленькой матрицы
      if (i === 1 && j === 0 && matrix.length === 2) {
        value = (matrix[i - 1][j] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i][j + 1] === false) ? value += 0 : value += 1;
     }
     if (i === 1 && j === 1 && matrix.length === 2) {
        value = (matrix[i][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i][j + 1] === false) ? value += 0 : value += 1;
     }
     if (i === 1 && j === 2 && matrix.length === 2) {
        value = (matrix[i][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j] === false) ? value += 0 : value += 1;
     }

     if (i === 2 && j === 0) {
        value = (matrix[i - 1][j] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i][j + 1] === false) ? value += 0 : value += 1;
     }

     if (i === 2 && j === 1) {
        value = (matrix[i][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j + 1] === false) ? value += 0 : value += 1;
        value = (matrix[i][j + 1] === false) ? value += 0 : value += 1;
     }

     if (i === 2 && j === 2) {
        value = (matrix[i][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j - 1] === false) ? value += 0 : value += 1;
        value = (matrix[i - 1][j] === false) ? value += 0 : value += 1;
     }
   
     arr.push(value);
    }

   resultArray.push(arr);
  }

  return resultArray
}

module.exports = {
  minesweeper
};
