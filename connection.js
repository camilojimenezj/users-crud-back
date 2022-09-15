const { Pool } = require("pg");
const pool = new Pool({
  localhost: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
pool.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = { pool };