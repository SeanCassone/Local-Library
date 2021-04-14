/**
 * returns how many time an account has borrowed a book
 * @param {object[]} borrowArr
 * @param {string} accountIdStr
 */
function countBorrowsByAccountId(borrowArr, accountIdStr) {
  /**
   * count each book's borrow by account id, there may be more than 1 borrow
   * by a given accountId
   */
  return borrowArr.filter((borrowObj) => borrowObj.id === accountIdStr).length;
}
module.exports = { countBorrowsByAccountId };
