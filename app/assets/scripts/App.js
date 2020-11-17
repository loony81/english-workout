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

// for hot module replacement
if(module.hot) module.hot.accept() 


const App = () => {

	const [grammarItems, setGrammarItems] = useState(0)
	const [proverbs, setProverbs] = useState(0)

	const generate = context => {
		if(context == 'grammar') setGrammarItems(grammarItems + 1)
		if(context == 'proverbs') setProverbs(proverbs + 1)
	}

	const getPrevious = context => {
		if(context == 'grammar') setGrammarItems(grammarItems - 1)
		if(context == 'proverbs') setProverbs(proverbs - 1)
	}

	return (
		<>
			<Router>
				<Navbar/>
				<Switch>
					<Route path='/' exact><Home/></Route>
					<Route path='/grammar'><Grammar generate={generate} getPrevious={getPrevious} items={grammarItems}/></Route>
					<Route path='/proverbs'><Proverbs generate={generate} getPrevious={getPrevious} items={proverbs} /></Route>
					<Route path='/about'><About/></Route>
				</Switch>
				<Footer/>
			</Router>
		
		</>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
