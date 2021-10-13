import { useState } from 'react'
import classes from './styles.module.scss'

import api from 'helpers/api'
import { getRecaptchaToken } from 'helpers/auth'

const Contact = () => {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (loading || sent) return
      setLoading(true)
      setError('')

      const token = await getRecaptchaToken()
      const [success, result] = await api.post('/contact', { ...fields, token })
      if (!success) throw result

      setSent(true)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div id='contact' className={classes.contact}>
      <h1 className={classes.title}>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputContainer}>
          <input
            required
            type='text'
            name='name'
            aria-label='Name'
            placeholder='Name'
            value={fields.name}
            onChange={handleChange}
          />
          <input
            required
            type='text'
            name='email'
            aria-label='Email'
            placeholder='Email'
            value={fields.email}
            onChange={handleChange}
          />
        </div>
        <div className={classes.inputContainer}>
          <textarea
            required
            name='message'
            aria-label='Message'
            placeholder='Message'
            value={fields.message}
            onChange={handleChange}
          />
        </div>
        <input type='submit' value={loading ? 'Sending...' : (sent ? 'Sent' : 'Submit')} disabled={loading || sent} />
        <p className={classes.recaptcha}>This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy' target='_blank' rel='noreferrer nofollow'>Privacy Policy</a> and <a href='https://policies.google.com/terms' target='_blank' rel='noreferrer nofollow'>Terms of Service</a> apply.</p>
        {
          sent
            ? <p className={classes.message}>Message has been sent.</p>
            : <p className={classes.error}>{error}</p>
        }
      </form>
    </div>
  )
}

export default Contact
