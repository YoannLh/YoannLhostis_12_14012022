import styled from "styled-components"
import Score from './Score'

const StyledScores = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    width: 23.5%;
`

function Scores() {
    return(
        <StyledScores>
            <Score />
            <Score />
            <Score />
            <Score />
        </StyledScores>
    )
}

export default Scores