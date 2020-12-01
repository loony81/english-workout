const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const grammarData = require('./data/grammar_audio.json')
const proverbs = require('./data/proverbs.json')

const grammarQty = grammarData.length
const proverbsQty = proverbs.length


// app.use(express.static(path.join(__dirname, '/dist')))
app.use(express.static(__dirname + '/dist'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/getgrammar', (req, res) => {
	const index = Math.floor(Math.random() * grammarQty)
    return res.send(grammarData[index])
})

app.get('/getproverbs', (req, res) => {
  	const index = Math.floor(Math.random() * proverbsQty)
    return res.send(proverbs[index])
})

// a route for downloading audio files
app.get('/audio/:context/:file', (req, res, err) => {
  const filePath = path.join(__dirname, './data/audio/' + req.params.context + '/' + req.params.file)
  const stat = fs.statSync(filePath)

  // set response headers
  res.writeHead(200, {
    'Content-Type': 'audio/aac',
    'Content-Length': stat.size
  });
  //create read stream
  const readStream = fs.createReadStream(filePath)
  // pipe read stream to response stream
  readStream.pipe(res)
})

app.get('*', (req, res) => {
 	res.redirect('/')
})

app.listen(8080)