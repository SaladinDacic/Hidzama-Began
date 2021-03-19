import { v4 as uuidv4 } from 'uuid';
import useSetTerminToLocalStorage from '../Hooks/useSetTerminToLocalStorage';
import useSetRemoveTerminFromLocalStorage from '../Hooks/useSetRemoveTerminFromLocalStorage';

const [ terminsObj, setTerminsObj, setTerminToStorage ] = useSetTerminToLocalStorage('termini');
const [ requestsObj, setRequestsObj, setRequestToStorage ] = useSetTerminToLocalStorage('zahtjevi');
const [ setRemoveTermin ] = useSetRemoveTerminFromLocalStorage('termini');
const [ setRemoveRequest ] = useSetRemoveTerminFromLocalStorage('zahtjevi');

export function TerminsReducer(terminsObj, action) {
	switch (action.type) {
		case 'setTerminsObj':
			return setTerminsObj
		case 'setRequestsObj':
			return setRequestsObj
		case 'setRemoveTermin':
			return setRemoveTermin
		case 'setRemoveRequest':
			setRemoveRequest
		default:
			return todosState;
	}
}

