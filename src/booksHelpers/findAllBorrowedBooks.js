const { isBookReturned } = require("./isBookReturned");

/**
 * finds all books that are checked out
 * @param {Object[]} booksArr array of objects that represents a book
 * @returns {Object[]} an array of books that are presently borrowed
 */
function findAllBorrowedBooks(booksArr) {
  return booksArr.filter((bookObj) => !isBookReturned(bookObj));
}
module.exports = { findAllBorrowedBooks };
