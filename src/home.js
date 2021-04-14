const {
  createCounterObjectForGenresOf,
} = require("./homeHelpers/createCounterObjectForGenresOf");
const {
  createCounterObjForAuthorIdToCountOfCheckoutsOf,
} = require("./homeHelpers/createCounterObjForAuthorIdToCountOfCheckoutsOf");
const {
  mapIdsToAuthorNameAndCountObj,
} = require("./homeHelpers/mapIdsToAuthorNameAndCountObj");
const {
  topFiveObjsUsingCount,
} = require("./homeHelpers/topFiveObjsUsingCount");

/**
 * finds the count of all the books
 * @param {Object[]} booksArr an array of generic objects representing a book
 * @returns {number} quantity of books
 */
function totalBooksCount(booksArr) {
  // return the length of books
  return booksArr.length;
}

/**
 * finds the count of all the accounts
 * @param {Object[]} accountsArr array of generic objects representing an
 * account
 * @returns {number} quantity of accounts
 */
function totalAccountsCount(accountsArr) {
  // return the length of accounts
  return accountsArr.length;
}

/**
 * finds the count of books checked out
 * @param {Object[]} booksArr array of generic objects that represents a book
 * @returns {number} the quantity of books that are presently borrowed
 */
function booksBorrowedCount(booksArr) {
  /**
   * 1. filter the books to have only unreturned items
   * 2. return length of the filtered array.
   */
  return booksArr.filter(
    ({ borrows: [firstCurrentBookStatusObj] }) =>
      !firstCurrentBookStatusObj.returned
  ).length;
}

/**
 * returns the 5 top common genres
 * @param {Object[]} booksArr array of objects representing books
 * @returns {Object[]} array of objects with two keys
 * 'name': genre name,
 * 'count': count of times this genre was found
 */
function mostCommonGenres(booksArr) {
  // 1. get a counter object of genre pointing to counts
  const genreCounterObj = createCounterObjectForGenresOf(booksArr);
  /**
   * 2. map the keys of genreCountsObj to array of objects with name and counts
   * as keys
   */
  const genreNameAndCountsArr = Object.keys(
    genreCounterObj
  ).map((genreStr) => ({ name: genreStr, count: genreCounterObj[genreStr] }));
  // 3. return top five items from the counter object;
  return topFiveObjsUsingCount(genreNameAndCountsArr);
}

/**
 * returns the top 5 most popular books
 * @param {Object[]} booksArr array of objects representing books
 * @returns {Object[]} array of objects with two keys
 * 'name': book' title,
 * 'count': count of times this book was checked out
 */
function mostPopularBooks(booksArr) {
  // 1. map books to objects of name = title of book and count = number of
  //    borrows
  const titleNameAndCountObj = booksArr.map((bookObj) => {
    const { title: nameStr, borrows: borrowsArr } = bookObj;
    return { name: nameStr, count: borrowsArr.length };
  }, {});
  // 2. return the top 5 items from that counter object
  return topFiveObjsUsingCount(titleNameAndCountObj);
}

/**
 * finds the top 5 most popular authors
 * @param {Object[]} booksArr array of objects representing books
 * @param {Object[]} authorsArr array of objects representing authors
 * @returns {object[]} returns an array of objects representing
 * 'name': author's name,
 * 'count': number of borrows for the author
 */
function mostPopularAuthors(booksArr, authorsArr) {
  // 1. get a counter object of author id pointing to count
  const authorIdCounterObj = createCounterObjForAuthorIdToCountOfCheckoutsOf(
    booksArr
  );
  /**
   * 2. map the keys of the counter object to an array of objects with name
   *    pointing to the author's first and last name and count pointing to the
   *    count
   */
  const authorNameAndCountsArr = mapIdsToAuthorNameAndCountObj(
    authorIdCounterObj,
    authorsArr
  );
  // 3. return top Five items from counter object
  return topFiveObjsUsingCount(authorNameAndCountsArr);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
