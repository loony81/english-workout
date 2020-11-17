import React from 'react'
import PageLayout from './PageLayout'
import WorkingArea from './WorkingArea'

const Proverbs = ({items, generate, getPrevious}) => {

	return (
		<PageLayout>
			<WorkingArea items={items} generate={generate} getPrevious={getPrevious} context='proverbs' />
		</PageLayout>
	) 
}
export default Proverbs