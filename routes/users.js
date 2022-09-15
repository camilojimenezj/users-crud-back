const userRouter = require('express').Router()
const { getUsers, createUser, deleteUser, updateUser } = require('../services/users')

userRouter.get('/', async (req, res) => {
  const users = await getUsers()
  res.json(users)
})

userRouter.post('/', async (req, res) => {
  const { name, birth, nit } = req.body
  try {
    const response = await createUser(name, birth, nit)
    res.status(201).json(response)
    
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

userRouter.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { name, birth, nit } = req.body
  try {
    const response = await updateUser(id, name, birth, nit)
    res.json(response)

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

userRouter.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const response = await deleteUser(id)
    res.json(response)
    
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = userRouter