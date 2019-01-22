import React from 'react';

const PianoKey = ({ keyObj, key }) => {
	// {label: "D", name: "d", color: "white", note: "d2", highlight: true}
	var className = 'key ' + keyObj.color + '-key ' + keyObj.note.replace(/\d+/, '');
	if (keyObj.highlight) {
		className += ' highlight';
	}
	if (keyObj.rootNote) {
		className += ' rootNote';
	}
	return(
		<div className={className} key={keyObj.note}></div>
	);
};

export default PianoKey;
