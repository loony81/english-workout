// For a css automated workflow we need to bundle our css files into our main javascript file
// my own styles
import './App.css'
// import React related modules
import React, {useState, useEffect} from 'react'
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
	const [online, setOnline] = useState(true) // a flag to check if a user is currently online of offline
	const [audio, setAudio] = useState(new Audio())
	audio.volume = 1
	
	// this url is to check internet connection during development, for production change it to origin
	// const url = new URL(window.location.origin)
	const url = new URL('https://ipv4.icanhazip.com')
	let interval


	useEffect(() => {
		window.addEventListener('offline', async e => {
		   //check if there's no Internet connection before setting offline mode
		   const result = await checkInternetConnection()
		   if(!result && online) {
		   	   setOnline(false)
		   	   console.log('You are offline.')
		   }
		}, false)
		window.addEventListener('online', async e => {
		   // make sure a user is really connected to the Internet (not just to a network)
			const result = await checkInternetConnection()	
			if(result){
				setOnline(true)
			}	   
		}, false)
	}, [])


	useEffect(() => {
		if(!online){
			interval = setInterval(async () => {
				const result = await checkInternetConnection()	
				console.log(result)
				if(result){
					setOnline(true)
					clearInterval(interval)
				}
			}, 5000)
		}
	}, [online])


	const checkInternetConnection = async () => {
		console.log('inside checkInternetConnection()')
		// random value to prevent cached responses
	  	url.searchParams.set('rand', Date.now())
		try {	
			await axios.head(url.toString())
			console.log('Connection to the Internet restored.')
			return true
		} catch(e) {
			console.log('Trying to reconnect...')
			return false
		}
	}




	//this function creates a mask for a proverb or grammar sentence 
	// (special characters and spaces won't be masked)
	const createMask = str => {
		let mask = ''
		for(let char of str){
			if(char.match(/[0-9.,':;()!?\s-]/)) {
				mask+=char
			} else {
				char.match(/[A-Z]/) ? mask+='X' : mask+='x'
			}
		}
		return mask
	}


	// due to the CORS issue we can't download audio files directly from Google Drive,
	// so instead we make a request to our own server and make it download the audio file from Google Drive
	// and send it back to us

	const getAudio = url => axios.post('/audio', {url}, {responseType: 'blob'})

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
			// if there is no such file, download it from Google Drive and save it to db
			if(audioFileUrl && !audioFileAlreadyInDB) {
				//just return if can't download it from Google Drive 
				const audioFile = await getAudio(audioFileUrl)
				if(!audioFile) return
				// store audio file in indexedDB for offline use
				await localforage.setItem(audioFileName, audioFile.data)
			}
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
			console.log('Something wrong inside generate(): ' + e.message)
			setOnline(false)
		}	 
	}

	return (
		<>
			<Router>
				<Navbar audio={audio} online={online} />
				<Switch>
					<Route path='/' exact><Home/></Route>
					<Route path='/grammar'><Grammar generate={generate} items={grammarItems} online={online} audio={audio} /></Route>
					<Route path='/proverbs'><Proverbs generate={generate} items={proverbs} online={online} audio={audio} /></Route>
					<Route path='/about'><About/></Route>
				</Switch>
				<Footer/>
			</Router>
		
		</>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
