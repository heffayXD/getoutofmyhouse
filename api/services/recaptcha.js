import axios from 'axios'
require('dotenv').config()

/**
 * Verifies reCAPTCHA token
 * @param {string} token
 * @returns {[boolean, mixed]}
 */
export const verifyRecaptcha = async token => {
  try {
    const params = { secret: process.env.RECAPTCHA_SECRET_KEY, response: token }
    const result = await axios.post('https://www.google.com/recaptcha/api/siteverify', undefined, { params })
    if (!result?.data?.success) throw new Error('reCAPTCHA Failed')

    return [true, result.data]
  } catch (err) {
    return [false, err]
  }
}
