import React from 'react'
import Button from './Button'
import './WorkingArea.css'

const WorkingArea = ({items, generate, getPrevious, context}) => {

	return (
		<div className='WorkingArea'>
			<h1>This is the {context} page!</h1>
			<div>
				<p>{items}</p>
				<textarea></textarea>
			</div>
			<Button onClickMe={() => generate(context)}>Next <br/><i className='fas fa-chevron-circle-right' /></Button>
			<Button onClickMe={() => getPrevious(context)} disabled={items==0 ? true : false}>Previous <br/><i className='fas fa-chevron-circle-left' /></Button>
		</div>
	) 
}
export default WorkingArea