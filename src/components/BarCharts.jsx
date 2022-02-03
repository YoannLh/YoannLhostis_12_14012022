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

const StyledContainerTitleAndUnits = styled.div`
    display: flex;
    position: relative;
    top: 8%;    
`

const StyledTitle = styled.p`
    position: absolute; 
    left: 5%;
`

const StyledUnits = styled.div`
    position: absolute; 
    right: 5%;
    display: flex;
    width: 65%;
    height: 20px;
`

const StyledContainerWeight = styled.div`
    display: flex; 
    width: 100%; 
    height: 20px; 
    alignItems: center;
`

const StyledDotWeight = styled.div`
    width: 10px; 
    height: 10px; 
    border-radius: 50%;
    background: black;
    margin: auto 1% auto auto;
`

const StyledWeight = styled.p`
    display: inline-block; 
    color: grey;
`

const StyledContainerCals = styled.div`
    display: flex; 
    width: 100%;
    height: 20px ;
    alignItems: center; 
    marginLeft: 2%;
`

const StyledDotCals = styled.div`
    width: 10px; 
    height: 10px; 
    border-radius: 50%; 
    background: red; 
    margin: auto 1% auto auto;
`

const StyledCals = styled.p`
    display: inline-block; 
    color: grey;
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

    return (
        <StyledBarCharts>
            <StyledContainerTitleAndUnits>
                <StyledTitle>Activité quotidienne</StyledTitle>
                <StyledUnits>
                    <StyledContainerWeight>
                        <StyledDotWeight></StyledDotWeight>
                        <StyledWeight>Poids (kg)</StyledWeight>
                    </StyledContainerWeight>
                    <StyledContainerCals>
                        <StyledDotCals></StyledDotCals>
                        <StyledCals>Calories brûlées (kCal)</StyledCals>
                    </StyledContainerCals>
                </StyledUnits>
            </StyledContainerTitleAndUnits>
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
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
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


