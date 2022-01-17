import styled from "styled-components"
import SideBar from '../components/SideBar'
import Board from '../components/Board'

const StyledMain = styled.div`
    display: flex;
    width: 100%;
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