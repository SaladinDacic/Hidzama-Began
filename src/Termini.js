import React, { useState, useContext, useEffect } from 'react';
import './Termini.css';
import { SiteAppContext } from './Contexts/SiteApp.context';

import InputForm from './InputForm';

function Termini() {
	const [ timeOfTermine, setTimeOfTermine ] = useState('');

	const { setShowCalendar, hideForm, setHideForm, workHours, terminsInOneDay } = useContext(SiteAppContext);

	const handleClick = (time) => {
		setHideForm(true);
		setTimeOfTermine(time);
	};

	const handleBackButton = ()=>{
		hideForm?setHideForm(!hideForm):setShowCalendar(false); 
	}

	const showWorkHours = workHours.map((val) => {
		const disabledTermin = terminsInOneDay.find((value) => {
			return (value.time === val.time) & value.accepted;
		}) === undefined ? (
			false
		) : (
			true
		)
		const disabledRequest = terminsInOneDay.find((value) => {
			return (value.time === val.time) & !value.accepted;
		}) === undefined ? (
			false
		) : (
			true
		)
		return (
			<button
				className={disabledRequest?"termini-button disabledRequest": "termini-button"}
				onClick={() => {
					handleClick(val.time);
				}}
				key={val.time}
				disabled={disabledTermin || disabledRequest}
			>
				{disabledTermin ? 'RESERVED '+ val.time : disabledRequest?'Zahtjev za temin na čekanju '+ val.time: val.time}
			</button>
		);
	});

	return (
		<div>
			{hideForm ? (
				<div>
					<InputForm timeOfTermine={timeOfTermine} />
				</div>
			) : (
				<div>{showWorkHours}</div>
			)}
			<button onClick={handleBackButton} className="termini-button">
				◀ Nazad
			</button>
		</div>
	);
}

export default Termini;
