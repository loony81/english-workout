const Joi = require('joi')
const mongoose = require('mongoose')


const translationSchema = new mongoose.Schema({
	proverb: {
		type: String, 
		required: true,
		minlength: 3,
		maxlength: 1000
	},
	russianSentence: {
		type: String,
		required: true,
		maxlength: 1000
	}
})

const Translation = mongoose.model('Translation', translationSchema)

const validateTranslation = translation => {
	const schema = {
		proverb: Joi.string().required().min(3).max(1000),
		russianSentence: Joi.string().required().max(1000)
	}
	return Joi.validate(translation, schema)
}

module.exports.translationSchema = translationSchema
module.exports.Translation = Translation
module.exports.validateTranslation = validateTranslation