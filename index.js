require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/users')
const app = express()

// middlewares
app.use(express.json())

// Routes 
app.use('/api/users', userRouter)

// Start server
const PORT = process.env.PORT | 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})