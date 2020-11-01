import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {


	// window.addEventListener('resize', showButton)

	return ( 
	<>
		<nav className='Navbar'>
			<div className='Navbar-container'>
				<Link to='/' className='Navbar-logo'>
					<img src="assets/images/vectorpaint.svg" />ENGLISH WORKOUT 
				</Link>	
			</div>
		</nav>
	</>
	)
}

export default Navbar