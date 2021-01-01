import React from 'react'
import PageLayout from './PageLayout'
import WorkingArea from './WorkingArea'

const Proverbs = ({items, generate}) => {

	return (
		<PageLayout>
			<WorkingArea items={items} generate={generate} context='proverb' />
		</PageLayout>
	) 
}
export default Proverbs