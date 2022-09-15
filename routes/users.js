const userRouter = require('express').Router()
const { getUsers } = require('../controllers/users')

userRouter.get('/', async (req, res) => {
  const users = await getUsers()
  res.json(users)
})

module.exports = userRouter