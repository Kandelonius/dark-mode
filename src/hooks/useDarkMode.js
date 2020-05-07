import { useEffect } from "react"

import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key);
    const element = document.querySelector("body")
    useEffect(()=> {
        darkMode ? element.classList.add("dark-mode") : element.classList.remove("dark-mode");
        // console.log(darkMode);
        // if(darkMode === true) {
        //     element.classList.add("dark-mode")
        // } else {
        //     element.classList.remove("dark-mode")
        // }
    }, [darkMode])
    return [darkMode, setDarkMode];
}