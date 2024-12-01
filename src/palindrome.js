/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
  return function (str) {
    const newStr = str.toLowerCase();

    let resultStr = '';
    for (let i = 0; i < newStr.length; i++) {
      const char = newStr[i];
      if (/^[a-z0-9]$/.test(char)) {
        resultStr += char;
      }
    }

    const isPalindrome = function (resultStr) {
      if (typeof resultStr !== 'string') {
        throw new Error(`Cannot find variable "str" in a provided context ${JSON.stringify(resultStr)}`);
      }

      if (typeof resultStr === 'string' && resultStr.length === 0) {
        return true;
      }

      return resultStr.split('').reverse().join('') === resultStr;
    };
    return isPalindrome(resultStr);
  };
};
