import React from 'react'
import Button from './Button'
import './WorkingArea.css'

const WorkingArea = ({items, generate, getPrevious, context}) => {

	return (
		<div className='WorkingArea'>
			<h3>This is the {context} page!</h3>
			<div className='WorkingArea-show'>
				<p>{items}</p>
				<textarea autoFocus></textarea>
			</div>
			<div className='WorkingArea-navigation'>
				<Button onClickMe={() => generate(context)}>Next <br/><i className='fas fa-chevron-circle-right' /></Button>
				<Button onClickMe={() => getPrevious(context)} disabled={items==0 ? true : false}>Previous <br/><i className='fas fa-chevron-circle-left' /></Button>
			</div>
			
		</div>
	) 
}
export default WorkingArea