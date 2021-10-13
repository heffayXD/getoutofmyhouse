import express from 'express'
import next from 'next'
import cors from 'cors'

import apiRoutes from './routes'
import { requireSSL } from './middleware/ssl'
import { errorHandler } from './services/errors'
require('dotenv').config()

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

app.prepare()
  .then(() => {
    const server = express()

    server.use(cors())
    server.use(requireSSL)
    server.use(express.json())

    server.use('/api', apiRoutes)
    server.get('*', (req, res) => handle(req, res))

    server.use(errorHandler)

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> portfolio server started on http://localhost:${port}`)
    })
  }).catch((err) => {
    console.error(err.stack)
    process.exit(1)
  })
