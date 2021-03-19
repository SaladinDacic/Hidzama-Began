import React, { useContext } from 'react';
import { SiteAppContext } from './Contexts/SiteApp.context';
import './Card2.css';

function Card2({ wake }) {
	const { showCalendar, setShowCalendar } = useContext(SiteAppContext);
	return (
		<div className="Card2-body">
			<div className="Card-content">
				<div className="Card2-content content">
					<p>
						<i class="far fa-calendar" />
					</p>
					<h3>Naruči se?</h3>
					{wake && !showCalendar ? (
						<div className="Card1-description Card2--dorada-description">
							<p>Pritisnite naruči se, zatim izaberite datum na vrhu kartice</p>
							<p>
								Nakon toga izaberite termin ukoliko nije zauzet ili na čekanju i upišite svoje podatke
								te pritisnite "Rezerviši termin"
							</p>
							<p>I to je to, samo sačekajte poziv na vaš telefon</p>
						</div>
					) : (
						<div>
							<span>Već ste se odlučili za tretman?</span>
							<br />
							<span>Nema problema naručite se u samo par jednostavnih koraka</span>
							<hr />
						</div>
					)}

					<br />
					<button onClick={() => setShowCalendar(true)}>Naruči se</button>
				</div>
			</div>
		</div>
	);
}

export default Card2;
