/**
 * RECURSIVE
 * Flattens a object's properties to a tree of depth 1
 * @param {object} object
 */
export function flattenObject(obj) {
  if(typeof obj !== 'object' || Array.isArray(obj)) {
    throw new Error('Param must be an object.')
  }
  return Object.keys(obj).reduce((acc, prop) => {
    if(typeof obj[prop] !== 'object') {
      acc[prop] = obj[prop]
      return acc
    }
    const flattened = flattenObject(obj[prop])
    Object.keys(flattened).forEach((flattened_prop) => {
      acc[prop + '.' + flattened_prop] = flattened[flattened_prop]
    })
    return acc
  }, {})
}


/**
 * Get object scaffold
 * @param {object} object
 */
export function getObjectScaffold(obj) {
  if(typeof obj !== 'object' || Array.isArray(obj)) {
    throw new Error('Param must be an object.')
  }
  return Object.keys(obj).reduce((acc, prop) => {
    if(typeof obj[prop] !== 'object' || Array.isArray(obj[prop])) {
      return [...acc, prop]
    }
    const inner_props = getObjectScaffold(obj[prop]).map((inner_prop) => (prop + '.' + inner_prop))
    return [...acc, ...inner_props]
  }, [])
}
