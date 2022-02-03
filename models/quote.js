const Joi = require('joi')
const mongoose = require('mongoose')


const quoteSchema = new mongoose.Schema({
	proverb: {
		type: String, 
		required: true,
		minlength: 3,
		maxlength: 2000
	},
	description: {
		type: String,
		required: true,
		maxlength: 2000
	}
})

const Quote = mongoose.model('Quote', quoteSchema)

const validateQuote = quote => {
	const schema = {
		proverb: Joi.string().required().min(3).max(2000),
		description: Joi.string().required().max(2000)
	}
	return Joi.validate(quote, schema)
}

module.exports.quoteSchema = quoteSchema
module.exports.Quote = Quote
module.exports.validateQuote = validateQuote