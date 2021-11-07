const Joi = require('joi')
const mongoose = require('mongoose')


const proverbSchema = new mongoose.Schema({
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
	}]
})

const Proverb = mongoose.model('Proverb', proverbSchema)

const validateProverb = proverb => {
	const schema = {
		proverb: Joi.string().required().min(3).max(1000),
		sounds: Joi.array().items(Joi.object({
		    name: Joi.string().required(),
		    link: Joi.string().uri().required()
		})).required()
	}
	return Joi.validate(proverb, schema)
}

module.exports.proverbSchema = proverbSchema
module.exports.Proverb = Proverb
module.exports.validateProverb = validateProverb