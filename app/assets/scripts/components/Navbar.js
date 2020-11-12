import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
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

	const navs = [
		{path:'/', page: 'HOME'},
		{path:'/grammar', page: 'GRAMMAR'},
		{path:'/proverbs', page: 'PROVERBS'},
		{path:'/about', page: 'ABOUT'}
	]

	return ( 
	<>
		<nav className='Navbar'>
			<div className='Navbar-container'>
				<Link to='/' className='Navbar-logo' onClick={closeMobileMenu}>
					<img src="assets/images/vectorpaint.svg" />ENGLISH WORKOUT 
				</Link>	
				<ul className={click ? 'Navbar-menu active' : 'Navbar-menu'}>
					{navs.map((item,i) => (
			        	<li key={i} className='Navbar-item'><NavLink to={item.path} exact className='Navbar-link' activeClassName='Navbar-link-active' onClick={closeMobileMenu}>{item.page}</NavLink></li>
			        ))}
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