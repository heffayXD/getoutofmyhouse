/**
 * Error handler
 * @param {Error} err @param {object} req @param {object} res @param {object} next
 */
export const errorHandler = (error, req, res, next) => {
  switch (error.message) {
    case 'reCAPTCHA Token Required':
      return res.status(401).json({ message: error.message })
    default: {
      console.log(error.message)
      return res.status(500).json({ message: 'Something went wrong' })
    }
  }
}
