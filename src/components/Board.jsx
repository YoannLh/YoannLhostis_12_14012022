import styled from "styled-components"
import { ThemeProvider } from '../context/Context'
import Hello from './Hello'
import ContainerGraphsAndScores from './ContainerGraphsAndScores'

const StyledBoard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5%;
`
/**
 * Component
 * Render StyledBoard containing ThemeProvider containing Hello and ContainerGraphsAndScores
 */
function Board() {
    return(
        <StyledBoard>
            <ThemeProvider>
                <Hello />
                <ContainerGraphsAndScores />
            </ThemeProvider>
        </StyledBoard>
    )
}

export default Board