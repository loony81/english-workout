import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false)
	const showButton = () => {
		window.innerWidth <= 960 ? setButton(false) : setButton(true)
	}
	window.addEventListener('resize', showButton)

	return ( 
	<>
		<nav className='Navbar'>
			<div className='Navbar-container'>
				<Link to='/' className='Navbar-logo' onClick={closeMobileMenu}>
					<img src="assets/images/vectorpaint.svg" />ENGLISH WORKOUT 
				</Link>	
				<ul className={click ? 'Navbar-menu active' : 'Navbar-menu'}>
					<li className='Navbar-item'><Link to='/' className='Navbar-link' onClick={closeMobileMenu}>HOME</Link></li>
					<li className='Navbar-item'><Link to='/about' className='Navbar-link' onClick={closeMobileMenu}>ABOUT</Link></li>
					<li className='Navbar-item'><Link to='/grammar' className='Navbar-link' onClick={closeMobileMenu}>GRAMMAR</Link></li>
					<li className='Navbar-item'><Link to='/proverbs' className='Navbar-link' onClick={closeMobileMenu}>PROVERBS</Link></li>
				</ul>
				<div className='Navbar-hamburger' onClick={handleClick}>
	            	<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
	          </div>
			</div>
		</nav>
	</>
	)
}

export default Navbar