import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
// import useSetTerminToLocalStorage from '../Hooks/useSetTerminToLocalStorage';
// import useSetRemoveTerminFromLocalStorage from '../Hooks/useSetRemoveTerminFromLocalStorage';

export const SiteAppContext = createContext();
export function SiteAppProvider(props) {
	const workHours = [
		{ time: '08:00-09:00' },
		{ time: '09:00-10:00' },
		{ time: '10:00-11:00' },
		{ time: '11:00-12:00' },
		{ time: '12:00-13:00' },
		{ time: '13:00-14:00' },
		{ time: '14:00-15:00' },
		{ time: '15:00-16:00' },
		{ time: '16:00-17:00' },
		{ time: '17:00-18:00' }
	];

	const quotes = [
		{
			author: 'Saladin Dacić',
			quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorum unde laudantium asperiores totam, aliquam ab maxime facilis iure eligendi.'
		},
		{
			author: 'Ajla Ćato',
			quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorum unde laudantium asperiores totam, aliquam ab maxime facilis iure eligendi.'
		},
		{
			author:'Jusuf Dacić',
			quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorum unde laudantium asperiores totam'
		},
		{
			author:'Began Muhović',
			quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorum unde laudantium asperiores totam, aliquam ab maxime facilis iure eligendi, aliquam ab maxime facilis iure eligendi.'
		},
		{
			author:'Kenan Dacić',
			quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorum unde laudantium asperiores totam, aliquam ab maxime facilis iure eligendi, aliquam ab maxime facilis iure eligendi., aliquam ab maxime facilis iure eligendi., aliquam ab maxime facilis iure eligendi.'
		},
		{
			author:'Zuhra Dacić',
			quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolorum '
		},
	];

	const randomizerArr = (arr)=>{
		let randomNum;
		let newArr = []
		do{
			randomNum = Math.floor(Math.random()*arr.length)
			newArr.indexOf(arr[randomNum])===-1&&newArr.push(arr[randomNum])
		}while(newArr.length < arr.length)
		return newArr;
	}
	

	const [ hideForm, setHideForm ] = useState(false);
	const [ showCalendar, setShowCalendar ] = useState(false);
	const [ showMaps, setShowMaps ] = useState(false);
	const [ startDate, setStartDate ] = useState(new Date());
	let formatedDate = startDate.toLocaleDateString('fr');

	const [ terminsInOneDay, setTerminsInOneDay ] = useState([]);
	const [ allTerminsArrayOfObjects, setAllTerminsArrayOfObjects ] = useState([]);

	// const [ terminsObj, setTerminsObj, setTerminToStorage ] = useSetTerminToLocalStorage('termini');
	// const [ requestsObj, setRequestsObj, setRequestToStorage ] = useSetTerminToLocalStorage('zahtjevi');

	useEffect(
		async () => {
			const { data } = await axios.get('termins');
			const timeArr = [];
			data.forEach((day) => {
				day.date === formatedDate && timeArr.push({ time: day.time, accepted: day.accepted });
			});
			// console.log(timeArr)
			setTerminsInOneDay(timeArr);
			setAllTerminsArrayOfObjects(data);
		},
		[ formatedDate ]
	);

	const sendMail = async (subject, message) => {
		const response = await emailjs.send(
			//ove idu podaci za slanje maila
		);
		console.log(response);
	};

	const toggleRequest = async (id, wish) => {
		try {
			wish
				? await axios.put(`termins/${id}`, { accepted: wish })
				: await axios.put(`termins/${id}`, { accepted: wish });
		} catch (error) {
			console.log(error);
		}
	};
	const deleteTermine = async (id) => {
		try {
			await axios.delete(`termins/${id}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SiteAppContext.Provider
			value={{
				startDate,
				setStartDate,
				formatedDate,
				workHours,
				hideForm,
				setHideForm,
				terminsInOneDay,
				showCalendar,
				setShowCalendar,
				allTerminsArrayOfObjects,
				toggleRequest,
				deleteTermine,
				sendMail,
				showMaps,
				setShowMaps,
				quotes,
				randomizerArr
			}}
		>
			{props.children}
		</SiteAppContext.Provider>
	);
}
