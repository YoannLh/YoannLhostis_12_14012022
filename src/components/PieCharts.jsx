import { useEffect, useContext, useState, useCallback } from 'react/cjs/react.development'
import styled from 'styled-components'
import { ThemeContext } from '../context/Context'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'; 

const StyledContainerPieCharts = styled(ResponsiveContainer)`
    width: 31% !important;
    height: 100% !important;
    background: #FBFBFB;
    border-radius: 5px;
`

const StyledPieChart = styled(PieChart)`
    position: relative;
    display: flex;
    
`

const data = [{ score: `${12}%`, text: "de votre objectif", value: 400 }];

const renderActiveShape = (props) => {
    const { cx, cy, outerRadius, startAngle="45deg", endAngle="90deg", fill, payload } = props;

    return (
        <g>
            <text x={cx} y={cy} dy={0} textAnchor="middle" fill={fill} style={{"width": "25% !important", "align-items": "center"}}>
                {payload.score}
                {payload.text}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                endAngle={endAngle}
                startAngle={startAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 20}
                fill={fill}
            />
        </g>
    );
};

const dataaa = [310]

/**
 * Component
 * Render StyledContainerPieCharts with data
 */
function PieCharts() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <StyledContainerPieCharts>
            <StyledPieChart>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    innerRadius={60}
                    outerRadius={80}
                    fill="red"
                    dataKey="value"
                    paddingAngle={dataaa[0]}
                ></Pie>
            </StyledPieChart>
        </StyledContainerPieCharts>
    )
}

  export default PieCharts

// const StyledPieChart = styled(PieChart)`
//     position: relative;
//     display: flex;
//     transform: rotate(230deg);
// `

// // const StyledPie = styled.div`
// //     display: flex;
// //     width: 145px;
// //     height: 145px;
// //     border-radius: 50%;
// //     background: white;
// //     margin: auto;
// //     border: 10px solid red;
// //     border-bottom-color: transparent;
// //     border-top-color: transparent;
// //     border-right-color: transparent;
// // `

// const StyledResults = styled.p`
//     position: absolute;
//     top: 100px;
//     left: 100px;
//     font-size: 1.5em;
//     text-align: center;
//     z-index: 1000;
// `

// function PieCharts() {
    
//     const { value } = useContext(ThemeContext)
//     const [data, setData] = useState([])

//     useEffect(() => {
//         if(!value.score) return
//         const getData = async () => {
//             let result = (360 - (((value.score * 100) * 360) / 100))
//             setData([ result ])
//         }
//         getData()
//     }, [value])

//     console.log(data[0])

//     return (
        
//         <StyledContainer >
            
//             <StyledPieChart>
//                 <StyledResults>de resultat</StyledResults>
//                 <Pie
//                     data={data}
//                     innerRadius={60}
//                     outerRadius={80}
//                     fill="red"
//                     paddingAngle={data[0]}
//                     dataKey="value"    
//                 >
//                 </Pie>
//             </StyledPieChart>
//         </StyledContainer>
//     );
// }

//   export default PieCharts