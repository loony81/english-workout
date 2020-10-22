// For a css automated workflow we need to bundle our css files into our main javascript file
// import onsen related modules
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import * as ons from 'onsenui'
import * as Ons from 'react-onsenui'
// my own styles
import '../styles/styles.css'
// import React related modules
import React from 'react'
import ReactDOM from 'react-dom'
import MyAmazingComponent from './modules/MyAmazingComponent'

// for hot module replacement
if(module.hot) module.hot.accept() 

function handleClick(){
	    ons.notification.alert('Hello world!');
}

const App = () => {
	return (
		<div>
			<Ons.Page>
	            <Ons.Button onClick={handleClick}>Tap me!</Ons.Button>
	            <MyAmazingComponent />
	        </Ons.Page>
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
