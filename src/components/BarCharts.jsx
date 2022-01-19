import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components'
import { ThemeContext } from '../context/Context'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StyledContainer = styled(ResponsiveContainer)`
    width: 100% !important;
    height: 51.5% !important;
    background: #FBFBFB;
    border-radius: 5px;
`

function BarCharts() {
    const { value2 } = useContext(ThemeContext)
    const [data, setData] = useState()

    useEffect(() => {
        const getActivity = async () => {
            const temp = []
            let day = 1;
            for(const el of value2.sessions) {
                temp.push({ day: day, kg: await el.kilogram, cal: await el.calories })
                day++
            }
            setData(temp)
        }
        getActivity()
    }, [value2])
    
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
          <XAxis dataKey="day" />
          <Tooltip />
          <Bar dataKey="kg" fill="black" width="3px !important" />
          <Bar dataKey="cal" fill="red" width="3px !important" />
        </BarChart>
      </StyledContainer>
    );
  
}

export default BarCharts