import React, {useState} from 'react'
import PageLayout from './PageLayout'
import WorkingArea from './WorkingArea'

const Proverbs = () => {

	const [items, setItems] = useState(1)

	const generate = () => {
		setItems(items + 1)
	}

	const getPrevious = () => {
		setItems(items - 1)
	}
	
	return (
		<PageLayout>
			<h1>This is the Proverbs page!</h1>
			<WorkingArea items={items} generate={generate} getPrevious={getPrevious} />
		</PageLayout>
	) 
}
export default Proverbs