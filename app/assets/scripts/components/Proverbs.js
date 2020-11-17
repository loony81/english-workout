import React, {useState} from 'react'
import PageLayout from './PageLayout'
import Button from './Button'

const Proverbs = () => {

	const [proverbs, setProverbs] = useState(0)

	const generate = () => {
		setProverbs(proverbs + 1)
	}

	const getPrevious = () => {
		setProverbs(proverbs - 1)
	}
	
	return (
		<PageLayout>
			<h1>This is the Proverbs page!</h1>
			<p>{proverbs}</p>
			<textarea></textarea>
			<Button onClickMe={() => generate()}>Generate <i className='far fa-play-circle' /></Button>
			<Button onClickMe={() => getPrevious()} disabled={proverbs==0 ? true : false}>Previous <i className='far fa-play-circle' /></Button>
		</PageLayout>
	) 
}
export default Proverbs