import { Router } from 'express'

import users from './users'

const router = Router()

// Add USERS Routes
router.get('/', function (req, res, next) {
  res.json({ result: 'Main Api Page' })
})

router.use(users)

export default router
