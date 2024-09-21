// const Pool = require('pg').Pool;

// const pool = new Pool({
//     user: "postgres",
//     host : "localhost",
//     port: 5432,
//     database: "usersdb",
//     password: "1234"
// })

// const { Pool } = require('pg');

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL, // PostgreSQL connection string from Railway
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   });


// module.exports = pool



const { Pool } = require('pg');
require('dotenv').config();  // Load .env variables

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : undefined,
  user: isProduction ? undefined : process.env.PG_USER || 'postgres',
  host: isProduction ? undefined : process.env.PG_HOST || 'localhost',
  database: isProduction ? undefined : process.env.PG_DATABASE || 'usersdb',
  password: isProduction ? undefined : process.env.PG_PASSWORD || '1234',
  port: isProduction ? undefined : process.env.PG_PORT || 5432,
  ssl: isProduction
    ? { rejectUnauthorized: false }  // Enable SSL for Railway
    : false,  // No SSL needed for local development
});

module.exports = pool;
