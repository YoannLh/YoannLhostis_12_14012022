import React, { createContext, useState, useEffect } from 'react'
import Caller from '../callApi/Caller' 

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [data, setData] = useState([])
    useEffect(() => {
        const caller = new Caller()
        async function getData() {
            const newData = await caller.callApi();
            console.log(newData)
            setData(newData)
        }
        getData();
    }, []);

    return (
        <ThemeContext.Provider value={{ data }}>
            {children}
        </ThemeContext.Provider>
    )
}