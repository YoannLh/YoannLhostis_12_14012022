import styled from 'styled-components'

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

function PieCharts() {
    return (
        <StyledPieCharts>
            <StyledPie>
                <p style={{"width": "50%","margin": "auto", "font-size": "1.5em", "text-align": "center"}}>12% de votre objectif</p>
            </StyledPie>
        </StyledPieCharts>
    );
}

export default PieCharts
