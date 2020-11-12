import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const Button = ({children}) => {
	return (
		<Link to='/grammar' className='Button'>
			<button>{children}</button>
		</Link>
	) 
}
export default Button