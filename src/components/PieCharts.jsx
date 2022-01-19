import { useEffect, useContext, useState } from 'react/cjs/react.development'
import styled from 'styled-components'
import { ThemeContext } from '../context/Context'

const StyledPieCharts = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    background: #FBFBFB;
    border-radius: 5px;
`

const StyledPie = styled.div`
    display: flex;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background: white;
    margin: auto;
    border: 10px solid red;
    border-bottom-color: transparent;
    border-top-color: transparent;
    border-right-color: transparent;
`

const StyledResults = styled.p`
    width: 50%;
    margin: auto;
    font-size: 1.5em;
    text-align: center;
`

function PieCharts() {
    const { value } = useContext(ThemeContext)
    const [score, setScore] = useState()
    useEffect(() => {
        const getScore = async () => {
            setScore(await value.score)
        } 
        getScore()
    }, [value])
    return (
        <StyledPieCharts>
            <StyledPie>
                <StyledResults>{score * 100} % de votre objectif</StyledResults>
            </StyledPie>
        </StyledPieCharts>
    );
}

export default PieCharts
