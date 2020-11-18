import React from 'react'
import PageLayout from './PageLayout'

const About = () => {

	const styles = {
		background: '#fff',
		borderRadius: '4px',
		padding: '5px',
		boxShadow: '0 0 10px rgba(0,0,0,0.5)'
	}

	return (
		<PageLayout>
			<div style={styles}>
				<p>&nbsp;&nbsp; How not to forget English? If you've been learning English for quite some time and have gained some significant knowledge (at least by your own reckoning), you understand that if you are not a native speaker, you'll start to 'lose' your English very quickly without practice. It is a natural phenomenon. Apparently remembering a language, even your mother tongue, isn't quite like riding a bicycle. Without practice, your English will start to 'fade away'. So, how to maintain your English level?</p>
				<p>I have found a solution. I have written an app that will help you keep your English at high level all the time! The web app consists of two parts: 'Grammar' and 'Proverbs'. The 'Grammar' part allows you to practice your English grammar. This is a collection of completely arbitrary sentences and phrases recorded in English which explain English grammar rules. The app randomly generates a phrase when you press the button. Your job is to listen to the recording carefully, understand it, and type it exactly like it sounds. The 'Proverbs' part contains a huge collection of recorded English proverbs, idioms, quotes, etc. It works exactly the same way: you generate recordings and type them precisely. You can recite them out loud if you want, to better memorize them. This app will not only improve your pronunciation and listening skills, but also touch typing skills. Being able to quickly type in English is a must have skill nowadays.</p>
				<p>I chose proverbs for a reason. It is very efficient to learn English by memorizing proverbs because they have a tendency to get imprinted into your brain much better than ordinary sentences and phrases. 5-7 proverbs per day will be enough. It will only take 20 min of your time, or you can practice it throughout the day whenever you have free time and access to the Internet. Just make a habit of it! And I guarantee you that you'll never forget English! This app contains over 4000 recordings made in American English (mostly). And I keep adding new ones all the time.</p>
				<p>Don't let your English rust, keep it shiny!</p>
			</div>
		</PageLayout>
	) 
}
export default About