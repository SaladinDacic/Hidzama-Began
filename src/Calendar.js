import React, { useState, useContext } from 'react';
import { SiteAppContext } from './Contexts/SiteApp.context';
import DatePicker from 'react-datepicker';
import './Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import Termini from './Termini';
import Card2 from './Card2';

const Example = () => {
	const { showCalendar, setHideForm, startDate, setStartDate } = useContext(SiteAppContext);
	// const termins = terminsObj[formatedDate];
	const [ wake, setWake ] = useState(false);

	const addMonths = (num) => {
		let d = new Date();
		d.setMonth(d.getMonth() + num);
		return d;
	};

	const getDay = (num) => {
		let dateObj = new Date();
		// var year = dateObj.getUTCFullYear();
		// var month = dateObj.getUTCMonth() + 1; //months from 1-12
		dateObj.setDate(num);
		let day = dateObj.getUTCDate();
		return day - 1;
	};
	const classNameBody = ()=>{
		let showedCalendar = showCalendar? "show": ""
		return wake ? 'calendar-body calendar-focus ' + showedCalendar : 'calendar-body ' + showedCalendar
	}
	return (
		<div
			className={classNameBody()}
			onMouseEnter={() => setWake(true)}
			onMouseLeave={() => setWake(false)}
		>
			{showCalendar ? (
				<div>
					<div>
						<h3>Izaberi termin</h3>
						<DatePicker
							className="Calendar"
							selected={startDate}
							onChange={(date) => {
								setStartDate(date);
								setHideForm(false);
							}}
							minDate={new Date()}
							maxDate={addMonths(1)}
							// dayClassName={(date) => (date.getUTCDate() === getDay(27) ? 'classToDisableDay' : undefined)}
						/>
					</div>
					<div className="calendar-termini-container">
						<div className="calendar-termini">
							<Termini />
						</div>
					</div>
				</div>
			) : (
				<Card2 wake={wake}/>
			)}
		</div>
	);
};

export default Example;
