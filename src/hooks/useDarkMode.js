import {useEffect} from 'react'

import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () =>{
    const [darkMode, setDarkMode] = useLocalStorage('color');

    useEffect(()=>{
        if(darkMode){
            const body = document.querySelector('body');
            body.classList.add('dark-mode')
        }

        if(!darkMode){
            const body = document.querySelector('body');
            body.classList.remove('dark-mode')
        }
    },[darkMode])

    return [darkMode, setDarkMode]
}

