const { pool } = require('../connection')

const getUsers = async (req, res) => {
  const response = await pool.query('SELECT * FROM users')
  return response.rows
}

module.exports = {
  getUsers
}