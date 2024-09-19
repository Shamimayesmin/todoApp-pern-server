// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     host : "localhost",
//     port: 5432,
//     database: "usersdb",
//     password: "1234"
// })

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Your connection string from Railway
  ssl: {
    rejectUnauthorized: false
  }
});


module.exports = pool