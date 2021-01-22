import React, {useState, useEffect, useRef} from 'react'
import Button from './Button'
import './WorkingArea.css'
import localforage from 'localforage'


const WorkingArea = ({items, generate, context, online, audio}) => {

	let [currentItem, setCurrentItem] = useState(items.length - 1)
	const [sentenceVisibility, setSentenceVisibility] = useState(false) // a flag to hide or show a proverb/grammar sentence
	const [revealedSentence, setRevealedSentence] = useState('') // revealedSentence shows a correctly typed portion of a sentence
	const [description, setDescription] = useState(false) // a flag to toggle between the textarea and the description section
	const [animation, setAnimation] = useState(0) // this state is needed for setting and clearing loading animation
	const [loading, setLoading] = useState(false)	// to prevent a user from generating another item while current item is being downloaded
	const taRef = useRef() // to access textarea directly (we can't use getElementById from within React)
	const pRef = useRef() // to access paragraph directly


	
	useEffect(() => {
		if(items.length > 0){
			setLoading(false)
			// clearInterval(animation) // remove loading animation
		}
		// as soon as a new item has been downloaded and added to the items array, we reset the currentItem index
		// to point to the latest item
		setCurrentItem(items.length - 1)
		setSentenceVisibility(false) // hide the sentence in case it is shown
		setDescription(false) // hide the description in case it is shown
	}, [items.length])



	useEffect(() => {
		if(loading) showLoadingAnimation() // display loading animation while download is in progress
		else clearInterval(animation) // remove loading animation
	}, [loading])



	useEffect(() => {
		// reset revealedSentence to be fully hidden when switching between items
		if(currentItem >= 0) setRevealedSentence(items[currentItem].mask)
		taRef.current.value = '' // clear textarea when switching between items
	}, [currentItem])

	useEffect(() => {
		// in case a user is back online but the loading animation is still in progress, then remove it
		if(online && loading){
			setLoading(false)
			// clearInterval(animation)
			items.length > 0 ? pRef.current.textContent = items[currentItem].mask : pRef.current.textContent = ''
		}
	}, [online])



	// this hook will run when the component unmounts
	useEffect(() => {
		return () => {
			if(loading){ // terminate the loading animation in case download is in progress when navigating to another page
				setLoading(false)
			}
	    }
	}, [])



	const getNext = () => {
		// prevent initiating another download if an item is being downloaded
		if(!loading) {
			audio.pause()//stop current audio playback
			setLoading(true)	
			generate(context)
			setDescription(false) // hide the description in case it is shown
			taRef.current.value = '' // clear textarea
			
		}
	}


	const getPrevious = () => {
		audio.pause()//stop current audio playback when switching to the previous item
		if(animation) clearInterval(animation) // remove loading animation if there is
		setLoading(false)
		setCurrentItem(currentItem - 1)
		setSentenceVisibility(false) // hide the sentence in case it is shown
		setDescription(false) // hide the description in case it is shown
	}

	const showLoadingAnimation = () => {
		//clear text inside paragraph and start the loading animation
		pRef.current.textContent = ''
		setAnimation(setInterval(() => {
			let p = pRef.current
			if(!p) return
			if(p.textContent.length >= 3) p.textContent = '.'
			else p.textContent += '.'
		}, 500))
	}



	async function playSound(){
		// prevent playing the sound while other item is being downloaded
		if(!loading){
			const fileName = items[currentItem].audioFileName
			const fileUrl = items[currentItem].audioFileUrl
			if(fileUrl){
				try {
					const blob = await localforage.getItem(fileName)
					if(!blob){
						// if audio can't be found in indexedDB and fileUrl is not an empty string
						// then try to play it direclty from Google Drive
						audio.src = fileUrl
					} else {
						audio.src = URL.createObjectURL(blob)
					}
					await audio.play()
				} catch(err) {
					console.log(err.message)
				}
			}
		}	
	}

	// this event handler compares the text being typed in the textarea with the masked sentence
	// and gradually reveals it if it is typed correctly
	const compareText = e => {
		const color = e.target.style.color
		const text = e.target.value
		const l = e.target.value.length
		const item = items[currentItem]
		if(item.sentence.startsWith(text)) {
			setRevealedSentence(text + item.mask.slice(l))
			if(color === 'red' || 'green') e.target.style.color = 'black'
			if(item.sentence.length === l) {
				e.target.style.color = 'green'
				setSentenceVisibility(true)
			}
		} else {
			e.target.style.color = 'red'
		}
	}

	const toggleVisibility = () => {
		// prevent toggling visibility while other item is being downloaded
		if(!loading){
			setSentenceVisibility(!sentenceVisibility) // hide or show a proverb/grammar sentence
			setRevealedSentence(items[currentItem].mask) // reset revealedSentence to be fully hidden
		}
	}

	return (
		<div className='WorkingArea'>
			<h3>This is the {context} page!</h3>
			{!online  && <p>You are currently offline.</p>}
			<div className='WorkingArea-show'>
				<p ref={pRef}>{(currentItem > -1) && (sentenceVisibility ? items[currentItem].sentence : revealedSentence)}</p>
				<textarea onChange={compareText} ref={taRef} style = {{visibility: description ? 'hidden' : 'visible'}} placeholder='Type it here'></textarea>
				{context == 'grammar'  && <p style = {{visibility: description ? 'visible' : 'hidden'}}>{currentItem == -1 ? '' : items[currentItem].description}</p>}
				{(context == 'grammar' && currentItem > -1)  && <button onClick={() => setDescription(!description)}>{description ? <i className="fas fa-keyboard" /> : <i className="fas fa-info-circle" />}</button>}
			</div>
			<div className='WorkingArea-navigation'>
				<Button onClickMe={() => getNext()} disabled={online ? false : true}>Next <br/><i className='fas fa-chevron-circle-right' /></Button>
				<Button onClickMe={() => playSound()} disabled={currentItem < 0 ? true : false}>Play <br/><i className='fas fa-volume-up' /></Button>
				<Button onClickMe={() => toggleVisibility()} disabled={currentItem < 0 ? true : false}>{sentenceVisibility ? 'Hide' : 'Show'} <br/>{sentenceVisibility ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}</Button>
				<Button onClickMe={() => getPrevious()} disabled={currentItem <= 0 ? true : false}>Previous <br/><i className='fas fa-chevron-circle-left' /></Button>
			</div>
			
		</div>
	) 
}
export default WorkingArea