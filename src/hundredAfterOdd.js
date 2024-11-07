/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let finalArr = [];
  const hundred = 100;
  let i = 0;
  while (i < arr.length) {
    finalArr.push(arr[i]);
    if (arr[i] % 2 !== 0) {
      finalArr.push(hundred);
    }
    i++;
  }
  return finalArr;
};
