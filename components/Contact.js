import { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(data)
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
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default Contact
