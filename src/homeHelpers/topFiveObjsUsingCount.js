/**
 * finds the top 5 of the count objects
 * @param {Object[]} arrOfObjects array of count objects each with a 'count' key
 * @returns {Object[]} array of objects representing counts
 */

// I use this multiple times. This is nice and DRY isn't it?
function topFiveObjsUsingCount(arrOfObjects) {
  // 1. Sort the array by count
  const sortedArr = [
    ...arrOfObjects,
  ].sort(({ count: countAInt }, { count: countBInt }) =>
    countAInt > countBInt ? -1 : 1
  );
  // 2. slice the first 5 largest counts and return it
  return sortedArr.slice(0, 5);
}
module.exports = { topFiveObjsUsingCount };
