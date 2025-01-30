/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */

module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let countOfDays!: number;
  let dataOb!: Date;
  const nextLearYear = new Date(2024, 0, 1);

  if (typeof targetDate == 'string') {
    let dateArr: number[] = targetDate.split('.').map(Number);
    dataOb = new Date(dateArr[2]!, dateArr[1]! - 1, dateArr[0]);
  }

  if (typeof targetDate == 'object') {
    dataOb = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
  }

  let difference = nextLearYear.getTime() - dataOb.getTime();
  countOfDays = Math.ceil(difference / (1000 * 3600 * 24));
  return countOfDays;
};
