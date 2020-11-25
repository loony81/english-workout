// For a css automated workflow we need to bundle our css files into our main javascript file
// my own styles
import './App.css'
// import React related modules
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Grammar from './components/Grammar'
import Proverbs from './components/Proverbs'
import Footer from './components/Footer'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime"
import localforage from 'localforage'

// for hot module replacement
if(module.hot) module.hot.accept() 


const App = () => {


	const [grammarItems, setGrammarItems] = useState([])
	const [proverbs, setProverbs] = useState([])

	async function generate(context){
		try {
			if(context == 'grammar') {
				const item = await axios.get('/getgrammar')
				const audioUrl = '/audio/grammar/' + item.data.sounds[0]
   				const audioFile = await axios.get(audioUrl, {
				   responseType: 'blob'
				})
   				// store audio file in indexedDB
   				await localforage.setItem(audioUrl, audioFile.data)
				const newGrammarItems = [...grammarItems]
				newGrammarItems.push({proverb: item.data.proverb, audioUrl: audioUrl, description: item.data.description})
				setGrammarItems(newGrammarItems)
			} 
			if(context == 'proverbs') {
				const data = await axios.get('/getproverbs')
				const newProverbs = [...proverbs, data.data]
				setProverbs(newProverbs)
			}
		} catch(err) {
			err => console.log(err)
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
