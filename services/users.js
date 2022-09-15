const { pool } = require('../connection')

const getUsers = async () => {
  const response = await pool.query('SELECT * FROM users')
  return response.rows
}

const createUser = async (name, birth, nit) => {
  const response = await pool.query('INSERT INTO users(name, birth, nit) VALUES($1, $2, $3) RETURNING *', [name, birth, nit])

  if(response.rowCount === 0) throw new Error(`CREATE user failed`)
  return response.rows
}

const updateUser = async (id, name, birth, nit) => {
  const response = await pool.query('UPDATE users SET name = $2, birth = $3, nit = $4 WHERE id = $1', [id, name, birth, nit])

  if(response.rowCount === 0) throw new Error(`UPDATE user ${id} failed`)
  return { id, name, birth, nit }
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