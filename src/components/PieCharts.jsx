import { useEffect, useContext, useState } from 'react/cjs/react.development'
import styled from 'styled-components'
import { ThemeContext } from '../context/Context'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'; 

const StyledContainer = styled(ResponsiveContainer)`
    width: 31% !important;
    height: 100% !important;
    background: #FBFBFB;
    border-radius: 5px;
`

const StyledPieChart = styled(PieChart)`
    display: flex;
    transform: rotate(230deg);
    background: transparent;
`

// const StyledPie = styled.div`
//     display: flex;
//     width: 145px;
//     height: 145px;
//     border-radius: 50%;
//     background: white;
//     margin: auto;
//     border: 10px solid red;
//     border-bottom-color: transparent;
//     border-top-color: transparent;
//     border-right-color: transparent;
// `

const StyledResults = styled.p`
    width: 50%;
    height: 50%;
    margin: auto;
    font-size: 1.5em;
    text-align: center;
`

function PieCharts() {
    
    const { value } = useContext(ThemeContext)
    const [data, setData] = useState([])

    useEffect(() => {
        if(!value.score) return
        const getData = async () => {
            setData([{"name":"loulou", "value": value.score}])
        }
        getData()
        console.log(value.score)
    }, [value])

    return (
        <StyledContainer >
            <StyledPieChart>
                <Pie
                    data={data}
                    innerRadius={60}
                    outerRadius={80}
                    fill="red"
                    paddingAngle={360 - (0.12 * 100 * 360) / 100}
                    dataKey="value"    
                >
                    <StyledResults>% de resultat</StyledResults>
                </Pie>
            </StyledPieChart>
        </StyledContainer>
    );
}

  export default PieCharts