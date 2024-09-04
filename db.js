const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgress",
    host : "localhost",
    port: 5432,
    database: "usersDB",
    password: 1234
})

module.exports = pool