import React from 'react';
import Controls from './Controls.js';
import Piano from './Piano.js';
import Guitar from './Guitar.js';
import FretboardFlipper from '../components/FretboardFlipper.js';
import { flipFretboard } from '../actions/creators.js';
import './Piano.less';
import './Guitar.less';

const App = ({ store }) => {
	var state = store.getState();
	return (
		<div>
			<Controls 
				pitches={state.pitches} 
				scales={state.scales} 
				chords={state.chords} 
				type={state.type}
				dispatch={store.dispatch}
			/>
			<Piano octaves={state.octaves} />
			<Guitar notes={state.notes} rootNote={state.rootNote} fretboardIsFlipped={state.fretboardIsFlipped} />
			<FretboardFlipper onFretboardFlip={flipFretboard.bind(null, store.dispatch)} />
		</div>
	);
};

export default App;
