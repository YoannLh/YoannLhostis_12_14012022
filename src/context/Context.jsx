import React, { createContext, useState, useEffect } from 'react'
import Caller from '../callApi/Caller' 

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])
  const [userPerformance, setUserPerformance] = useState([])

    useEffect(() => {
        async function getUser() {
            const caller = new Caller()
            const id = await caller.getId()
            console.log(id)
            if(id === 404) { 
                window.location.href = '*'
                return
            } else {
                const newDataUser = await caller.getUser();
            const newDataActivity = await caller.getActivity()
            const newDataAverageSessions = await caller.getAverageSessions()
            const newDataPerformance = await caller.getPerformance()

            setData(await newDataUser)
            setUserActivity(await newDataActivity)
            setUserAverageSessions(await newDataAverageSessions)
            setUserPerformance(await newDataPerformance)
            }
        }
        getUser()
    }, [children]);

    console.log(data)

    return (
        <ThemeContext.Provider 
            value={{ 
                value: data, 
                value2: userActivity, 
                value3: userAverageSessions, 
                value4: userPerformance 
            }} 
        >
            {children}
        </ThemeContext.Provider>
    )
}