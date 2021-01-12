const googleDriveLinks = require('../data/googleDriveLinksForGrammar.json')

const findLink = file => {
	//find the link to the audio file in googleDriveLinks
	const item = googleDriveLinks.find(item => item.name === file)
	return item ? item['link'] : ''
}

module.exports = {
	grabOneItem(index, data) {
	  const item = data[index]
	  // grab one file from the array of audio files, if there are no audio files in the array  
	  // (no audio files have been recorded yet) then send an empty string
	  const audioFileName = item.sounds[Math.floor(Math.random() * item.sounds.length)] || ''
	  return {
	    sentence: item.proverb, 
	    description: item.description, // descripton will be undefined for proverbs
	    audioFileName,
	    audioFileUrl: findLink(audioFileName)
	  }
	}
}