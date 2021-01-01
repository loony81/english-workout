import React, {useState, useEffect, useRef} from 'react'
import Button from './Button'
import './WorkingArea.css'
// import { get } from 'idb-keyval'
import localforage from 'localforage'


const WorkingArea = ({items, generate, context}) => {

	let [currentItem, setCurrentItem] = useState(items.length - 1)
	const [visible, setVisible] = useState(false) // a flag to hide or show a sentence
	const [revealedSentence, setRevealedSentence] = useState('') // revealedSentence shows a correctly typed portion of a hidden sentece
	const taRef = useRef() // to access textarea directly (we can't use getElementById from within React)


	// every time a new item is generated and added to the items array, we reset the currentItem index
	// to point to the latest item
	useEffect(() => {
		setCurrentItem(items.length - 1)
	}, [items.length])



	useEffect(() => {
		// reset revealedSentence to be fully hidden when switching between items
		if(currentItem >= 0) setRevealedSentence(items[currentItem].mask)
		taRef.current.value = '' // clear textarea when switching between items
	}, [currentItem])


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
				console.log(err.message)
			}
		}
	}

	// this event handler compares the text being typed in the textarea with the masked sentence
	// and gradually reveals it if it is typed correctly
	const compareText = e => {
		 const l = e.target.value.length
		if(items[currentItem].sentence.startsWith(e.target.value)) {
			setRevealedSentence(e.target.value + items[currentItem].mask.slice(l))
		}
	}

	const toggleVisibility = () => {
		setVisible(!visible) // toggle the visible flag
		setRevealedSentence(items[currentItem].mask) // reset revealedSentence to be fully hidden
	}


	return (
		<div className='WorkingArea'>
			<h3>This is the {context} page!</h3>
			<div className='WorkingArea-show'>
				<p>{(currentItem > -1) && (visible ? items[currentItem].sentence : revealedSentence)}</p>
				<textarea autoFocus onChange={compareText} ref={taRef}></textarea>
				{context == 'grammar'  && <p>{currentItem == -1 ? '' : items[currentItem].description}</p>}
			</div>
			<div className='WorkingArea-navigation'>
				<Button onClickMe={() => generate(context)}>Next <br/><i className='fas fa-chevron-circle-right' /></Button>
				<Button onClickMe={() => play()}>Play <br/><i className='fas fa-volume-up' /></Button>
				<Button onClickMe={() => toggleVisibility()} disabled={currentItem < 0 ? true : false}>{visible ? 'Hide' : 'Show'} <br/><i className='fas fa-volume-up' /></Button>
				<Button onClickMe={() => getPrevious()} disabled={currentItem <= 0 ? true : false}>Previous <br/><i className='fas fa-chevron-circle-left' /></Button>
			</div>
			
		</div>
	) 
}
export default WorkingArea