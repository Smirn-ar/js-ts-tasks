/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let finalStr = '';
  let temporaryArr1 = [];
  let temporaryArr2 = [];
  let i = 0;
  //нахождение всех подстрок в str1 и кидаем их в отдельный массив
  while (i < str1.length) {
    let c = i + 1;
    while (c <= str1.length) {
      temporaryArr1.push(str1.slice(i, c));
      c++;
    }
    i++;
  }
  //нахождение всех подстрок в str2 и также кадаем в отдеьный массив
  let m = 0;
  while (m < str2.length) {
    let c = m + 1;
    while (c <= str2.length) {
      temporaryArr2.push(str2.slice(m, c));
      c++;
    }
    m++;
  }
  //нахождение совпадений и запись их в массив совпалений
  let matchesArr = [];
  let b = 0;
  while (b < temporaryArr1.length) {
    if (temporaryArr2.includes(temporaryArr1[b])) {
      matchesArr.push(temporaryArr1[b]);
    }
    b++;
  }
  //нахождение самой длинной строки
  let k = 0;
  while (k < matchesArr.length) {
    if (matchesArr[k].length > finalStr.length) {
      finalStr = matchesArr[k];
    }
    k++;
  }

  return finalStr;
};
