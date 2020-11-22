import React, {useState, useEffect} from 'react'
import Button from './Button'
import './WorkingArea.css'

const WorkingArea = ({items, generate, context}) => {

	let [currentItem, setCurrentItem] = useState(items.length - 1)

	useEffect(() => {
		setCurrentItem(items.length - 1)
	}, [items.length])

	const getPrevious = () => {
		setCurrentItem(currentItem - 1)
	}

	const play = () => {
		console.log(items[currentItem].sounds)
	}

	return (
		<div className='WorkingArea'>
			<h3>This is the {context} page!</h3>
			<div className='WorkingArea-show'>
				<p>{currentItem == -1 ? '' : items[currentItem].proverb}</p>
				{context == 'grammar'  && <p>{currentItem == -1 ? '' : items[currentItem].description}</p>}
				<textarea autoFocus></textarea>
			</div>
			<div className='WorkingArea-navigation'>
				<Button onClickMe={() => generate(context)}>Next <br/><i className='fas fa-chevron-circle-right' /></Button>
				<Button onClickMe={() => play()}>Play <br/><i className='fas fa-volume-up' /></Button>
				<Button onClickMe={() => getPrevious()} disabled={currentItem <= 0 ? true : false}>Previous <br/><i className='fas fa-chevron-circle-left' /></Button>
			</div>
			
		</div>
	) 
}
export default WorkingArea