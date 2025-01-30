/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  let result: boolean = true;
  if (typeof word === 'number') {
    let strNum: string = String(word);
    if (strNum.length < 10) {
      result = false;
    } else {
      for (let j = 0; j < 10; j++) {
        let found: boolean = false;
        for (let i = 0; i < strNum.length; i++) {
          if (strNum[i] === String(j)) {
            found = true;
            break;
          }
        }
        if (!found) {
          result = false;
          break;
        }
      }
    }
  }
  if (typeof word === 'string') {
    if (word.length < 27) {
      result = false;
    } else {
      const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
      const cleanStr: string = word.toLowerCase().replace(/\s/g, '');
      for (let i = 0; i < alphabet.length; i++) {
        if (!cleanStr.includes(String(alphabet[i]))) {
          result = false;
        }
      }
      result = true;
    }
  }

  return result;
};
