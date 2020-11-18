const express = require('express')
const path = require('path')
const app = express()

const proverbs = [
	'A bird is known by its note, and a man by his talk',
	'A bird may be known by its song',
	'A bird never flew on one wing',
	'A black hen lays a white egg',
	'A black plum is as sweet as white'
]

app.use(express.static(path.join(__dirname, '/dist')))

app.get('/getgrammar', (req, res) => {
	const index = Math.floor(Math.random() * proverbs.length)
    return res.send(proverbs[index])
})

app.get('/getproverbs', (req, res) => {
  	const index = Math.floor(Math.random() * proverbs.length)
    return res.send(proverbs[index])
})

app.get('/*', (req, res) => {
 	res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(8080)