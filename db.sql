

-- for database connection need to install pg -npm


-- create database
CREATE DATABASE usersDB;

-- go into 'usersdb' data base using '\c usersdb' command line. It will show the msg "u are conndected to database usersdb"

-- to see the any table of this database using command "\dt"


-- create table
CREATE TABLE users (
    id VARCHAR(40) PRIMARY KEY,
    description VARCHAR (255)
);

-- insert data in table 
INSERT INTO users (id, description)
VALUES (104, beautiful sunny day);

-- quary commands for insert data
"INSERT INTO users (id, description) VALUES($1, $2) RETURNING *"

-- return all data 
'SELECT * FROM users'

-- return specific data by id
'SELECT * FROM users WHERE id=$1'

-- delete a specific data by id

'DELETE FROM users WHERE id=$1'

-- update a todo by id
'UPDATE users SET description=$1 WHERE id=$2 RETURNING *


-- 