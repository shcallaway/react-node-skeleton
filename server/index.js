'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');

// Initialize the server
const app = express();

// Setup logging
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Declare server-side routes
app.get('*', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// Initialize database connection
const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
}); 

// Connect to the database
connection.connect(error => {

  // Upon failure...
  if (error) {
    console.log('Could not connect to the database.')
    console.error(error)
    return
  }

  console.log('Established database connection.');

  // Start the server
  const PORT = process.env.PORT || 9000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
  });
})