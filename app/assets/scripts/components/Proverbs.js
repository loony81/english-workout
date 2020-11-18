import React from 'react'
import PageLayout from './PageLayout'
import WorkingArea from './WorkingArea'

const Proverbs = ({items, generate}) => {

	return (
		<PageLayout>
			<WorkingArea items={items} generate={generate} context='proverbs' />
		</PageLayout>
	) 
}
export default Proverbs