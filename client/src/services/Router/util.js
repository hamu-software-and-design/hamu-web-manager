/**
 * Parses query into a hash table
 * @param {string} queryString
 * @return {object} Query hash table
 */
export function parseQuery(queryString) {
  if(typeof queryString !== 'string') {
    throw new Error('Param must be a string.')
  }
  const queries = queryString.substring(1).split('&')
  return queries.reduce(function(acc, query) {
    const pairs = query.split('=')
    acc[pairs[0]] = pairs[1]
    return acc
  }, {})
}
