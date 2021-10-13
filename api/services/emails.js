import nodeMailer from 'nodemailer'
import { google } from 'googleapis'
require('dotenv')

const { OAuth2 } = google.auth

const getAccessToken = (client) => {
  return new Promise((resolve, reject) => {
    client.getAccessToken((err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}

/**
 * Creates the email transport
 * @returns {[boolean, mixed]}
 */
const createTransport = async () => {
  try {
    const client = new OAuth2(
      process.env.EMAIL_OAUTH_CLIENT,
      process.env.EMAIL_OAUTH_SECRET,
      'https://developers.google.com/oauthplayground'
    )

    client.setCredentials({ refresh_token: process.env.EMAIL_REFRESH })

    const accessToken = await getAccessToken(client)

    const transport = nodeMailer.createTransport({
      service: 'gmail',
      // host: process.env.EMAIL_HOST,
      // port: parseInt(process.env.EMAIL_PORT),
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.EMAIL_OAUTH_CLIENT,
        clientSecret: process.env.EMAIL_OAUTH_SECRET,
        refreshToken: process.env.EMAIL_REFRESH,
        accessToken,
        expires: 1
      }
    })

    return [true, transport]
  } catch (err) {
    return [false, err]
  }
}

/**
 * Sends an email as a Promise
 * @param {object} options
 * @returns {Promise}
 */
const sendEmailPromise = (transport, options) => {
  return new Promise(resolve => {
    transport.sendMail(options, (err, info) => {
      if (err) resolve([false, err])
      resolve([true, info])
    })
  })
}

/**
 * Sends an email
 * @param {string} to @param {string} subject @param {string} html @param {object} props
 * @returns {[boolean, mixed]}
 */
export const sendEmail = async (to, subject, html, props = {}) => {
  try {
    const [created, transport] = await createTransport()
    if (!created) throw transport

    const params = { from: process.env.EMAIL_USER, to, subject, html, ...props }
    const [sent, result] = await sendEmailPromise(transport, params)
    if (!sent) throw result

    return [true, result]
  } catch (err) {
    return [false, err]
  }
}
