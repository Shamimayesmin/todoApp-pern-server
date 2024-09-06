const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host : "localhost",
    port: 5432,
    database: "usersdb",
    password: "1234"
})

module.exports = pool