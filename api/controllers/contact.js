import { getBodyFields } from '../helpers/controller'
import { verifyRecaptcha } from '../services/recaptcha'
import { getTemplate } from '../helpers/templates'
import { sendEmail } from '../services/emails'
require('dotenv').config()

/**
 * Contact Us Route
 * @param {object} req @param {object} res @param {function} next
 */
export const contactUs = async (req, res, next) => {
  try {
    const fields = ['email', 'name', 'message']
    const [required, body] = getBodyFields(req.body, fields, fields)
    if (!required) throw body

    if (process.env.NODE_ENV !== 'development') {
      if (!req.body.token) throw new Error('reCAPTCHA Token Required')
      const [success, result] = await verifyRecaptcha(req.body.token)
      if (!success) throw result
    }

    const [loaded, template] = await getTemplate('emails', 'contact', body)
    if (!loaded) throw template

    const [sent, info] = await sendEmail(process.env.CONTACT_EMAIL, 'Contact Request from heffay.dev', template, { replyTo: body.email })
    if (!sent) throw info

    return res.status(200).json({ message: 'success' })
  } catch (err) {
    return next(err)
  }
}

/**
 * Tests a template
 * @param {object} req @param {object} res @param {function} next
 */
export const testTemplate = async (req, res, next) => {
  try {
    const [loaded, template] = await getTemplate('emails', 'contact', { email: 'test@test.com', name: 'John Doe', message: 'Test Message' })
    if (!loaded) throw template

    return res.status(200).send(template)
  } catch (err) {
    return next(err)
  }
}
