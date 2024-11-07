/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let i = 0;
  let finalArr = [];
  let repetitionArray = [];
  while (i < arr.length) {
    repetitionArray = [arr[i]];

    while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
      repetitionArray.push(arr[i + 1]);
      i++;
    }

    if (repetitionArray.length > finalArr.length) {
      finalArr = repetitionArray;
    }

    i++;
  }
  return finalArr;
};
