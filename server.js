const express = require('express')
const app = express()
const winston = require('winston') // for logging
const helmet = require('helmet') // for security
const config = require('config')
const Joi = require('joi') //a package for data validation in Node/MongoDB applications
Joi.objectId = require('joi-objectid')(Joi) // adds id validation to Joi
require('./logging')() // handling and logging errors
const PORT = process.env.PORT || config.get('port')

//middleware
app.use(helmet())
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "https://ka-f.fontawesome.com"],
      scriptSrc: ["'self'", "https://kit.fontawesome.com/72a7ac7789.js"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://ka-f.fontawesome.com"],
      // adding an asterisk allows to load media from any resource, so we don't need to use proxy route anymore
      mediaSrc: ["*", "blob:"] // we need to add blob: to allow loading audio files from indexedDB
    }
  })
)
app.use(express.static(__dirname + '/dist'))
app.use(express.json()) // this middleware parses the body of the request and if there is a json object it will populate the req.body property


//routes
app.get('/', (req, res) => {
  res.sendFile('index.html')
})
app.use(require('./routes/routes'))
app.get('*', (req, res) => {
 	res.redirect('/')
})

//error handling middleware must be registered after all the other middlewares and routes
app.use(require('./middleware/error'))

app.listen(PORT, () => winston.info(`Listening on port ${PORT} ...`))