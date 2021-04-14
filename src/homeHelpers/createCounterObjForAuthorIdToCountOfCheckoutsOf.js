/**
 * creates a counter object for author IDs
 * @param {Object[]} booksArr array of objects representing books
 * @returns {Object} a object with
 * `author ID`: count of authors
 */

function createCounterObjForAuthorIdToCountOfCheckoutsOf(booksArr) {
  return booksArr.reduce((accumObj, bookObj) => {
    const { authorId: authorIdInt, borrows: borrowsArr } = bookObj;
    // 1. get the authorId, borrows of the current book
    // 2. if the property exists, add 1 to the count, otherwise set it to 1
    const newCountInt = accumObj[authorIdInt]
      ? accumObj[authorIdInt] + borrowsArr.length
      : borrowsArr.length;
    return { ...accumObj, [authorIdInt]: newCountInt };
  }, {});
}
module.exports = { createCounterObjForAuthorIdToCountOfCheckoutsOf };
