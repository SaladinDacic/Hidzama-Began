import React, { useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SiteAppContext } from './Contexts/SiteApp.context';
import './Card3.css';

function Card3() {
	const [ idx, setIdx ] = useState(0);
	const [ Intervali, setIntervali ] = useState('');
	const { quotes } = useContext(SiteAppContext);

	const interval = (limit, callback) => {
		var i = 0;
		var git = setInterval(function() {
			if (i === limit) {
				i = -1;
			} else {
				callback(i);
			}
			i++;
		}, 5000);
		setIntervali(git);
	};

	const changeIndexInTime = (arr) => {
		interval(arr.length, (i) => {
			setIdx(i);
		});
	};

	const showDots = quotes.map((val, i) => {
		return i === idx ? (
			<i key={uuidv4()} class="fas chosenOne fa-circle" />
		) : (
			<i
				key={uuidv4()}
				onClick={() => {
					clearInterval(Intervali);
					setIdx(i);
					// setTimeout(() => {
					// 	changeIndexInTime(quotes);
					// }, 5000);
				}}
				class="fas fa-circle"
			/>
		);
	});

	useEffect(() => {
		changeIndexInTime(quotes);
	}, []);

	return (
		<div className="Card-content">
			<div className="content Card3-container">
				<div className="Card3-quote">{<p>{quotes[idx].quote}</p>}</div>
				<div className="Card3-iskustva-container">
					<div className="Card3-iskustva">
						<h4>Iskustva:</h4>
						<h4>{quotes[idx].author}</h4>
					</div>

					<div className="Card3-dots">{showDots}</div>
				</div>

				<button
					onClick={() => {
						// changeIndexInTime(quotes);
					}}
				>
					O nama
				</button>
			</div>
		</div>
	);
}

export default Card3;
