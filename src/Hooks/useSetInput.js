import {useState} from 'react'

function useSetInput(initialValue) {
    const [input, setinput] = useState(initialValue)
    const inputChange = (evt)=>{
        setinput(evt.target.value)
    }
    const inputRest = (evt)=>{
        setinput("")
    }
    return [input, inputChange, inputRest]
}

export default useSetInput
