const { isBookReturned } = require("./isBookReturned");

/**
 * find all books that have been returned
 * @param {Object[]} booksArr array of objects that represents a book
 * @returns {Object[]} an array of objects representing books that have been
 * returned
 */
function findAllReturnedBooks(booksArr) {
  return booksArr.filter((bookObj) => isBookReturned(bookObj));
}
module.exports = { findAllReturnedBooks };
