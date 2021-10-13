import axios from 'axios'

/**
* API Call
* @param {string} path @param {object} payload @param {object} params @param {string} method @param {object} axiosConfig
* @return {[boolean, object]}
*/
const apiCall = async (path, payload = {}, params = {}, method = 'get', axiosConfig = {}) => {
  try {
    let address = `/api${path}`

    // Looping over params to append to URL
    for (const [key, value] of Object.entries(params)) {
      address = address.replace(`:${key}`, value)
    }

    const result = await axios[method](address, payload, axiosConfig)

    return [true, result.data]
  } catch (err) {
    return [false, { message: err.response?.data?.message || 'Something went wrong' }]
  }
}

export default {
  /**
   * GET
   * @param {string} path @param {object} params @param {object} config
   * @returns {[boolean, object]}
   */
  async get (path, params = {}, config = {}) {
    return await apiCall(path, {}, params, 'get', config)
  },

  /**
   * POST
   * @param {string} path @param {*} params @param {*} config
   * @returns {[boolean, object]}
   */
  async post (path, payload, params = {}, config = {}) {
    return await apiCall(path, payload, params, 'post', config)
  },

  /**
   * PUT
   * @param {string} path @param {*} params @param {*} config
   * @returns {[boolean, object]}
   */
  async put (path, payload, params = {}, config = {}) {
    return await apiCall(path, payload, params, 'put', config)
  },

  /**
   * DELETE
   * @param {string} path @param {*} params @param {*} config
   * @returns {[boolean, object]}
   */
  async delete (path, params, config = {}) {
    return await apiCall(path, {}, params, 'delete', config)
  }
}
