import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components'
import { ThemeContext } from '../context/Context'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StyledBarCharts = styled(ResponsiveContainer)`
    width: 100% !important;
    height: 51.5% !important;
    background: #FBFBFB;
    border-radius: 5px;
`

/**
 * Component
 * Render StyledBarcharts with data
 */
function BarCharts() {
    const { value2 } = useContext(ThemeContext)
    const [data, setData] = useState()

    useEffect(() => {
        if(!value2.sessions) return
        console.log("value 2 : ", value2)
        const getActivity = async () => {
            const temp = []
            for(const el of value2.sessions) {
                const jour = el.day.split(new RegExp(/2020-/))
                temp.push({ day: jour[1], kg: await el.kilogram, cal: await el.calories })
            }
            console.log("temp : ", temp)
            setData(temp)
        }
        getActivity()
    }, [value2])

    return (
      <StyledBarCharts>
        <BarChart
          data={data}
          margin={{
            top: 90,
            right: 50,
            left: 20,
            bottom: 15
          }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical="false" />
          <XAxis dataKey="day" />
          <Tooltip />
          <Bar dataKey="kg" fill="black" barSize={7} />
          <Bar dataKey="cal" fill="red" barSize={7} />
        </BarChart>
      </StyledBarCharts>
    );
  
}

export default BarCharts