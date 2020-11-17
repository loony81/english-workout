import React from 'react'
import Button from './Button'
import './WorkingArea.css'

const WorkingArea = ({items, generate, getPrevious, context}) => {

	return (
		<div className='WorkingArea'>
			<div>
				<p>{items}</p>
				<textarea></textarea>
			</div>
			<Button onClickMe={() => generate(context)}>Generate <i className='far fa-play-circle' /></Button>
			<Button onClickMe={() => getPrevious(context)} disabled={items==0 ? true : false}>Previous <i className='far fa-play-circle' /></Button>
		</div>
	) 
}
export default WorkingArea