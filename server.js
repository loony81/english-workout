const express = require('express')
const path = require('path')
const app = express()
const grammarData = require('./data/grammar_audio.json')
const proverbs = require('./data/proverbs.json')

const grammarQty = grammarData.length
const proverbsQty = proverbs.length


app.use(express.static(path.join(__dirname, '/dist')))

app.get('/getgrammar', (req, res) => {
	const index = Math.floor(Math.random() * grammarQty)
    return res.send(grammarData[index])
})

app.get('/getproverbs', (req, res) => {
  	const index = Math.floor(Math.random() * proverbsQty)
    return res.send(proverbs[index])
})

app.get('/*', (req, res) => {
 	res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(8080)