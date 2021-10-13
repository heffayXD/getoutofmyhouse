import ejs from 'ejs'
import path from 'path'

/**
 * Retrieves a template
 * @param {string} dir @param {string} fileName @param {object} props
 * @return {Promise}
 */
export const getTemplate = (dir, fileName, props = {}) => {
  return new Promise(resolve => {
    const location = path.resolve(__dirname, '..', '..', 'api', 'templates', dir, `${fileName}.ejs`)
    ejs.renderFile(location, props, (err, data) => {
      if (err) {
        resolve([false, err])
      } else {
        resolve([true, data])
      }
    })
  })
}
