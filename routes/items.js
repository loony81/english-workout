const express = require('express')
const router = express.Router()
const axios = require('axios')
const {User} = require('../models/user')
const {Grammar} = require('../models/grammar')
const {Proverb} = require('../models/proverb')
const {Translation} = require('../models/translation')
const auth = require('../middleware/auth')



//this function construct an object to be returned to a user and adds to it various data depending on
// whether there is the audio property in the item or whether a user is logged in or not, etc
async function constructResponse(item, user, topic) {
  // select one audio file if there is
  let audio
  if(item.sounds){
    audio = item.sounds[Math.floor(Math.random() * item.sounds.length)]
  }
  
  const result = {
    id: item._id,
    sentence: item.proverb, 
    description: item.description
  }
  // if a user is authenticated then add the item's statistics to the resulting object
  if(user){
    const itemStatistics = await updateUser(user._id, item._id, topic)
    result.itemStatistics = itemStatistics
  } 
  // the same for audio
  if(audio) result.audio = audio
  return result
}

// this function finds a user and updates the statistics about an item
async function updateUser(userId, itemId, topic) { 
  const user = await User.findById(userId)
  // we need to return the old statistics before updating it
  const oldStatistics = user.updateStatistics(itemId, topic)
  await user.save()
  return oldStatistics
}

// this function calculates the total number of items inside a collection, and saves it as a property 
//of the app.locals object so that it is available throughout the entire app and we don't have to recalculate it
// each time we need to generate a random item, we just get it from app.locals
const getTotalNumberOfItems = async (req, topic, model) => {
  let totalItems
  if(req.app.locals[topic]){
    //use it
    totalItems = req.app.locals[topic]
  } else {
   // if not then get the total number of items from the db and set it as a property of app.locals
   req.app.locals[topic] = await model.estimatedDocumentCount()
   totalItems = req.app.locals[topic]
  }
  return totalItems
}


// routes start from here
 
router.get('/grammar', auth, async (req, res) => {
  const totalGrammarItems = await getTotalNumberOfItems(req, 'totalGrammarItems', Grammar)
  const rand = Math.floor(Math.random() * totalGrammarItems)
  // get random document from the Grammar collection
  const randomItem = await Grammar.findOne().skip(rand)
  // construct a response depending on whether a user is logged in or not
  const constructedResponse = await constructResponse(randomItem, req.user, 'grammarSentences')
  res.json(constructedResponse)
})


router.get('/proverbs', auth, async (req, res) => {
    const totalProverbItems = await getTotalNumberOfItems(req, 'totalProverbItems', Proverb)
  	const rand = Math.floor(Math.random() * totalProverbItems)
    // get random document from the Proverb collection
    const randomItem = await Proverb.findOne().skip(rand)
    // construct a response depending on whether a user is logged in or not
    const constructedResponse = await constructResponse(randomItem, req.user, 'proverbs')
    res.json(constructedResponse)
})

router.get('/translation', auth, async (req, res) => {
  const totalTranslationItems = await getTotalNumberOfItems(req, 'totalTranslationItems', Translation)
  const rand = Math.floor(Math.random() * totalTranslationItems)
  // get random document from the Translation collection
  const randomItem = await Translation.findOne().skip(rand)
  // construct a response depending on whether a user is logged in or not
  const constructedResponse = await constructResponse(randomItem, req.user, 'translations')
  res.json(constructedResponse)
})

// a route for downloading audio files from Google Drive
// due to the CORS issue we can't download audio files directly from Google Drive,
// so instead we make a request to our own server and make it download the audio file from Google Drive
// and send it back to us
// 26.01.2021 note: after adding the helmet package, it is now possible to load audio directly from Google Drive without using this route as a proxy
router.post('/audio', async (req, res) => {  
   //get the audio file from Google Drive as a stream
   const audio = await axios({
    url: req.body.url,
    method: 'GET',
    responseType: 'stream'
   })
   // set response headers
   res.writeHead(200, {
    'Content-Type': 'audio/aac'
   })
   // and pipe it directly to response
   audio.data.pipe(res)
})

module.exports = router