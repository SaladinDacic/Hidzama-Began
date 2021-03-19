import React, { useContext } from 'react';
import './SiteApp.css';
import Navbar from './Navbar';
import Landing from './Landing';
import Card from './Card';
import { SiteAppContext } from './Contexts/SiteApp.context';
import Calendar from './Calendar';

function SiteApp() {
	const { showCalendar } = useContext(SiteAppContext);
	return (
		<div className="SiteApp-body">
			<div className="SiteApp-content">
				<div className="SiteApp-img">
					<img />
				</div>
				<Navbar />
				<Landing />
				<div className="SiteApp-cards">
					<Card name="card1" />
					<Calendar/>
					{/* {showCalendar ? <Calendar /> : <Card name="card2" />} */}
					<Card name="card3" />
				</div>
			</div>
		</div>
	);
}

export default SiteApp;
