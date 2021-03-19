import useSetLocalStorageState from '../Hooks/useSetLocalStorageState';

function useSetTerminToLocalStorage(loactionInStorage) {
	const [ terminsObj, setTerminsObj ] = useSetLocalStorageState(loactionInStorage, {});

	let setTerminToStorage = (time, chosenDate) => {
		let currentTerminObj = JSON.parse(window.localStorage.getItem(loactionInStorage));
		let newTermins = {...currentTerminObj}
		console.log(newTermins);
		if (currentTerminObj[chosenDate] === undefined) {
			newTermins = { ...currentTerminObj, [chosenDate]: [time] };
			
		}else{
			newTermins[chosenDate].find(val=>{
				return val === time
			})===undefined && newTermins[chosenDate].push(time)
		}
		// console.log(newTermins);
		setTerminsObj(newTermins); 

		// setTerminsObj({[chosenDate]:newTermins});
		/* let newTermin = JSON.parse(window.localStorage.getItem(loactionInStorage));
		if (newTermin[chosenDate] !== undefined) {
			newTermin[chosenDate].find((val) => {
				return val === time;
			}) === undefined && newTermin[chosenDate].push(time);
		} else {
			newTermin[chosenDate] = [ time ];
		}
		console.log(newTermin)
		setTerminsObj(newTermin); */
	};

	return [ terminsObj, setTerminsObj, setTerminToStorage ];
}

export default useSetTerminToLocalStorage;
