import { useContext } from 'react';
import styled from 'styled-components'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { ThemeContext } from '../context/Context'
import { useEffect, useState } from 'react/cjs/react.development';

const StyledLineCharts = styled.div`
    width: 31% !important;
    height: 100% !important;
    background: red;
    border-radius: 5px;
`

const StyledTitle = styled.div`
    position: relative;
    top: 8%;
    left: 8%;
    color: rgba(255, 255, 255, 0.5);
    fontSize: 1em;
`

/**
 * Component
 * Render StyledLineCharts with data
 */
function LineCharts() {

    const { value3 } = useContext(ThemeContext)
    const [data, setData] = useState()

    useEffect(() => {
        if(!value3.sessions) return
        const getSessions = async () => {
            const temp = []
            for(const el of await value3.sessions) {
                temp.push(el)
            }
            setData(temp)
        }
        getSessions()
    }, [value3])
    
    return (
        <StyledLineCharts>
            <StyledTitle >Durée moyenne des<br/>sessions</StyledTitle>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 20,
                        bottom: 50,
                    }}
                >
                    <XAxis dataKey={"day"} />
                    <Tooltip cursor={false} />
                    <Line type="natural" dataKey="sessionLength" unit=" min" stroke="white" dot={false} activeDot={{ r: 3 }} />
                </LineChart>
            </ResponsiveContainer>
        </StyledLineCharts>
    );
}

export default LineCharts
