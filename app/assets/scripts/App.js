// For a css automated workflow we need to bundle our css files into our main javascript file
// my own styles
import './App.css'
// import React related modules
import React from 'react'
import ReactDOM from 'react-dom'
import MyAmazingComponent from './components/MyAmazingComponent'

// for hot module replacement
if(module.hot) module.hot.accept() 


const App = () => {
	return (
		<div>
			<MyAmazingComponent/>
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
