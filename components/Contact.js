import { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const sendEmail = async () => {
    try {
      const result = await axios.post('https://graphql.heffay.dev', {
        query: `query EmailSubmission { sendEmail(email: { name: "${data.name}", from: "${data.email}", subject: "Message from site", message: "${data.message}" }) { message } }`
      })

      const message = result.data.data.sendEmail.message

      if (message === 'error') {
        setError(true)
      } else {
        setSent(true)
      }

      setLoading(false)
    } catch (err) {
      setLoading(false)
      setError(true)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!sent) {
      setError(false)
      setLoading(true)
      sendEmail()
    }
  }

  return (
    <div className='row' id='contact'>
      <h1 className='title'>Contact</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <input
            type='text'
            name='name'
            id='name-input'
            placeholder='Name'
            aria-label='Name'
            value={data.name}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='email'
            id='email-input'
            placeholder='Email'
            aria-label='Email'
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-container'>
          <textarea
            placeholder='Message'
            name='message'
            id='message-input'
            aria-label='Message'
            value={data.message}
            onChange={handleChange}
            required
          />
        </div>
        <input type='submit' value={loading ? 'Sending...' : (sent ? 'Sent' : 'Submit')} disabled={loading} />
        <p className={`error ${error ? '' : 'hide'}`}>Message has been sent.</p>
      </form>
    </div>
  )
}

export default Contact
