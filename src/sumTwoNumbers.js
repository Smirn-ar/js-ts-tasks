/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  if (typeof firstNumber === 'string') {
    firstNumber = firstNumber.replace(/ /g, '');
  }
  if (typeof secondNumber === 'string') {
    secondNumber = secondNumber.replace(/ /g, '');
  }

  return Number(firstNumber) + Number(secondNumber);
};
