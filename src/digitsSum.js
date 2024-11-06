/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  let summa = 0;
  let i = 0;
  n = Math.abs(n);
  const nStr = n.toString();
  while (i < nStr.length) {
    summa = summa + Number(nStr[i]);
    i++;
  }
  return summa;
};
