const express = require('express')
const router = express.Router()
const {User} = require('../models/user')
const {Grammar} = require('../models/grammar')
const {Proverb} = require('../models/proverb')
const {Translation} = require('../models/translation')
const {Quote} = require('../models/quote')
const auth = require('../middleware/auth')


function constructResponse(item, itemStatistics) {
  // select one audio file if there is
  let audio
  if(item.sounds){
    audio = item.sounds[Math.floor(Math.random() * item.sounds.length)]
  }
  const result = {
    id: item._id,
    sentence: item.proverb, 
    description: item.description,
    itemStatistics,
  }
  if(audio) result.audio = audio
  return result
}


// these routes select and return all items from a given collection where 
// the 'prioritized' property is set to true
 
router.get('/all/grammar', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-_id statistics.grammarSentences')
  const grammarPrlist = user.statistics.grammarSentences.filter(item => item.prioritized)
  if(grammarPrlist.length === 0) return res.send({message: 'There are no items on your priority list for Grammar'})
  res.json(grammarPrlist)
})


router.get('/all/proverbs', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-_id statistics.proverbs')
  const proverbsPrlist = user.statistics.proverbs.filter(item => item.prioritized)
  if(proverbsPrlist.length === 0) return res.send({message: 'There are no items on your priority list for Proverbs'})
  res.json(proverbsPrlist)
})

router.get('/all/translation', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-_id statistics.translations')
  const translationsPrlist = user.statistics.translations.filter(item => item.prioritized)
  if(translationsPrlist.length === 0) return res.send({message: 'There are no items on your priority list for Translation'})
  res.json(translationsPrlist)
})

router.get('/all/quotes', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-_id statistics.quotes')
  const quotesPrlist = user.statistics.quotes.filter(item => item.prioritized)
  if(quotesPrlist.length === 0) return res.send({message: 'There are no items on your priority list for Quotes'})
  res.json(translationsPrlist)
})

// these routes add or remove an item from the prioritized list for a given collection 
// (i.e toggle its 'prioritized' flag)

router.put('/grammar/:id/:action', auth, async (req, res) => {
  const user  = await User.findById(req.user._id)
  const item = user.statistics.grammarSentences.id(req.params.id)
  if (!item) return res.status(404).send({message: 'The item with the given ID was not found.'})
  if(req.params.action === 'add') item.prioritized = true
  if(req.params.action === 'remove') item.prioritized = false
  await user.save()
  res.status(201).json(item)
})

router.put('/proverbs/:id/:action', auth, async (req, res) => {
  const user  = await User.findById(req.user._id)
  const item = user.statistics.proverbs.id(req.params.id)
  if (!item) return res.status(404).send({message: 'The item with the given ID was not found.'})
  if(req.params.action === 'add') item.prioritized = true
  if(req.params.action === 'remove') item.prioritized = false
  await user.save()
  res.status(201).json(item)
})

router.put('/translation/:id/:action', auth, async (req, res) => {
  const user  = await User.findById(req.user._id)
  const item = user.statistics.translations.id(req.params.id)
  if (!item) return res.status(404).send({message: 'The item with the given ID was not found.'})
  if(req.params.action === 'add') item.prioritized = true
  if(req.params.action === 'remove') item.prioritized = false
  await user.save()
  res.status(201).json(item)
})

router.put('/quotes/:id/:action', auth, async (req, res) => {
  const user  = await User.findById(req.user._id)
  const item = user.statistics.quotes.id(req.params.id)
  if (!item) return res.status(404).send({message: 'The item with the given ID was not found.'})
  if(req.params.action === 'add') item.prioritized = true
  if(req.params.action === 'remove') item.prioritized = false
  await user.save()
  res.status(201).json(item)
})

// the following routes fetch one random item from a priority list
router.get('/grammar', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('statistics.grammarSentences')
  const grammarPrlist = user.statistics.grammarSentences.filter(item => item.prioritized)
  if(grammarPrlist.length === 0) return res.status(404).send({message: 'There are no items on your priority list for Grammar'})
  // get the id of a random item
  const rand = Math.floor(Math.random() * grammarPrlist.length)
  const statistics = grammarPrlist[rand]
  const itemId = grammarPrlist[rand]._id
  // get this item from the grammars collection
  const item = await Grammar.findById(itemId)
  // get the old statistics and then update it
  // const oldStatistics = user.updateStatistics(itemId, 'grammarSentences')
  // await user.save()
  // populate the response object with data
  const constructedResponse = constructResponse(item, statistics)
  res.json(constructedResponse)
})

router.get('/proverbs', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('statistics.proverbs')
  const proverbsPrlist = user.statistics.proverbs.filter(item => item.prioritized)
  if(proverbsPrlist.length === 0) return res.status(404).send({message: 'There are no items on your priority list for Proverbs'})
  // get the id of a random item
  const rand = Math.floor(Math.random() * proverbsPrlist.length)
  const statistics = proverbsPrlist[rand]
  const itemId = proverbsPrlist[rand]._id
  // get this item from the proverbs collection
  const item = await Proverb.findById(itemId)
  // get the old statistics and then update it
  // const oldStatistics = user.updateStatistics(itemId, 'proverbs')
  // await user.save()
  // populate the response object with data
  const constructedResponse = constructResponse(item, statistics)
  res.json(constructedResponse)
})

router.get('/translation', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('statistics.translations')
  const translationsPrlist = user.statistics.translations.filter(item => item.prioritized)
  if(translationsPrlist.length === 0) return res.status(404).send({message: 'There are no items on your priority list for Translation'})
  // get the id of a random item
  const rand = Math.floor(Math.random() * translationsPrlist.length)
  const statistics = translationsPrlist[rand]
  const itemId = statistics._id
  // get this item from the translation collection
  const item = await Translation.findById(itemId)
  // get the old statistics and then update it
  //const oldStatistics = user.updateStatistics(itemId, 'translations')
  //await user.save()
  // populate the response object with data
  const constructedResponse = constructResponse(item, statistics)
  res.json(constructedResponse)
})

router.get('/quotes', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('statistics.quotes')
  const quotesPrlist = user.statistics.quotes.filter(item => item.prioritized)
  if(quotesPrlist.length === 0) return res.status(404).send({message: 'There are no items on your priority list for Quotes'})
  // get the id of a random item
  const rand = Math.floor(Math.random() * quotesPrlist.length)
  const statistics = quotesPrlist[rand]
  const itemId = statistics._id
  // get this item from the translation collection
  const item = await Quote.findById(itemId)
  // get the old statistics and then update it
  //const oldStatistics = user.updateStatistics(itemId, 'translations')
  //await user.save()
  // populate the response object with data
  const constructedResponse = constructResponse(item, statistics)
  res.json(constructedResponse)
})

module.exports = router