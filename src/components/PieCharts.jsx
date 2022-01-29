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
//background: #FBFBFB;

const StyledSector = styled(Sector)`
    background: blue;
    cornerRadius={20}
`

const StyledPieChart = styled(PieChart)`
    position: relative;
    top: 30px;
    display: flex;
    width: 170px !important;
    height: 170px !important;
    background: white; 
    border-radius: 50%;
    margin: auto;
`

const data = [{ name: "Group A", value: 400 }];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        startAngle={0}
        endAngle={360}
        innerRadius={outerRadius}
        outerRadius={outerRadius + 17}
        fill="#FBFBFB"
        cornerRadius={20}
        zIndex={1}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={90}
        endAngle={endAngle}
        innerRadius={outerRadius}
        outerRadius={outerRadius + 15}
        fill="red"
        cornerRadius={20}
        zIndex={2}
      />
    </g>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledContainerPieCharts>
        <StyledPieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={122}
        cy={64}
        innerRadius={100}
        outerRadius={112}
        fill="black"
        dataKey="value"
        paddingAngle={200}
      />
    </StyledPieChart>
    </StyledContainerPieCharts>
  );
}














// const data = [{ score: `${12}%`, value: 400 }];

// const renderActiveShape = (props) => {
//     const { cx, cy, outerRadius, startAngle, endAngle, fill, payload } = props;

//     return (
//         <g style={{
//             "background": "white !important"
//         }}>
//             <text 
//                 x={cx} 
//                 y={cy} 
//                 dy={-40} 
//                 textAnchor="middle"
//                 verticalAnchor="middle"
//                 angle={180}
//                 fontSize={25}
//                 style={{
                    
//                 }}>
//                 {payload.score}
//             </text>
//             <text
//                 x={cx} 
//                 y={cy} 
//                 dy={0}
//                 textAnchor="middle"
//                 verticalAnchor="middle"
//                 fill="grey" 
//             >
//                 de votre
//             </text>
//             <text
//                 x={cx} 
//                 y={cy} 
//                 dy={40}
//                 textAnchor="middle"
//                 verticalAnchor="middle"
//                 fill="grey"  
//             >
//                 objectif
//             </text>
//             <StyledSector
//                 cx={cx}
//                 cy={cy}
//                 endAngle={endAngle}
//                 startAngle={0}
//                 innerRadius={outerRadius + 6}
//                 outerRadius={outerRadius + 20}
//                 fill={fill}
//                 cornerRadius={20}
//             />
//         </g>
//     );
// };

// /**
//  * Component
//  * Render StyledContainerPieCharts with data
//  */
// function PieCharts() {
//     const { value } = useContext(ThemeContext)
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [perimetre, setPerimetre] = useState(0);

//     useEffect(() => {
//         if(!value) return
//         const getPercent = async () => {
//             const result = 360 - ((await value.score * 100) * 360 / 100)
//             setPerimetre(result)
//         }
//         getPercent()
//     }, [value])
//     return (
//         <StyledContainerPieCharts>
//             <StyledPieChart>
//                 <Pie
//                     activeIndex={activeIndex}
//                     activeShape={renderActiveShape}
//                     data={data}
//                     innerRadius={60}
//                     outerRadius={80}
//                     fill="red"
//                     dataKey="value"
//                     paddingAngle={perimetre}
//                 ></Pie>
//             </StyledPieChart>
//         </StyledContainerPieCharts>
//     )
// }

//   export default PieCharts












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