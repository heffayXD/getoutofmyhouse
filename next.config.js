const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const optimizedImages = require('next-optimized-images')
const withCss = require('@zeit/next-css')

// function removeMinimizeOptionFromCssLoaders (config) {
//   console.warn('HACK: Removing `minimize` option from `css-loader` entries in Webpack config')
//   config.module.rules.forEach(rule => {
//     if (Array.isArray(rule.use)) {
//       rule.use.forEach(u => {
//         if (u.loader === 'css-loader' && u.options) {
//           delete u.options.minimize
//         }
//       })
//     }
//   })
// }

module.exports = withPlugins([
  [optimizedImages],
  [withSass],
  [withCss]
])
