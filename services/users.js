const { pool } = require('../connection')

const getUsers = async () => {
  const response = await pool.query('SELECT * FROM users')
  return response.rows
}

const createUser = async (name, birth, document) => {
  const response = await pool.query('INSERT INTO users(name, birth, document) VALUES($1, $2, $3) RETURNING *', [name, birth, document])

  if(response.rowCount === 0) throw new Error(`CREATE user failed`)
  return response.rows[0]
}

const updateUser = async (id, name, birth, document) => {
  const response = await pool.query('UPDATE users SET name = $2, birth = $3, document = $4 WHERE id = $1 RETURNING *', [id, name, birth, document])

  if(response.rowCount === 0) throw new Error(`UPDATE user ${id} failed`)
  return response.rows[0]
}

const deleteUser = async (id) => {
  const response = await pool.query('DELETE FROM users WHERE id = $1', [id])

  if(response.rowCount === 0) throw new Error(`DELETE user ${id} failed`)
  return `User ${id} deleted successfully`
}

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser
}