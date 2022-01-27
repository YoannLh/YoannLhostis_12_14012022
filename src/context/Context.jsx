import React, { createContext, useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'
import Caller from '../callApi/Caller'

export const ThemeContext = createContext()

/**
 * Create ThemeContext with all data user
 * @param {*}
 * @returns ThemeContext with states for children components in prop value
 */
export const ThemeProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [userActivity, setUserActivity] = useState([])
    const [userAverageSessions, setUserAverageSessions] = useState([])
    const [userPerformance, setUserPerformance] = useState([])

    useEffect(() => {
        /** 
         * Create new caller, execute all methods calls to API et set it all in differents states 
        */
        async function getUserAndAllInformations() {
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
        getUserAndAllInformations()
    }, [children]);

    console.log(data)

    ThemeProvider.propTypes = {
        value: PropTypes.object
    }
    
    ThemeProvider.defaultProps = {
        value: {}
    }

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