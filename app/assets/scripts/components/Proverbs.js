import React from 'react'
import PageLayout from './PageLayout'
import WorkingArea from './WorkingArea'

const Proverbs = ({items, generate, getPrevious}) => {

	return (
		<PageLayout>
			<h1>This is the Proverbs page!</h1>
			<WorkingArea items={items} generate={generate} getPrevious={getPrevious} context='proverbs' />
		</PageLayout>
	) 
}
export default Proverbs