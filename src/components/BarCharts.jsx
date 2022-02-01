import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components'
import { ThemeContext } from '../context/Context'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StyledBarCharts = styled.div`
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
            setData(temp)
        }
        getActivity()
    }, [value2])

    console.log(data)

    return (
        <StyledBarCharts>
            <div style={{position: "relative", top: "8%", display: "flex"}}>
                <p style={{position: "absolute", left: "5%"}}>Activité quotidienne</p>
                <div style={{position: "absolute", right: "5%", display: "flex", width: "30%", height: "20px", justifyContent: "space-between"}}>
                    <div style={{display: "flex", height: "20px", alignItems: "center"}}>
                        <div style={{width: "10px", height: "10px", borderRadius: "50%", background: "black", marginRight: "1%"}}></div>
                        <p style={{display: "inline-block"}}>Poids(kg)</p>
                    </div>
                    <div style={{display: "flex", height: "20px", alignItems: "center", marginLeft: "2%"}}>
                        <div style={{width: "10px", height: "10px", borderRadius: "50%", background: "red", marginRight: "1%"}}></div>
                        <p style={{display: "inline-block"}}>Caloriesbrûlées(kCal)</p>
                    </div>
                </div>
            </div>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 90,
                        right: 20,
                        left: 20,
                        bottom: 20
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} style={{zIndex: "2"}} />
                    <YAxis dataKey="cal" orientation="right" />
                    <XAxis dataKey="day" />
                    <Tooltip 
                        labelStyle={{display: "none"}}
                        payload={[{}]}
                        contentStyle={{color: "white !important"}}
                    />
                    <Bar dataKey="kg" unit="kg" fill="black" barSize={7} />
                    <Bar dataKey="cal" unit="kCal" fill="red" barSize={7} />
                </BarChart>
            </ResponsiveContainer>
        </StyledBarCharts>
    );
}

export default BarCharts


