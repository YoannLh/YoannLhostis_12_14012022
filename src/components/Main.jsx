import styled from "styled-components"
import SideBar from './SideBar'
import Board from './Board'

const StyledMain = styled.div`
    display: flex;
`

function Main() {
    return(
        <StyledMain>
            <SideBar />
            <Board />
        </StyledMain>
    )
}

export default Main