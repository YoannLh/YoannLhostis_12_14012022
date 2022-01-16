import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
    {
        name: 'L',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'M',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'M',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'J',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'V',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'S',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'D',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const StyledLineCharts = styled(ResponsiveContainer)`
    width: 30% !important;
    height: 100% !important;
    background: red;
    border-radius: 5px;
`

function LineCharts() {
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
                <XAxis dataKey="name" />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </StyledLineCharts>
    );
}

export default LineCharts
