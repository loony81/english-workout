const Joi = require('joi')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const config = require('config')
const {statisticsSchema} = require('./statistics')


const userSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: true,
		minlength: 3,
		maxlength: 50
	},
	email: {
		type: String,
    	required: true,
    	maxlength: 255,
    	unique: true // to ensure there are no two users with the same email
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		maxlength: 1024 // for hashed password
	},
	dateJoined: {
		type: Date, 
		default: Date.now, 
		required: true
	},
	isAdmin: {
		type: Boolean,
        default: false
	},
	//statistics will be embedded inside user schema
	statistics: {
		type: statisticsSchema,
		required: true,
		default: {
			grammarSentences: [],
			proverbs: [],
			translations: []
		}
	}
})

userSchema.methods.generateAuthToken = function(){
	return jwt.sign(
		{_id: this._id, isAdmin: this.isAdmin}, 
		config.get('jwtkey'),
		{expiresIn: '7d'}
	)
}

userSchema.methods.updateStatistics = function(itemId, topic){
	let item = this.statistics[topic].id(itemId)
    let result = {}
    if(item){
      // we need to return the old statistics before updating it
      result._id = item._id
      result.timesEncountered = item.timesEncountered
      result.prioritized = item.prioritized, 
      result.lastEncounteredOn = item.lastEncounteredOn
      // now update the statistics
      item.timesEncountered++
      item.lastEncounteredOn = Date.now() 
    } else {
      item = {
        _id: itemId,
        timesEncountered: 0
      }
      // we don't need the prioritized property when an item is encountered for the first time
      result = {...item}
      item.timesEncountered++
      this.statistics[topic].push(item)
    }
    return result
}

const User = mongoose.model('User', userSchema)

const validateUser = user => {
	const schema = {
		name: Joi.string().required().min(3).max(50),
		email: Joi.string().required().max(255).email({ minDomainAtoms: 2 }),
		password: Joi.string().required().min(6).max(255),
		dateJoined: Joi.date(),
		isAdmin: Joi.boolean(),
		statistics: Joi.object({
			grammarSentences: Joi.array().items(Joi.object()),
			proverbs: Joi.array().items(Joi.object()),
			translations: Joi.array().items(Joi.object())
		})
	}
	return Joi.validate(user, schema)
}

module.exports.User = User
module.exports.validate = validateUser