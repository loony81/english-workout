const express = require('express')
const app = express()
const axios = require('axios')
const grammarData = require('./data/grammar_audio.json')
const proverbs = require('./data/proverbs.json')
const googleDriveLinks = require('./data/googleDriveLinks.json')

const grammarQty = grammarData.length
const proverbsQty = proverbs.length


app.use(express.static(__dirname + '/dist'))
app.use(express.json())

const findLink = file => {
  //find the link to the audio file in googleDriveLinks
  const item = googleDriveLinks.find(item => item.Filename === file)
  return item ? item['Direct Link'] : ''
}

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/getgrammar', (req, res) => {
	const index = Math.floor(Math.random() * grammarQty)
  const item = grammarData[index]
  // grab one file from the array of audio files related to this grammar sentence
  // if there are no audio files in the array (no audio files have been recorded yet) then send an empty string
  const audioFileName = item.sounds[Math.floor(Math.random() * item.sounds.length)] || ''
  const dataToSend = {
    sentence: item.proverb, 
    description: item.description,
    audioFileName,
    audioFileUrl: findLink(audioFileName)
  }
  return res.send(dataToSend)
})

app.get('/getproverb', (req, res) => {
  	const index = Math.floor(Math.random() * proverbsQty)
    const item = proverbs[index]
    // grab one file from the array of audio files related to this proverb
    // if there are no audio files in the array (no audio files have been recorded yet) then send an empty string
    const audioFileName = item.sounds[Math.floor(Math.random() * item.sounds.length)] || ''
    const dataToSend = {
      sentence: item.proverb, 
      audioFileName,
      audioFileUrl: findLink(audioFileName)
    }
    return res.send(dataToSend)
})

// a route for downloading audio files from Google Drive
app.post('/audio', async (req, res) => {
  // do we really need an async callback here?
   try{
       // set response headers
       res.writeHead(200, {
        'Content-Type': 'audio/aac'
       });
       //get the audio file from Google Drive as a stream
       const audio = await axios({
        url: req.body.url,
        method: 'GET',
        responseType: 'stream'
       })
       // and pipe it directly to response
       audio.data.pipe(res)
   } catch(err){
      console.log(err.message)
   }
})

app.get('*', (req, res) => {
  // Is index.html being resent every time a request hits this route?
 	res.redirect('/')
})

app.listen(8080)