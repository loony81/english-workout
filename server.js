const express = require('express')
const app = express()
const axios = require('axios')
const winston = require('winston')
const {grabOneItem} = require('./utils/utils')
require('./logging')() // handling and logging errors
const grammarSentences = require('./data/grammar.json')
const proverbs = require('./data/proverbs.json')



//middleware
app.use(express.static(__dirname + '/dist'))
app.use(express.json())

//calculate how many items are stored in each json file
const grammarQty = grammarSentences.length
const proverbsQty = proverbs.length

const port = process.env.PORT || 8080 // add port to config later

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

app.get('*', (req, res) => {
  // Does index.html get resent every time a request hits this route?
 	res.redirect('/')
})

//error handling middleware must be registered after all the other middlewares and routes
  app.use(require('./middleware/error'))

app.listen(port, () => winston.info(`Listening on port ${port} ...`))