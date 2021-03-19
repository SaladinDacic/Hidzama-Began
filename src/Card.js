import React, { useContext, useState } from 'react';
import './Card.css';
import Card1 from "./Card1";
import Card3 from "./Card3";
import { SiteAppContext } from './Contexts/SiteApp.context';

function Card({ name }) {
	const [ wake, setWake ] = useState(false);
	const {showCalendar} = useContext(SiteAppContext);
	const showedCalendar = showCalendar? "show": ""
	switch (name) {
		case 'card3':
			return (
				<div
					className={wake ? 'Card-body focus '+ showedCalendar : 'Card-body '+ showedCalendar}
					onMouseEnter={() => setWake(true)}
					onMouseLeave={() => setWake(false)}
				>
					<Card1 wake={wake}/>
				</div>
			);
		case 'card1':
			return (
				<div
					className={wake ? 'Card-body focus '+showedCalendar : 'Card-body '+showedCalendar}
					onMouseEnter={() => setWake(true)}
					onMouseLeave={() => setWake(false)}
				>
					<i class="fas fa-quote-left"></i>
					<Card3/>
				</div>
			);
	}
}

export default Card;
