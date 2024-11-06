/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  const startNum = Number(start);
  const endNum = Number(end);

  let i = startNum;
  let sum = 0;

  if (startNum > endNum) {
    while (i >= endNum) {
      sum = sum + i;
      i--;
    }
  } else {
    while (i <= endNum) {
      sum = sum + i;
      i++;
    }
  }

  return sum;
};
