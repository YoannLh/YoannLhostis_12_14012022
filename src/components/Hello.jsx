import styled from "styled-components"

const StyledHello = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const StyledHelloFirstName = styled.p`
    font-size: 3em;
`

const StyledFirstName = styled.span`
    color: red;
`

const StyledCongrats = styled.p`
    margin-top: 2%;
`

function Board() {
    return(
        <StyledHello>
            <StyledHelloFirstName>Hello <StyledFirstName>Loulou</StyledFirstName></StyledHelloFirstName>
            <StyledCongrats>Bravo le grand fifou !</StyledCongrats>
        </StyledHello>
    )
}

export default Board