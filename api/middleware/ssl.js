require('dotenv').config()

/**
 * Middleware for requiring SSL
 * @param {object} req @param {object} res @param {function} next
 * @returns {void}
 */
export const requireSSL = (req, res, next) => {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
    return res.redirect(`https://${req.get('host')}${req.url}`)
  }

  next()
}
