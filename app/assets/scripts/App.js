// For a css automated workflow we need to bundle our css files into our main javascript file
// my own styles
import './App.css'
// import React related modules
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import components
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Grammar from './components/Grammar'
import Proverbs from './components/Proverbs'
import Footer from './components/Footer'
//import other modules
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime"
import localforage from 'localforage'

// for hot module replacement
if(module.hot) module.hot.accept() 


const App = () => {
	//state
	const [grammarItems, setGrammarItems] = useState([])
	const [proverbs, setProverbs] = useState([])

	// this function gets the audio file related to the proverb or grammar sentence 
	// and saves it in indexedDB for offline use
	// due to the CORS issue we can't download audio files directly from Google Drive,
	// so instead we make a request to our own server and make it download the audio file from Google Drive
	// and send it back to us
	async function getAudio(url, name){
		console.log('inside getAudio()')
		try {
			const audioFile = await axios.post('/audio', {url}, {responseType: 'blob'})
			// store audio file in indexedDB
			await localforage.setItem(name, audioFile.data)
		} catch(e) {
			console.log(e.message)
		}	
	}

	//this function creates a mask for a proverb or grammar sentence
	const createMask = str => {
		let mask = ''
		for(let char of str){
			char === ' ' ? mask+=' ' : mask+='x'
		}
		return mask
	}

	//this function makes a request to the server, 
	// gets a new proverb or grammar sentence and saves it in state
	async function generate(context){
		try {
			const item = await axios.get('/get'+context)
			const {audioFileUrl, audioFileName} = item.data
			//check if there is alreay an audio file with this name in indexedDB
			const audioFileAlreadyInDB = await localforage.getItem(audioFileName)
			console.log(audioFileAlreadyInDB)
			console.log(audioFileUrl || 'there\'s no url for this audio')
			// if there is no such file, download it from Google Drive
			if(audioFileUrl && !audioFileAlreadyInDB) await getAudio(audioFileUrl, audioFileName)
			//create a mask to hide the sentence, add it to the item as one of the properties
			//could've added it on the serverside but there's no need to transfer extra data 
			item.data.mask = createMask(item.data.sentence)
			if(context == 'grammar') {
				const newGrammarItems = [...grammarItems, item.data]
				setGrammarItems(newGrammarItems)
			} 
			if(context == 'proverb') {
				const newProverbs = [...proverbs, item.data]
				setProverbs(newProverbs)
			}
		} catch(e) {
			console.log(e.message)
		}	 
	}

	return (
		<>
			<Router>
				<Navbar/>
				<Switch>
					<Route path='/' exact><Home/></Route>
					<Route path='/grammar'><Grammar generate={generate} items={grammarItems}/></Route>
					<Route path='/proverbs'><Proverbs generate={generate} items={proverbs} /></Route>
					<Route path='/about'><About/></Route>
				</Switch>
				<Footer/>
			</Router>
		
		</>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
