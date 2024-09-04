

-- for database connection need to install pg -npm


-- create database
CREATE DATABASE usersDB;

-- go into 'usersdb' data base using '\c usersdb' command line. It will show the msg "u are conndected to database usersdb"

-- to see the any table of this database using command "\dt"


-- create table
CREATE TABLE users (
    id VARCHAR(20) PRIMARY KEY,
    description VARCHAR (255)
);