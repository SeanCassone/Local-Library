/**
 * finds the author by id
 * @param {number} authorIdInt represents a singular author
 * @param {Object[]} authorArr Objects representing authors
 * @returns } A generic object representing the found author
 */
function findAuthorByID(authorIdInt, authorArr) {
  // return the author object where id is equal to authorId
  return authorArr.find((authorObj) => authorObj.id === authorIdInt);
}
module.exports = { findAuthorByID };
