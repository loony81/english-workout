// For a css automated workflow we need to bundle our css files into our main javascript file
// my own styles
import './App.css'
// import React related modules
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Grammar from './components/Grammar'
import Proverbs from './components/Proverbs'

// for hot module replacement
if(module.hot) module.hot.accept() 


const App = () => {
	return (
		<>
			<Router>
			<Navbar/>
				<Switch>
					<Route path='/' exact />
				</Switch>
			</Router>
			<Home/>
			<About/>
			<Grammar/>
			<Proverbs/>
		</>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
