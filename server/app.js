const express = require('express')
const morgan = require('morgan')
const path = require('path')
const chalk = require('chalk')

const database = require('./database')

// Initialize the server
const app = express()

// Setup logging
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

// EXAMPLE ROUTE WITH DATABASE QUERY

// app.get('/example', (req, res) => {

//   process.stdout.write('Server received a request: ')
//   console.log(chalk.blue(`${req.method} ${req.url}`))

//   // Query the database for all tracks
//   database.query('SELECT * FROM ExampleTable', (error, results, fields) => {

//     // Upon failure...
//     if (error) {
//       process.stdout.write('Database query threw an error: ')
//       console.log(chalk.red(error.code))

//       res.sendStatus(500)
//     }

//     // Upon success...
//     const data = { example: results }
//     res.status(200).json(data)
//   })
// })

// ???

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
// });

module.exports = app