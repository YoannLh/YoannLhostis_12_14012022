import styled from "styled-components"
import Score from './Score'

const StyledScores = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-between;
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