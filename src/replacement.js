/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  let finalArr = [];
  let i = 0;
  while (i < arr.length) {
    let strNum = Math.abs(arr[i]).toString();
    let length = strNum.length;

    if (length === 1) {
      finalArr.push(1);
    } else if (length === 2) {
      finalArr.push(2);
    } else if (length === 3) {
      finalArr.push(3);
    } else {
      finalArr.push(4);
    }

    i++;
  }
  return finalArr;
};
