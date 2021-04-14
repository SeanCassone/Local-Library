/**
 * checks to see if a given book is returned or not
 * @param {Object} book object that represents a book
 * @param {Object[]} book.borrows an array of objects that represents a single
 * borrow with the first index being the most recent borrow
 * @returns {boolean} true if the book has been returned, false otherwise
 */
function isBookReturned({ borrows: borrowsArr }) {
  return borrowsArr[0].returned;
}
module.exports = { isBookReturned };
