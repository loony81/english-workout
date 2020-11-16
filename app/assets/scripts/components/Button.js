import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const Button = ({children, to, onClickMe}) => {
	if(to){
		return (
			<Link to={to} className='Button'>
				<button>{children}</button>
			</Link>
		) 
	}
	return <a className='Button'><button onClick={onClickMe}>{children}</button></a>

	
}
export default Button