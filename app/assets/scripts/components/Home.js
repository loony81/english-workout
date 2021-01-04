import React from 'react'
import PageLayout from './PageLayout'
import Button from './Button'

const Home = () => {
	return (
		<PageLayout>
			<h1>Exercise your English by listening to and typing out English proverbs, sayings and quotes!</h1>
			<Button to='/grammar'>Get Started! <br/><i className='fas fa-play-circle' /></Button>
		</PageLayout>
	) 
}
export default Home