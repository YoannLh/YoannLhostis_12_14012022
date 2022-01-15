import styled from "styled-components"
import BarCharts from "./BarCharts"

const StyledGraphs = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
`

const StyledBarCharts = styled(BarCharts)`
    background: grey;
`


function Graphs() {
    return(
        <StyledGraphs>
            <StyledBarCharts />
        </StyledGraphs>
    )
}

export default Graphs