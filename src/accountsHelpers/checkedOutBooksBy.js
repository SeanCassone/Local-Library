/**
 * higher order function meant to be used with Array.prototype.some
 * @param {string} accountIdStr
 * @returns function that'll return true if the book is checked out by
 * the account.
 */
function checkedOutBooksBy(accountIdStr) {
  return ({ id: borrowIdStr, returned: returnedBool }) =>
    // return true if account id matches and its not returned.
    borrowIdStr === accountIdStr && !returnedBool;
}
module.exports = { checkedOutBooksBy };
