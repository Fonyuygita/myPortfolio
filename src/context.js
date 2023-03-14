import { children, createContext, useEffect, useReducer } from "react";
import { useState } from "react";

export const ThemeContext=createContext();

export const DarkModeProvider=({children})=>{
// create a state for 

const [dark, setDark]=useState(JSON.parse(localStorage.getItem("dark")) || null);



    // create a toggle function

    const toggle=()=>{
        setDark(!dark);
    }

    useEffect(()=>{

JSON.stringify(localStorage.setItem("dark", dark));

    }, [dark])

return (

    <ThemeContext.Provider value={{dark, toggle}} >{children}</ThemeContext.Provider>
)
    
}