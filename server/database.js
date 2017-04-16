const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config()

// Initialize database connection
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.password,
  database: process.env.DATABASE
}); 

module.exports = connection;