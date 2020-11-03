import React from 'react'
import './PageLayout.css'

const Layout = ({children}) => {
	return (
		<div className='PageLayout'>
			{children}
		</div>
	) 
}
export default Layout