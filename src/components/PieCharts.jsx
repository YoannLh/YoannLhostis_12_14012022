import { useEffect, useContext, useState } from 'react/cjs/react.development'
import styled from 'styled-components'
import { ThemeContext } from '../context/Context'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'; 

const StyledContainerPieCharts = styled.div`
    position: relative;
    width: 31% !important;
    height: 100% !important;
    background: #FBFBFB;
    border-radius: 5px;
`

const StyledTitle = styled.p`
    position: absolute;
    top: 8%;
    left: 8%;
    color: "black";
    fontSize: "1em";
`

const StyledContainerScore = styled.div`
    position: absolute; 
    top: 36%; 
    left: 39%; 
    color: black; 
    text-align: center;
    div {
        font-size: 1.6em;
    }
    p {
        color: grey;
    }
    @media screen and (max-width: 1024px) {
        left: 34%;
    }
`

function PieCharts() {
    const [score, setScore] = useState(0);
    const dataUser = useContext(ThemeContext)

    const data = [
        { name: "completed", value: score, fillColor: "red" },
        { name: "not-completed", value: 1 - score, fillColor: "#FBFBFB" },
      ];

    useEffect(() => {
        if(!dataUser) return
        const getScore = async () => {
            setScore(await dataUser.value.score)
        }
        getScore()
    }, [dataUser])

    return (
        <StyledContainerPieCharts>
            <StyledTitle>
                Score
            </StyledTitle>
            <StyledContainerScore>
                <div>{score * 100}%</div>
                <p>de votre</p>
                <p>objectif</p>
            </StyledContainerScore>
            <ResponsiveContainer
                width={"100%"}
                height={"100%"}
            >
                <PieChart width={160} height={160}>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}    
                    >
                        {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.fillColor}
                            cornerRadius="50%"
                        />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </StyledContainerPieCharts>
    );
}

export default PieCharts
