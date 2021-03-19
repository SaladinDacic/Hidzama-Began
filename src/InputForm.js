import React, { useState, useContext } from 'react';
import useSetInput from './Hooks/useSetInput';
import MaskInput from 'react-maskinput';
import { SiteAppContext } from './Contexts/SiteApp.context';
import axios from 'axios';
import './InputForm.css';

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function InputForm({ timeOfTermine, setShowInputForm }) {
	const [ name, changeName ] = useSetInput('');
	const [ textAreaMessage, changeTextAreaMessage ] = useSetInput('');
	const [ number, changeNumber ] = useSetInput('');
	const [ mask, setMask ] = useState('+(387)00/000-00000');
	const { showCalendar, setHideForm, formatedDate, sendMail } = useContext(SiteAppContext);

	const onChange = (e) => {
		if (e.target.value.indexOf('34') === 0 || e.target.value.indexOf('37') === 0) {
			setMask('+(387)00/000-00000');
			return;
		}
	};
	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			if (
				number.split('').filter((value) => {
					return value !== ' ';
				}).length < 16
			) {
				alertify.error('Unesite ispravno broj telefona');
			} else {
				const response = await axios
					.post('termins', {
						date: formatedDate,
						name: name,
						time: timeOfTermine,
						phoneNumber: number
					})
					.then(({ data }) => {
						console.log(data);
						sendMail(
							'Zahtjev za termin',
							`
							Ime i prezime: ${data.name}
							Datum: ${data.date}
							Vrijeme termina: ${data.time}
							Broj telefona: ${data.phoneNumber}
							`
						);
						alertify.success('Zahtjev je uspješno poslan');
						setHideForm(false);
					})
					.catch((error) => {
						console.log(error);
					});
			}
		} catch (err) {
			console.log(err);
			alertify.error('zahtjev za termin nije uspješno poslan');
		}
	};


	const handleSubmitCard1 = (evt)=>{
		evt.preventDefault();
		try {
			if (
				number.split('').filter((value) => {
					return value !== ' ';
				}).length < 16
			) {
				alertify.error('Unesite ispravno broj telefona');
			} else {
				sendMail(
					'Pitanje iz brzog Mail-a',
					`
					Br.telefon: ${number}
					Pitanje: ${textAreaMessage}
					`
				);
				alertify.success('Poruka uspješno poslana');
				setShowInputForm(false);
			}
			
		} catch (error) {
			console.log(error)
			alertify.error("Mail nije uspješno poslat")
		}
	}

	return (
		<div>
			{showCalendar ? (
				<form onSubmit={handleSubmit}>
					<div className="InputForm">
						<h4>{name || 'Unesi ime i prezime'}</h4>
						<input
							className="InputForm-input"
							onChange={changeName}
							name="ime"
							id="ime"
							type="text"
							required
						/>
						<h4>{number || 'Unesi broj'}</h4>
						<MaskInput
							onChange={(e) => {
								onChange(e);
								changeNumber(e);
							}}
							id="broj"
							required
							defaultValue="600000000"
							maskChar=" "
							mask={mask}
							alwaysShowMask
							size={20}
							className="InputForm-input"
						/>
					</div>
					<button className="InputForm-button">Rezerviši termin</button>
				</form>
			) : (
				<form onSubmit={handleSubmitCard1}>
					<div className="InputForm Card1">
						<h4>{number || 'Unesi broj'}</h4>
						<MaskInput
							onChange={(e) => {
								onChange(e);
								changeNumber(e);
							}}
							id="broj"
							required
							defaultValue="600000000"
							maskChar=" "
							mask={mask}
							alwaysShowMask
							size={20}
							className="InputForm-input Card1"
						/>
						<h4>{'Unesi pitanje'}</h4>
						<textarea
							className="InputForm-input Card1"
							onChange={changeTextAreaMessage}
							name="ime"
							id="ime"
							type="text"
							required
							rows="4" cols="37"
						/>
					</div>
					<button className="InputForm-button Card1">Pošalji</button>
				</form>
			)}
		</div>
	);
}

export default InputForm;
