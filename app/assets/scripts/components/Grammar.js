import React, {useState} from 'react'
import PageLayout from './PageLayout'
import Button from './Button'

const Grammar = () => {

	const [items, setItems] = useState(1)

	const generate = () => {
		setItems(items + 1)
	}

	const getPrevious = () => {
		setItems(items - 1)
	}

	return (
		<PageLayout>
			<h1>This is the Grammar page!</h1>
			<p>{items}</p>
			<textarea></textarea>
			<Button onClickMe={() => generate()}>Generate <i className='far fa-play-circle' /></Button>
			<Button onClickMe={() => getPrevious()} disabled={items==0 ? true : false}>Previous <i className='far fa-play-circle' /></Button>
		</PageLayout>
	) 
}
export default Grammar