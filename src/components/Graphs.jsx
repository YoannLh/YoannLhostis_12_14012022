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

const StyledContainerLineRadarAndPie = styled.div`
    display: flex;
    width: 100%;
    height: 42.5%;
    justify-content: space-between;
`
/**
 * Component
 * Render StyledGraphs containing StyledBarCharts and 
 * StyledContainerLineRadarAndPie containing LineCharts, RadarChart, PieCharts
 */
function Graphs() {
    return(
        <StyledGraphs>
            <StyledBarCharts />
            <StyledContainerLineRadarAndPie>
                <LineCharts />
                <RadarCharts />
                <PieCharts />
            </StyledContainerLineRadarAndPie>
        </StyledGraphs>
    )
}

export default Graphs