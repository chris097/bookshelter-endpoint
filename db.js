const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password: "chris@1995",
  host: "localhost",
  port: 5432,
  database: "bookshelter"
});

module.exports = pool;

