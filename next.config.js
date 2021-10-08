const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  eslint: {
    // Allows building with ESLinting errors
    ignoreDuringBuilds: true
  }
}
