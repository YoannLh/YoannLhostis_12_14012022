import styled from "styled-components"
import Hello from './Hello'
import ContainerGraphsAndScores from './ContainerGraphsAndScores'

const StyledBoard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 90px;
`


function Board() {
    return(
        <StyledBoard>
            <Hello />
            <ContainerGraphsAndScores />
        </StyledBoard>
    )
}

export default Board