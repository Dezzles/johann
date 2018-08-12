import React from 'react';
import { connect } from 'react-redux';
import NotesSetter from '../../components/NotesSetter/index.js';
import PianoKey from './PianoKey.js';
import './Piano.less';

const Piano = ({ octavesOfPianoNotes }) => {
	const octs = octavesOfPianoNotes.map((oct, idx) => {
		var keys = oct.map(
			k => <PianoKey keyObj={k} key={k.note} />
		);
		return (<div className="octave" key={idx}>{keys}</div>);
	});

	return (
		<div className="instrument">
			<NotesSetter />
			<div className="piano">{octs}</div>
		</div>
	);
};

const mapStateToProps = state => ({
	octavesOfPianoNotes: state.octavesOfPianoNotes
})

export default connect(mapStateToProps)(Piano);

