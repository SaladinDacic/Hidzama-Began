import React, { useContext } from 'react';
import { SiteAppContext } from './Contexts/SiteApp.context';
import { v4 as uuidv4 } from 'uuid';

function Admin() {
	let { allTerminsArrayOfObjects, toggleRequest, deleteTermine } = useContext(SiteAppContext);

	const showTables = () => {
		const requestArr = allTerminsArrayOfObjects
			.filter((val) => {
				return !val.accepted;
			})
			.map((value) => {
				return (
					<tr key={uuidv4()} >
						<td>{value.date}</td>
						<td>{value.time}</td>
						<td>{value.name}</td>
						<td>{value.phoneNumber}</td>
						<td><button onClick={()=>{toggleRequest(value._id, true); window.location.reload()}}>Prihvati termin</button></td>
						<td><button onClick={()=>{deleteTermine(value._id); window.location.reload()}}>Izbriši termin skroz</button></td>
					</tr>
				);
			});

		const confirmedArr = allTerminsArrayOfObjects
			.filter((val) => {
				return val.accepted;
			})
			.map((value) => {
				return (
					<tr key={uuidv4()}>
						<td>{value.date}</td>
						<td>{value.time}</td>
						<td>{value.name}</td>
						<td>{value.phoneNumber}</td>
						<td><button onClick={()=>{toggleRequest(value._id, false); window.location.reload()}}>Ukloni sa prihvaćenih</button></td>
						<td><button onClick={()=>{deleteTermine(value._id); window.location.reload()}}>Izbriši termin skroz</button></td>
					</tr>
				);
			});

		return (
			<tbody>
				<tr>
					<th>Zahtjevi za Termin</th>
				</tr>
				{requestArr}
				<tr>
					<th>Prihvaćeni termini</th>
				</tr>
				{confirmedArr}
			</tbody>
		);
	};

	const printShowTables = showTables();
	return <table>{printShowTables}</table>;
}

export default Admin;

/* const showTerminsTable = terminsKeys.map((val, idx) => {
		return (
			<tbody>
				<tr key={uuidv4()}>
					<th>{val}</th>
					<td>
						{terminsValues[idx].map((value) => {
							return (
								<div>
									<button key={uuidv4()}>{value}</button>
									<button
										onClick={() => {
											window.location.reload();
											return false;
										}}
									>
										x
									</button>
								</div>
							);
						})}
					</td>
				</tr>
			</tbody>
		);
	}); */
