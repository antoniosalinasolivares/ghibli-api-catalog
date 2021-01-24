import { useState, useEffect } from 'react'

const getSavedData = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue
    if(initialValue instanceof Function) return initialValue()

}

export default function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(()=> {
        return getSavedData(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}
