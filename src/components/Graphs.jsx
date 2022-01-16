import styled from "styled-components"
import BarCharts from "./BarCharts"
import LineCharts from './LineCharts'
import RadarCharts from "./RadarCharts"
import PieCharts from "./PieCharts"

const StyledGraphs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 73.5%;
`

const StyledBarCharts = styled(BarCharts)`
    background: #FBFBFB;
`


function Graphs() {
    return(
        <StyledGraphs>
            <StyledBarCharts />
            <div style={{"display": "flex", "width": "100%", "height": "42.5%", "justifyContent": "space-between"}}>
                <LineCharts />
                <RadarCharts />
                <PieCharts />
            </div>
        </StyledGraphs>
    )
}

export default Graphs