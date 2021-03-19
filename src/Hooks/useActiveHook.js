import  {useState} from 'react'

function useActiveHook(name) {
    const [active, setActive] = useState(false);
    if(name === "activeCard"){
        setActive(true)
    }
    return [active]
}

export default useActiveHook
