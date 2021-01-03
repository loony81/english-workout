const express = require('express')
const app = express()
const axios = require('axios')
const grammarSentences = require('./data/grammar_audio.json')
const proverbs = require('./data/proverbs.json')
const googleDriveLinks = require('./data/googleDriveLinks.json')

const grammarQty = grammarSentences.length
const proverbsQty = proverbs.length

//middleware
app.use(express.static(__dirname + '/dist'))
app.use(express.json())

const findLink = file => {
  //find the link to the audio file in googleDriveLinks
  const item = googleDriveLinks.find(item => item.Filename === file)
  return item ? item['Direct Link'] : ''
}

const grabOneItem = (index, data) => {
  const item = data[index]
  // grab one file from the array of audio files, if there are no audio files in the array  
  // (no audio files have been recorded yet) then send an empty string
  const audioFileName = item.sounds[Math.floor(Math.random() * item.sounds.length)] || ''
  return {
    sentence: item.proverb, 
    description: item.description, // descripton will be undefined for proverbs
    audioFileName,
    audioFileUrl: findLink(audioFileName)
  }
}

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/getgrammar', (req, res) => {
	const index = Math.floor(Math.random() * grammarQty)
  const dataToSend = grabOneItem(index, grammarSentences)
  res.send(dataToSend)
})

app.get('/getproverb', (req, res) => {
  	const index = Math.floor(Math.random() * proverbsQty)
    const {sentence, audioFileName, audioFileUrl} = grabOneItem(index, proverbs) // select everything except description
    const dataToSend = {sentence, audioFileName, audioFileUrl}
    res.send(dataToSend)
})

// a route for downloading audio files from Google Drive
app.post('/audio', async (req, res) => {
  // do we really need an async callback here?
   try{    
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
   } catch(e){
      res.status(500).send(e.message)
   }
})

app.get('*', (req, res) => {
  // Does index.html get resent every time a request hits this route?
 	res.redirect('/')
})

app.listen(8080)