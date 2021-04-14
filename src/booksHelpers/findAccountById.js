/**
 * finds the specified account
 * @param {Object[]} accountsArr array of objects representing an account
 * @param {string} accountIdStr string representing unique account id
 * @returns {Object} an object representing the found account
 */
function findAccountById(accountsArr, accountIdStr) {
  return accountsArr.find(({ id: idStr }) => idStr === accountIdStr);
}
module.exports = { findAccountById };
