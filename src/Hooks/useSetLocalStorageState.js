import {useState, useEffect} from 'react';

function useSetLocalStorageState(key, initialState) {
    const [state, setstate] = useState(()=>{
        let value;
        try{
            value = JSON.parse(window.localStorage.getItem(key) || String(initialState));
        }catch(e){
            value = initialState;
        }
        return value;
        }   
    );
    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(state))
    })   
    return [state, setstate];
}

export default useSetLocalStorageState
