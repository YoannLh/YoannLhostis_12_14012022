import { useContext } from 'react';
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ThemeContext } from '../context/Context'
import { useEffect, useState } from 'react/cjs/react.development';

const StyledLineCharts = styled(ResponsiveContainer)`
    width: 30% !important;
    height: 100% !important;
    background: red;
    border-radius: 5px;
`

function LineCharts() {
    const { value3 } = useContext(ThemeContext)
    const [data, setData] = useState()
    console.log("value3 : ", value3)

    useEffect(() => {
        const getSessions = async () => {
            const temp = []
            for(const el of await value3.sessions) {
                temp.push(el)
            }
            setData(temp)
        }
        getSessions()
        console.log(data)
    }, [value3])
    
    return (
        <StyledLineCharts>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <XAxis dataKey={"day"} />
                <Tooltip />
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </StyledLineCharts>
    );
}

export default LineCharts
