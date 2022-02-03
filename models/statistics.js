const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi) // adds id validation to Joi
const mongoose = require('mongoose')
const {Grammar} = require('./grammar')
const {Proverb} = require('./proverb')
const {Translation} = require('./translation')
const {Quote} = require('./quote')

const statisticsSchema = new mongoose.Schema({

    grammarSentences: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Grammar"
            },
            timesEncountered: {
                type: Number,
                required: true,
                default: 0
            },
            prioritized: {
                type: Boolean,
                default: false
            },
            lastEncounteredOn: {
                type: Date,
                default: Date.now
            }
        }
    ],
    proverbs: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Proverb"
            },
            timesEncountered: {
                type: Number,
                required: true,
                default: 0
            },
            prioritized: {
                type: Boolean,
                default: false
            },
            lastEncounteredOn: {
                type: Date,
                default: Date.now
            }
        }
    ],
    translations: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Translation"
            },
            timesEncountered: {
                type: Number,
                required: true,
                default: 0
            },
            prioritized: {
                type: Boolean,
                default: false
            },
            lastEncounteredOn: {
                type: Date,
                default: Date.now
            }
        }
    ],
    quotes: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Quote"
            },
            timesEncountered: {
                type: Number,
                required: true,
                default: 0
            },
            prioritized: {
                type: Boolean,
                default: false
            },
            lastEncounteredOn: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

const Statistics = mongoose.model('Statistics', statisticsSchema)

const validateItem = item => {
    const schema = {
        // grammarSentences: Joi.array().items(Joi.object({
        //     _id: Joi.objectId().required(),
        //     timesEncountered: Joi.number().required().min(0),
        //     prioritized: Joi.boolean().required(),
        //     lastEncounteredOn: Joi.date()
        // })),
        // proverbs: Joi.array().items(Joi.object({
        //     _id: Joi.objectId().required(),
        //     timesEncountered: Joi.number().required().min(0),
        //     prioritized: Joi.boolean().required(),
        //     lastEncounteredOn: Joi.date()
        // })),
        // translations: Joi.array().items(Joi.object({
        //     _id: Joi.objectId().required(),
        //     timesEncountered: Joi.number().required().min(0),
        //     prioritized: Joi.boolean().required(),
        //     lastEncounteredOn: Joi.date()
        // }))
        _id: Joi.objectId().required(),
        timesEncountered: Joi.number().required().min(0),
        prioritized: Joi.boolean(),
        lastEncounteredOn: Joi.date()
    }
    return Joi.validate(item, schema)
}

module.exports.statisticsSchema = statisticsSchema
module.exports.Statistics = Statistics
module.exports.validateItem = validateItem