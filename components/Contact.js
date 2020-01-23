import { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const sendEmail = async () => {
    try {
      await axios.post('https://graphql.getoutofmyhouse.dev', {
        query: `query EmailSubmission { sendEmail(email: { name: "${data.name}", from: "${data.email}", subject: "Message from site", message: "${data.message}" }) { message } }`
      })

      setLoading(false)
      setSent(true)
    } catch (err) {
      setLoading(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    sendEmail()
  }

  return (
    <div className='row' id='contact'>
      <h1 className='title'>Contact</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={data.name}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={data.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='input-container'>
          <textarea placeholder='Message' name='message' value={data.message} onChange={handleChange} required />
        </div>
        <input type='submit' value={loading ? 'Sending...' : (sent ? 'Sent' : 'Submit')} disabled={loading} />
      </form>
    </div>
  )
}

export default Contact
