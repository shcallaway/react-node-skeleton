'use strict';

const app = require('./app');
const database = require('./database');

// Declare default port
const PORT = process.env.PORT || 9000;

// Connect to the database
database.connect(error => {

  // Upon failure...
  if (error) {
    console.log('Could not connect to the database.')
    console.error(error)
    return
  }

  // Upon success...
  console.log('Established database connection.');

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
  });
})