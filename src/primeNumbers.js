/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function numbers(frNum, endNum) {
    let finalArr = [];
    for (let i = frNum; i <= endNum; i++) {
      let m = 0;
      for (let f = 2; f <= Math.sqrt(i); f++) {
        if (i % f === 0) {
          m = 1;
          break;
        }
      }
      if (m === 0) {
        finalArr.push(i);
      }
    }
    return finalArr;
  };
};
