import React, { createContext} from 'react';
import useSetRemoveTerminFromLocalStorage from '../Hooks/useSetRemoveTerminFromLocalStorage';


export const RemovingContext = createContext();
export function RemovingProvider(props) {
    	const [setRemoveTermin] = useSetRemoveTerminFromLocalStorage('termini');
	const [setRemoveRequest] = useSetRemoveTerminFromLocalStorage('zahtjevi');
    return (
        <RemovingContext.Provider value={{setRemoveRequest, setRemoveTermin}}>
            {props.children}
        </RemovingContext.Provider>
    )
}

