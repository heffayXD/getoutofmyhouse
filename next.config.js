const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')
const withCss = require('@zeit/next-css')

module.exports = withPlugins([
  [optimizedImages],
  [withSass],
  [withCss]
])
