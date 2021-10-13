import express from 'express'
import { contactUs } from '../controllers/contact'

const router = express.Router()

router.route('/').post(contactUs)

// router.route('/test').get(testTemplate)

export default router
