/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let countSymbol = [];
  let i = 0;
  while (i < arr.length) {
    if (countSymbol.every(element => element !== arr[i])) {
      countSymbol.push(arr[i]);
    }
    i++;
  }
  return countSymbol.length;
};
