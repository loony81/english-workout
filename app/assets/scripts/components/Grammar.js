import React from 'react'
import PageLayout from './PageLayout'
import WorkingArea from './WorkingArea'

const Grammar = ({items, generate, online, audio}) => {

	return (
		<PageLayout>
			<WorkingArea items={items} generate={generate} context='grammar' online={online} audio={audio} />
		</PageLayout>
	) 
}
export default Grammar