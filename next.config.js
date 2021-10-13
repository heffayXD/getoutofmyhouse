const path = require('path')
require('dotenv').config()

console.log(process.env.RECAPTCHA_SITE_KEY)

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY
  },
  eslint: {
    // Allows building with ESLinting errors
    ignoreDuringBuilds: true
  }
}
