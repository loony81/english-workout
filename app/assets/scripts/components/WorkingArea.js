import React, {useState, useEffect} from 'react'
import Button from './Button'
import './WorkingArea.css'
// import { get } from 'idb-keyval'
import localforage from 'localforage'


const WorkingArea = ({items, generate, context}) => {

	let [currentItem, setCurrentItem] = useState(items.length - 1)

	useEffect(() => {
		setCurrentItem(items.length - 1)
	}, [items.length])

	const getPrevious = () => {
		setCurrentItem(currentItem - 1)
	}

	async function play(){
		const fileName = items[currentItem].audioFileName
		const fileUrl = items[currentItem].audioFileUrl
		if(fileUrl){
			try {
				const blob = await localforage.getItem(fileName)
				if(!blob){
					// if audio can't be found in indexedDB and fileUrl is not an empty string
					// then try to play it direclty from Google Drive
					const audio = await new Audio(fileUrl)
					audio.volume = 1
					audio.play()
				} else {
					const audio = new Audio(URL.createObjectURL(blob))
					audio.volume = 1
					audio.play()
				}
			} catch(err) {
				console.log(err)
			}
		}
	}

	return (
		<div className='WorkingArea'>
			<h3>This is the {context} page!</h3>
			<div className='WorkingArea-show'>
				<p>{currentItem == -1 ? '' : items[currentItem].sentence}</p>
				{context == 'grammar'  && <p>{currentItem == -1 ? '' : items[currentItem].description}</p>}
				<textarea autoFocus></textarea>
			</div>
			<div className='WorkingArea-navigation'>
				<Button onClickMe={() => generate(context)}>Next <br/><i className='fas fa-chevron-circle-right' /></Button>
				<Button onClickMe={() => play()}>Play <br/><i className='fas fa-volume-up' /></Button>
				<Button onClickMe={() => getPrevious()} disabled={currentItem <= 0 ? true : false}>Previous <br/><i className='fas fa-chevron-circle-left' /></Button>
			</div>
			
		</div>
	) 
}
export default WorkingArea