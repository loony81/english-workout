const Joi = require('joi')
const mongoose = require('mongoose')


const grammarSchema = new mongoose.Schema({
	proverb: {
		type: String, 
		required: true,
		minlength: 3,
		maxlength: 1000
	},
	sounds: [{
		name: {
			type: String,
			required: true,
			maxlength: 50
		},
		link: {
			type: String,
			required: true,
			maxlength: 250
		}
	}],
	description: {
		type: String,
		required: true,
		maxlength: 2000
	}
})

const Grammar = mongoose.model('Grammar', grammarSchema)

const validateGrammar = grammar => {
	const schema = {
		proverb: Joi.string().required().min(3).max(1000),
		sounds: Joi.array().items(Joi.object({
		    name: Joi.string().required(),
		    link: Joi.string().uri().required()
		})).required(),
		description: Joi.string().required().max(2000)
	}
	return Joi.validate(grammar, schema)
}

module.exports.grammarSchema = grammarSchema
module.exports.Grammar = Grammar
module.exports.validateGrammar = validateGrammar