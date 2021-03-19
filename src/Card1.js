import React, { useState, useContext } from 'react';
import { SiteAppContext } from './Contexts/SiteApp.context';
import './Card1.css';
import InputForm from './InputForm';

function Card1({ wake }) {
	const [ showInputForm, setShowInputForm ] = useState(false);
	const { showCalendar } = useContext(SiteAppContext);
	return (
		<div className="Card-content">
			{showInputForm & !showCalendar? (
				<div className="Card1-InputForm-container">
					<InputForm setShowInputForm={setShowInputForm}/>
				</div>
			) : (
				<div className="Card1-content content">
					<p>
						<i class="far fa-envelope" />
					</p>
					<h3>Interesuje vas nešto?</h3>

					{wake && !showCalendar ? (
						<div className="Card1-description">
							<p>Dovoljno je samo da unesete željenu poruku i broj telefona te pritisnete šalji</p>
							<p>Javit će vam se naš prvi slobodan operater</p>
						</div>
					) : (
						<div>
							<p>Pošaljite nam poruku preko našeg brzog mail-a</p>
							<hr />
						</div>
					)}

				</div>
			)}
			<div className=" content">
					<button onClick={()=>{!showCalendar && setShowInputForm(!showInputForm)}}>{!showInputForm?"Brzi-mail":"<Nazad"}</button>
				</div>
		</div>
	);
}

export default Card1;
