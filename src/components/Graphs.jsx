import styled from "styled-components"
import BarCharts from "./BarCharts"
import LineCharts from './LineCharts'
import RadarCharts from "./RadarCharts"
import PieCharts from "./PieCharts"

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
            <div style={{"display": "flex", "width": "100%", "height": "50%", "background": "black"}}>
                <LineCharts />
                <RadarCharts />
                <PieCharts />
            </div>
        </StyledGraphs>
    )
}

export default Graphs