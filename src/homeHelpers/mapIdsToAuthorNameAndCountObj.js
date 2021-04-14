/**
 * this will turn author id & count into a object with 'name' and 'count' keys
 * @param {Object} authorIdCounterObj object with author key pointing to it's
 * count
 * @param {Object[]} authorsArr arrya of objects representing authors
 * @returns {Object[]} an array of author count objects with
 * name: author's name
 * count: number of borrows for the author
 */
function mapIdsToAuthorNameAndCountObj(authorIdCounterObj, authorsArr) {
  return Object.keys(authorIdCounterObj).map((authorIdStr) => {
    // 1. find the respective author obj
    const authorObj = authorsArr.find(
      // keys are strings but authorId needs to be a number
      ({ id: idInt }) => idInt === parseInt(authorIdStr, 10)
    );
    /**
     * 2. create a new obj with name pointing to first and last of author and
     * count pointing to the count
     */

    const {
      name: { first: firstStr, last: lastStr },
    } = authorObj;
    return {
      name: `${firstStr} ${lastStr}`,
      count: authorIdCounterObj[authorIdStr],
    };
  });
}
module.exports = { mapIdsToAuthorNameAndCountObj };
