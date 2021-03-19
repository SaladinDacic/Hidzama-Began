import useSetLocalStorageState from '../Hooks/useSetLocalStorageState';

function useSetRemoveTerminFromLocalStorage(loactionInStorage) {
	const [ terminsObj, setTerminsObj ] = useSetLocalStorageState(loactionInStorage, {});

	let setRemoveTermin = (time, chosenDate) => {
		let currentTerminObj = JSON.parse(window.localStorage.getItem(loactionInStorage));
		if (currentTerminObj[chosenDate] !== undefined) {
			let terminsMap = new Map(Object.entries(currentTerminObj || {}));
			let terminsKeys = Array.from(terminsMap.keys());
			let terminsValues = Array.from(terminsMap.values());
			let dateIndex = terminsKeys.findIndex(elem=>elem === chosenDate)
			let newTermins = terminsValues[dateIndex].filter(value=>{return value !== time})
			if (newTermins.length === 0){
				let terminToDelete = {[chosenDate]:newTermins};
				// console.log(terminToDelete);
				delete terminToDelete[chosenDate];
				// console.log(terminToDelete);
				setTerminsObj(terminToDelete);
			}
			else{
				console.log({[chosenDate]:newTermins}, "pun")
				setTerminsObj({[chosenDate]:newTermins});
			}
			// console.log(currentTerminObj,{[chosenDate]:newTermins})


			// setTerminsObj({[chosenDate]:newTermins});
		}
		

	};
	return [setRemoveTermin];
}

export default useSetRemoveTerminFromLocalStorage;
