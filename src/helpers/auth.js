/**
 * Retrieves reCAPTCHA token
 * @returns {string}
 */
export const getRecaptchaToken = () => {
  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => { // eslint-disable-line
      grecaptcha.execute(process.env.RECAPTCHA_SITE_KEY, { action: 'submit' }) // eslint-disable-line
        .then(token => resolve(token))
        .catch(err => reject(err))
    })
  })
}
