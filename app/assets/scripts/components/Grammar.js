import React from 'react'
import PageLayout from './PageLayout'
import WorkingArea from './WorkingArea'

const Grammar = ({items, generate, getPrevious}) => {

	return (
		<PageLayout>
			<h1>This is the Grammar page!</h1>
			<WorkingArea items={items} generate={generate} getPrevious={getPrevious} context='grammar' />
		</PageLayout>
	) 
}
export default Grammar