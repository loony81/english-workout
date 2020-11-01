// For a css automated workflow we need to bundle our css files into our main javascript file
// my own styles
import './App.css'
// import React related modules
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

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
		</>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
