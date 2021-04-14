const { findAccountById } = require("./booksHelpers/findAccountById");
const { findAllBorrowedBooks } = require("./booksHelpers/findAllBorrowedBooks");
const { findAllReturnedBooks } = require("./booksHelpers/findAllReturnedBooks");

/**
 * will find author by given id
 * @param {Object[]} authorsArr array of objects representing authors
 * @param {number} authorIdInt unique id of the author to find
 * @returns {Object} found author object
 */
function findAuthorById(authorsArr, authorIdInt) {
  return authorsArr.find(({ id: idInt }) => idInt === authorIdInt);
}

/**
 * will find the book given it's ID
 * @param {Object[]} booksArr Array of objects representing books
 * @param {string} bookIdStr Unique Id of the book to find
 * @returns {Object} an object that represents the found book
 */
function findBookById(booksArr, bookIdStr) {
  return booksArr.find(({ id: idStr }) => idStr === bookIdStr);
}

/**
 *Will partition the books by whether it is currently borrowed
 * @param {Object[]} booksArr An array of objects representing books
 * @returns {[][]} an array of two arrays both containing objects that
 * represents books the first array is books presently borrowed, the second
 * array is books that have been returned
 */
function partitionBooksByBorrowedStatus(booksArr) {
  /**
   * return an array containing two sub arrays created by filtering books
   * the first array being borrowed books and the second being returned books
   */
  return [findAllBorrowedBooks(booksArr), findAllReturnedBooks(booksArr)];
}

/**
 * finds all the borrowers for a given book
 * @param {Object} bookObj represents a single book
 * @param {Object[]} accountsArr an array of objects representing an account
 * @returns {Object[]} array of objects representing accounts that have borrowed
 * the specific book
 */
function getBorrowersForBook(bookObj, accountsArr) {
  /**
   * reduce the book borrows array into an array of borrowers with a returned
   * property
   */
  return (
    bookObj.borrows
      .reduce((accumulatorArr, { id: idStr, returned: returnedBool }) => {
        /**
         * find the account obj, make a copy swo we don't mutate the original
         * account object
         */
        const accountWithReturned = {
          ...findAccountById(accountsArr, idStr),
          returned: returnedBool,
        };
        return accumulatorArr.concat(accountWithReturned);
      }, [])
      // return the first 10 elements of the array
      .slice(0, 10)
  );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
