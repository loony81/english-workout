import React from 'react'
import PageLayout from './PageLayout'
import WorkingArea from './WorkingArea'

const Grammar = ({items, generate}) => {

	return (
		<PageLayout>
			<WorkingArea items={items} generate={generate} context='grammar' />
		</PageLayout>
	) 
}
export default Grammar