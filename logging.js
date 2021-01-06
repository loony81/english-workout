const winston = require('winston') // package for logging exceptions
require('express-async-errors') // to monkey patch async route handlers with error middleware

module.exports = () => {
	// use winston to handle uncaught exceptions and rejections
	winston.exceptions.handle(
		new winston.transports.Console({ colorize: true, prettyPrint: true }),
		new winston.transports.File({ filename: 'uncaughtExceptions.log' }),
	)
	process.on('unhandledRejection', e => {
		throw e
	})

	// logging messages will be saved to this file
	winston.add(new winston.transports.File({ filename: 'logfile.log' })) 
}