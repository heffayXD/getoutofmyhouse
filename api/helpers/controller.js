/**
 * Sorts out fields that we need to process and checks requirements
 * @param {object} body @param {string[]} fields @param {string[]} required
 * @return {[boolean, object]}
 */
export const getBodyFields = (body, fields, required = []) => {
  const result = {}

  const getError = (val) => {
    const error = new Error(`Field '${val}' is required`)
    error.name = 'MissingField'
    return [false, error]
  }

  for (let i = 0; i < fields.length; i++) {
    const val = fields[i]
    const type = typeof body[val]
    const isRequired = required.includes(val)
    const isNumberOrBool = type === 'number' || type === 'bigint' || type === 'boolean'

    if (type !== 'undefined') {
      // Anything not a number that is required should be truth
      if (isRequired && !isNumberOrBool && body[val] !== null && !body[val]) return getError(val)

      result[val] = body[val]
    } else {
      if (isRequired) return getError(val)
    }
  }

  return [true, result]
}
