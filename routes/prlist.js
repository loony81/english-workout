const express = require('express')
const router = express.Router()
const {User} = require('../models/user')
const {Grammar} = require('../models/grammar')
const {Proverb} = require('../models/proverb')
const {Translation} = require('../models/translation')
const auth = require('../middleware/auth')



// these routes select and return all items from a given collection where 
// the 'prioritized' property is set to true
 
router.get('/grammar', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-_id statistics.grammarSentences')
  const grammarPrlist = user.statistics.grammarSentences.filter(item => item.prioritized)
  if(grammarPrlist.length === 0) return res.send('There are no items on your priority list for Grammar')
  res.json(grammarPrlist)
})


router.get('/proverb', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-_id statistics.proverbs')
  const proverbsPrlist = user.statistics.proverbs.filter(item => item.prioritized)
  if(proverbsPrlist.length === 0) return res.send('There are no items on your priority list for Proverbs')
  res.json(proverbsPrlist)
})

router.get('/translate', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-_id statistics.translations')
  const translationsPrlist = user.statistics.translations.filter(item => item.prioritized)
  if(translationsPrlist.length === 0) return res.send('There are no items on your priority list for Translation')
  res.json(translationsPrlist)
})

// these routes add or remove an item from the prioritized list for a given collection 
//(i.e toggle its 'prioritized' flag)

router.put('/grammar/:id/:action', auth, async (req, res) => {
  const user  = await User.findById(req.user._id)
  const item = user.statistics.grammarSentences.id(req.params.id)
  if (!item) return res.status(404).send('The item with the given ID was not found.')
  if(req.params.action === 'add') item.prioritized = true
  if(req.params.action === 'remove') item.prioritized = false
  await user.save()
  res.status(201).json(item)
})

router.put('/proverb/:id/:action', auth, async (req, res) => {
  const user  = await User.findById(req.user._id)
  const item = user.statistics.proverbs.id(req.params.id)
  if (!item) return res.status(404).send('The item with the given ID was not found.')
  if(req.params.action === 'add') item.prioritized = true
  if(req.params.action === 'remove') item.prioritized = false
  await user.save()
  res.status(201).json(item)
})

router.put('/translate/:id/:action', auth, async (req, res) => {
  const user  = await User.findById(req.user._id)
  const item = user.statistics.translations.id(req.params.id)
  if (!item) return res.status(404).send('The item with the given ID was not found.')
  if(req.params.action === 'add') item.prioritized = true
  if(req.params.action === 'remove') item.prioritized = false
  await user.save()
  res.status(201).json(item)
})

// the following routes fetch one radom item from a priority list
router.get('/grammar/one', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-_id statistics.grammarSentences')
  const grammarPrlist = user.statistics.grammarSentences.filter(item => item.prioritized)
  if(grammarPrlist.length === 0) return res.send('There are no items on your priority list for Grammar')
  const rand = Math.floor(Math.random() * grammarPrlist.length)
  res.json(grammarPrlist[rand])
})

router.get('/proverb/one', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-_id statistics.proverbs')
  const proverbsPrlist = user.statistics.proverbs.filter(item => item.prioritized)
  if(proverbsPrlist.length === 0) return res.send('There are no items on your priority list for Proverbs')
  const rand = Math.floor(Math.random() * proverbsPrlist.length)
  res.json(proverbsPrlist[rand])
})

router.get('/translate/one', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-_id statistics.translations')
  const translationsPrlist = user.statistics.translations.filter(item => item.prioritized)
  if(translationsPrlist.length === 0) return res.send('There are no items on your priority list for Translation')
  const rand = Math.floor(Math.random() * translationsPrlist.length)
  res.json(translationsPrlist[rand])
})

module.exports = router