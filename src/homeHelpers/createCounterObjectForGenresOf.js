/**
 * creates a counter object for genres
 * @param {Object[]} booksArr array of objects representing books
 * @returns {Object} a object with
 * `genre name`: count of genre
 */

function createCounterObjectForGenresOf(booksArr) {
  return booksArr.reduce((accumObj, { genre: genreStr }) => {
    // 1. get the genre of the current book
    // 2. if the property exists, add 1 to the count, otherwise set it to 1
    const newCountInt = accumObj[genreStr] ? accumObj[genreStr] + 1 : 1;
    return { ...accumObj, [genreStr]: newCountInt }; // not mutating input
  }, {});
}
module.exports = { createCounterObjectForGenresOf };
