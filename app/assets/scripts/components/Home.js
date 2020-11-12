import React from 'react'
import PageLayout from './PageLayout'
import Button from './Button'

const Home = () => {
	return (
		<PageLayout>
			<h1>Exercise your English by listening to and typing out English proverbs, sayings and quotes!</h1>
			<Button>Get Started! <i className='fas fa-dumbbell' /></Button>
		</PageLayout>
	) 
}
export default Home