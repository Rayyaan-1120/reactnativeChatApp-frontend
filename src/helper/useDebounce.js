import React,{useState,useEffect,useRef} from 'react';

export function useDebounce(value,time){

    const [_value,setvalue] = useState(value)
    const mountedRef = useRef(false)
    const timeref = useRef(null)

    const cancel = () => window.clearTimeout(timeref.current)

    useEffect(() => {
        cancel()
        timeref.current = window.setTimeout(() => {
            setvalue(value)
        },time)
    },[value])

    useEffect(() => {
        mountedRef.current = true
        return cancel
    },[])

    return [_value,cancel]
}