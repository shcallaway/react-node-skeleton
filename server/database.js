const mysql = require('mysql');

// Initialize database connection
const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
}); 

module.exports = connection;