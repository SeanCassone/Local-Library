const { checkedOutBooksBy } = require("./checkedOutBooksBy");

/**
 * finds the books checked out by the author
 * @param {Object[]} bookArr generic objects representing books
 * @param {string} accountIdStr represents the unique id of an account
 * @returns []} generic objects of currently checked out books
 */
function getArrOfBooksCheckedOutByAccountId(bookArr, accountIdStr) {
  return bookArr.filter((bookObj) =>
    /**
     * we can do a 'some' on the borrows to get the books checked out by
     * borrower
     */
    bookObj.borrows.some(checkedOutBooksBy(accountIdStr))
  );
}
module.exports = { getArrOfBooksCheckedOutByAccountId };
