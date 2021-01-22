import React from 'react'
import PageLayout from './PageLayout'
import WorkingArea from './WorkingArea'

const Proverbs = ({items, generate, online, audio}) => {

	return (
		<PageLayout>
			<WorkingArea items={items} generate={generate} context='proverb' online={online} audio={audio} />
		</PageLayout>
	) 
}
export default Proverbs