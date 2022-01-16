import styled from "styled-components"

const StyledHello = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

function Board() {
    return(
        <StyledHello>
            <p style={{"font-size": "3em"}}>Hello <span style={{"color": "red"}}>Loulou</span></p>
            <p style={{"margin-top": "2%"}}>Bravo le fifou !</p>
        </StyledHello>
    )
}

export default Board