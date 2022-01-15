import styled from "styled-components"
import Graphs from './Graphs'
import Scores from './Scores'

const StyledContainerGraphsAndScores = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
`


function ContainerGraphsAndScores() {
    return(
        <StyledContainerGraphsAndScores>
            <Graphs />
            <Scores />
        </StyledContainerGraphsAndScores>
    )
}

export default ContainerGraphsAndScores