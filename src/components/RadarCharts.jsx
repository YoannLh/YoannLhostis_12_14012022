import styled from 'styled-components'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const data = [
    {
        subject: 'Intensité',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Vitesse',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Force',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Endurance',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Energie',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'Cardio',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

const StyledRadarCharts = styled(ResponsiveContainer)`
    width: 30% !important;
    height: 100% !important;
    background: #282D30;
    border-radius: 5px;
    color: white;
`

function RadarCharts() {
    return (
        <StyledRadarCharts>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.9} />
            </RadarChart>
        </StyledRadarCharts>
    )
}

export default RadarCharts
