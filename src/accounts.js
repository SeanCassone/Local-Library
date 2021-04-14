const { findAuthorByID } = require("./accountsHelpers/findAuthorByID");
const {
  countBorrowsByAccountId,
} = require("./accountsHelpers/countBorrowsByAccountId");
const {
  getArrOfBooksCheckedOutByAccountId,
} = require("./accountsHelpers/getArrOfBooksCheckedOutByAccountId");

/**
 * finds the object with the id
 * @param {Object[]} accountArr an array of account objects represents a person
 * @param {string} idStr id of account to find
 * @returns an _object_ representing a person
 */
function findAccountById(accountArr, idStr) {
  // return all accounts that match the given id
  return accountArr.find((accountObj) => accountObj.id === idStr);
}

/**
 * it returns a sorted array of objects. The objects are sorted alphabetically
 *  by last name.
 * @param {Object[]} accountArr an array of accounts
 * @returns an _array_ of generic _objects_ representing accounts
 */
function sortAccountsByLastName(accountArr) {
  return accountArr.sort(
    ({ name: { last: lastName1Str } }, { name: { last: lastName2Str } }) =>
      lastName1Str > lastName2Str ? 1 : -1
  );
}

/**
 * finds number of times the account's ID has appeared in a book's borrow array
 * @param {Object} account an account object
 * @param {string} account.id the account's id
 * @param {Object[]} bookArr an array of book objects
 * @param {Object[]} bookArr[].borrows objects representing a borrow
 * @returns the _number_ of times the account's ID has appeared in bookArr
 * borrow array
 */
function numberOfBorrows({ id: accountIdStr }, bookArr) {
  // 1. count how many times individual books was borrowed and return the number
  // as the answer,
  return bookArr.reduce(
    (numberOfBorrowsInt, { borrows: borrowArr }) =>
      // 2. for each book, add number of borrows to count of borrows for that book
      //    and return it
      numberOfBorrowsInt + countBorrowsByAccountId(borrowArr, accountIdStr),
    0
  );
}

/**
 * combines books and authors
 * @param {Object} param0 an account
 * @param {Object[]} bookArr objects representing books
 * @param {Object[]} authorArr objects representing arrays
 * @returns An _array_ of book-like _objects_ that includes an author
 * object
 */
function booksInPossession({ id: accountIdStr }, bookArr, authorArr) {
  // filter the list of books for one presently checked out by accountId
  return (
    getArrOfBooksCheckedOutByAccountId(bookArr, accountIdStr)
      /**
       * 3.
       * map the filtered books to create a new object containing all the
       * properties of books and adding an author key pointing to author object
       * that we'll find using a helper function. note that since I am using an
       * arrow function to implicitly return an object, I needed to wrap that
       * object in parentheses
       */
      .map((bookObj) => ({
        ...bookObj,
        author: findAuthorByID(bookObj.authorId, authorArr),
      }))
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
