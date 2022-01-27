import { useContext } from 'react'
import { ThemeContext } from '../context/Context'
import styled from 'styled-components'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react/cjs/react.development'

const StyledRadarCharts = styled(ResponsiveContainer)`
    width: 31% !important;
    height: 100% !important;
    background: #282D30;
    border-radius: 5px;
    color: white;
`
/**
 * Component
 * Render StyledRadarCharts with data
 */
function RadarCharts() {
    const {value4 } = useContext(ThemeContext)
    const [data, setData] = useState()
    console.log(value4)

    useEffect(() => {
        if(!value4.data) return
        const getPerformance = async () => {
            const temp = []
            let index = 1
            for(const el of await value4.data) {
                el.kind = value4.kind[index]
                temp.push(el)
                index++
            }
            console.log(temp)
            setData(temp)
        }
        getPerformance()
    }, [value4])
    return (
        <StyledRadarCharts>
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="white" />
                <PolarAngleAxis dataKey="kind" stroke="white" />
                <Radar dataKey="value" stroke="rgba(255, 0, 0, 0.8)" fill="rgba(255, 0, 0, 0.8)" fillOpacity={0.8} />
            </RadarChart>
        </StyledRadarCharts>
    )
}

export default RadarCharts
