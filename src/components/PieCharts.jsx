import { useEffect, useContext, useState, useCallback } from 'react/cjs/react.development'
import styled from 'styled-components'
import { ThemeContext } from '../context/Context'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'; 

const StyledContainerPieCharts = styled.div`
    width: 31% !important;
    height: 100% !important;
    background: #FBFBFB;
    border-radius: 5px;
`
//background: #FBFBFB;

const StyledSector = styled(Sector)`
    background: blue;
`

const StyledPieChart = styled(PieChart)`
    position: relative;
    top: 20px;
    display: flex;
    width: 11.7vw !important;
    height: 11.7vw !important;
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
            <text x={cx} y={cy} dy={0} textAnchor="middle" fill={fill} style={{"font-size": "2.2em"}}>
                {/* {payload.name} */}
                12%
            </text>
            <text x={cx} y={cy} dy={30} textAnchor="middle" fill="grey" style={{"font-size": "1.2em"}}>
                de votre
            </text>
            <text x={cx} y={cy} dy={60} textAnchor="middle" fill="grey" style={{"font-size": "1.2em"}}>
                objectif
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

function PieCharts() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <StyledContainerPieCharts>
            <p 
            style={{
                position: "relative", 
                top: "8%", left: "8%", 
                color: "black", 
                fontSize: "1em"
            }}>
                Score
            </p>
            <ResponsiveContainer>
                <StyledPieChart>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        cx={"50%"}
                        cy={"27%"}
                        innerRadius={100}
                        outerRadius={119}
                        fill="black"
                        dataKey="value"
                        paddingAngle={200}
                    />
                </StyledPieChart>
            </ResponsiveContainer>
        </StyledContainerPieCharts>
    );
}

export default PieCharts
