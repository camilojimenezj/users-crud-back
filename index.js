require('dotenv').config()
const express = require('express')
const userRouter = require('./routes/users')
const cors = require('cors')
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// Routes 
app.use('/api/users', userRouter)

// Start server
const PORT = process.env.PORT | 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})