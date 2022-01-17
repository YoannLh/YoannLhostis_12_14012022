import styled from 'styled-components'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '8',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '9',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '10',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }
];

const StyledContainer = styled(ResponsiveContainer)`
    width: 100% !important;
    height: 51.5% !important;
    background: #FBFBFB;
    border-radius: 5px;
`

function BarCharts(props) {
    return (
      <StyledContainer>
        <BarChart
          data={data}
          margin={{
            top: 90,
            right: 50,
            left: 20,
            bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="pv" fill="black" width="3px !important" />
          <Bar dataKey="uv" fill="red" width="3px !important" />
        </BarChart>
      </StyledContainer>
    );
  
}

export default BarCharts