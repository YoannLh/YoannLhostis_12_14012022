import styled from "styled-components"

const StyledHello = styled.div`
    display: flex;
    flex-direction: column;
`

function Board() {
    return(
        <StyledHello>
            <p style={{"font-size": "3em"}}>Hello <span style={{"color": "red"}}>Loulou</span></p>
            <p style={{"margin-top": "-30px"}}>Bravo le fifou !</p>
        </StyledHello>
    )
}

export default Board