/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  let finalValue!: Number;

  if (from === 'm' && to === 'mi') {
    finalValue = value / 1609.34;
  } else if (from === 'mi' && to === 'm') {
    finalValue = value * 1609.34404;
  }

  if (from === 'gr' && to === 'pound') {
    finalValue = value / 453.592;
  } else if (from === 'pound' && to === 'gr') {
    finalValue = value * 453.592;
  }

  if (from === 'C' && to === 'K') {
    finalValue = value + 273.15;
  } else if (from === 'K' && to === 'C') {
    finalValue = value - 273.15;
  }

  return parseFloat(finalValue.toFixed(2));
};
