// For a css automated workflow we need to bundle our css files into our main javascript file
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import 'onsenui'
import '../styles/styles.css'

// for hot module replacement
if(module.hot) module.hot.accept() 
