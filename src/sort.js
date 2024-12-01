/**
 * Write a function that returns a function that will sort all it's arguments in an order
 * being specified by sortComparator function from TestUtils object
 *
 * Note: You MUST use a function sortComparator from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
module.exports.sort = function sort(TestUtils) {
  return function (...arrays) {
    const sortComparator = function (a, b) {
      if (typeof a === 'number' && typeof b === 'number') {
        return b - a;
      }

      if (typeof a === 'string' && typeof b === 'string') {
        return b.localeCompare(a);
      }

      return a.toString() < b.toString() ? -1 : a.toString() > b.toString() ? 1 : 0;
    };

    return arrays.sort(sortComparator);
  };
};
