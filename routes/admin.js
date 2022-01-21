const express = require('express')
const router = express.Router()
const {Grammar, validateGrammar} = require('../models/grammar')
const {Proverb, validateProverb} = require('../models/proverb')
const {Translation, validateTranslation} = require('../models/translation')
const auth = require('../middleware/auth')
const admin = require('../middleware/admin')


const findItems = async (model, proverb) => {
  const regexObj = new RegExp(".*" + proverb + ".*", 'i');
  const items  = await model.find({proverb: regexObj})
    .limit(5)
    .sort({name: 1}) //ascending order
  return items
}


// routes to find items
router.post('/grammar', [auth, admin], async (req, res) => {
  const {proverb} = req.body
  const items = await findItems(Grammar, proverb)
  res.json(items)
})


router.post('/translation', [auth, admin], async (req, res) => {
  const {proverb} = req.body
  const items = await findItems(Translation, proverb)
  res.json(items)
})

router.post('/proverbs', [auth, admin], async (req, res) => {
  const {proverb} = req.body
  const items = await findItems(Proverb, proverb)
  res.json(items)
})

// routes for adding new items
 
router.post('/add_grammar', [auth, admin], async (req, res) => {
  const {proverb, sounds, description} = req.body
  const {error} = validateGrammar({proverb, sounds, description})
  if(error) return res.status(400).send({message: error.details[0].message})
  const newGrammar = new Grammar({proverb, sounds, description})
  await newGrammar.save()
  res.status(201).send({message: 'New grammar item has been successfully saved'})
})


router.post('/add_translation', [auth, admin], async (req, res) => {
    const {proverb, description} = req.body
    const {error} = validateTranslation({proverb, description})
    if(error) return res.status(400).send({message: error.details[0].message})
    const newTranslation = new Translation({proverb, description})
    await newTranslation.save()
    res.status(201).send({message: 'New translation item has been successfully saved'})
})

router.post('/add_proverbs', [auth, admin], async (req, res) => {
    const {proverb, sounds} = req.body
    const {error} = validateProverb({proverb, sounds})
    if(error) return res.status(400).send({message: error.details[0].message})
    const newProverb = new Proverb({proverb, sounds})
    await newProverb.save()
    res.status(201).send({message: 'New proverb item has been successfully saved'})
})

// routes for updating items

router.put('/grammar', [auth, admin], async (req, res) => {
  const {proverb, sounds, description} = req.body
  const {error} = validateGrammar({proverb, sounds, description})
  if(error) return res.status(400).send({message: error.details[0].message})
  const item = await Grammar.findById(req.body._id)
  item.proverb = proverb
  item.sounds = sounds
  item.description = description
  await item.save()
  res.status(201).send({message: 'The grammar item has been successfully modified'})
})


router.put('/translation', [auth, admin], async (req, res) => {
  const {proverb, description} = req.body
  const {error} = validateTranslation({proverb, description})
  if(error) return res.status(400).send({message: error.details[0].message})
  const item = await Translation.findById(req.body._id)
  item.proverb = proverb
  item.description = description
  await item.save()
  res.status(201).send({message: 'The translation item has been successfully modified'})
})

router.put('/proverbs', [auth, admin], async (req, res) => {
  const {proverb, sounds} = req.body
  const {error} = validateProverb({proverb, sounds})
  if(error) return res.status(400).send({message: error.details[0].message})
  const item = await Proverb.findById(req.body._id)
  item.proverb = proverb
  item.sounds = sounds
  await item.save()
  res.status(201).send({message: 'The proverb has been successfully modified'})
})

// routes for deleting items

router.delete('/grammar/:id', [auth, admin], async (req,res) => {
  const result = await Grammar.findByIdAndRemove(req.params.id)
  if (!result) return res.status(404).send({message: 'The grammar item with the given ID was not found.'})
  res.status(200).send({message: 'The grammar item has been successfully deleted'})
})

router.delete('/translation/:id', [auth, admin], async (req,res) => {
  const result = await Translation.findByIdAndRemove(req.params.id)
  if (!result) return res.status(404).send({message: 'The translation item with the given ID was not found.'})
  res.status(200).send({message: 'The translation item has been successfully deleted'})
})

router.delete('/proverbs/:id', [auth, admin], async (req,res) => {
  const result = await Proverb.findByIdAndRemove(req.params.id)
  if (!result) return res.status(404).send({message: 'The proverb with the given ID was not found.'})
  res.status(200).send({message: 'The proverb has been successfully deleted'})
})


module.exports = router