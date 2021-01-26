const express = require('express')
const router = express.Router()
const axios = require('axios')
const grammarSentences = require('../data/grammar.json')
const proverbs = require('../data/proverbs.json')
const googleDriveLinksForGrammar = require('../data/googleDriveLinksForGrammar.json')
const googleDriveLinksForProverbs = require('../data/googleDriveLinksForProverbs.json')
//calculate how many items are stored in each json file
const grammarQty = grammarSentences.length
const proverbsQty = proverbs.length


const findLink = (file, googleDriveLinks) => {
	//find the link to the audio file on Google Drive
	const item = googleDriveLinks.find(item => item.name === file)
	return item ? item['link'] : ''
}

const grabOneItem = (index, data, googleDriveLinks) => {
	const item = data[index]
	// grab one file from the array of audio files, if there are no audio files in the array  
	// (no audio files have been recorded yet) then send an empty string
	const audioFileName = item.sounds[Math.floor(Math.random() * item.sounds.length)] || ''
	return {
	    sentence: item.proverb, 
	    description: item.description, // descripton will be undefined for proverbs
	    audioFileName,
	    audioFileUrl: findLink(audioFileName, googleDriveLinks)
 	}
}

router.get('/getgrammar', (req, res) => {
	const index = Math.floor(Math.random() * grammarQty)
	const dataToSend = grabOneItem(index, grammarSentences, googleDriveLinksForGrammar)
	res.send(dataToSend)
})


router.get('/getproverb', (req, res) => {
  	const index = Math.floor(Math.random() * proverbsQty)
    const {sentence, audioFileName, audioFileUrl} = grabOneItem(index, proverbs, googleDriveLinksForProverbs) // select everything except description
    const dataToSend = {sentence, audioFileName, audioFileUrl}
    res.send(dataToSend)
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