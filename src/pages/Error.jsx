import styled from "styled-components"

const StyledContainerError = styled.div`
    display: flex;
    width: 100%:
    height: 100%;
    margin-top: 300px;
`

const StyledErrorMessage = styled.p`
    margin: auto;
`

function Error() {
    return(
        <StyledContainerError>
            <StyledErrorMessage>Oups, cet utilisateur est introuvable :/</StyledErrorMessage>
        </StyledContainerError>
    )
}

export default Error